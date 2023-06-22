const email = 'd.nesterov@innopolis.university'; // replace with your email
const comicContainer = document.getElementById('comic_container');

// Fetch the XKCD comic identifier
fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
    .then(response => response.text())
    .then(id => {
        // Fetch the comic using the obtained identifier
        fetch(`https://fwd.innopolis.university/api/comic?id=${id}`)
            .then(response => response.json())
            .then(comic => {
                // Create a new image element and set its src and alt attributes
                const img = document.createElement('img');
                img.src = comic.img;
                img.alt = comic.alt;
                img.className = "comic-style";

                // Create a new heading element for the title and set its text content
                const title = document.createElement('h1');
                title.textContent = comic.safe_title;
                title.className = "main-card-title"

                // Create a new paragraph element for the date and set its text content
                const date = document.createElement('p');
                const publishDate = new Date(`${comic.year}-${comic.month}-${comic.day}`);
                date.textContent = publishDate.toLocaleDateString();
                date.className = "main-card-text"

                // Append the image, title, and date elements to the comic container
                comicContainer.appendChild(title);
                comicContainer.appendChild(date);
                comicContainer.appendChild(img);
            });
    });