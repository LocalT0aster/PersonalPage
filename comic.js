const email = "d.nesterov@innopolis.university";
const comicContainer = document.getElementById("comic_container");
const img = document.getElementById("comic");
const title = document.getElementById("title");
const date = document.getElementById("date");

// Fetch the XKCD comic identifier
fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
    .then((response) => response.text())
    .then((id) => {
        // Fetch the comic using the obtained identifier
        fetch(`https://fwd.innopolis.university/api/comic?id=${id}`)
            .then((response) => response.json())
            .then((comic) => {
                // Edit placeholder image source and alt text
                img.src = comic.img;
                img.alt = comic.alt;

                // Set title text
                title.textContent = comic.safe_title;

                // Set date text
                const publishDate = new Date(
                    `${comic.year}-${comic.month}-${comic.day}`
                );
                date.textContent = publishDate.toLocaleDateString();
            });
    });
