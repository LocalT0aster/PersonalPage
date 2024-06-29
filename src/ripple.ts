export function createRipple(event: MouseEvent): void {
  const element: HTMLElement = event.currentTarget as HTMLElement;

  const circle: HTMLSpanElement = document.createElement("span");
  const diameter: number = Math.max(element.clientWidth, element.clientHeight);
  const radius: number = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - element.offsetLeft - radius}px`; // TODO fix: If the element is not fixed, creates span far away
  circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple: HTMLSpanElement = element.getElementsByClassName("ripple")[0] as HTMLSpanElement;

  if (ripple) {
    ripple.remove();
  }

  element.appendChild(circle);
}

export function attachToElemnts(): void {
  Array.from(document.querySelectorAll("button, .picture-link")).forEach((element: Element) => {
    (element as HTMLElement).addEventListener("click", createRipple);
  });
}

export function attachStylesheet(fileName: string): void {
  let link: HTMLLinkElement = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;
  document.head.appendChild(link);
}

export function attachRipples(): void {
  attachStylesheet("ripple.css");
  attachToElemnts();
}
