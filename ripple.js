export function createRipple(event) {
    const element = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - element.offsetLeft - radius}px`; // TODO fix: If the element is not fixed, creates span far away
    circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = element.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    element.appendChild(circle);
}

export function attachToElemnts() {
    Array.from(document.querySelectorAll(
        "button, .picture-link"
    )).forEach((element, index) => {
        element.addEventListener("click", createRipple);
    });
}

attachToElemnts();