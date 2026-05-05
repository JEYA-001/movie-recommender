const API_KEY = "9d25509d";

async function searchMovie() {
    const movie = document.getElementById("searchBox").value;

    if (!movie) {
        alert("Enter movie name");
        return;
    }

    const res = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`);
    const data = await res.json();

    displayMovie(data);
}

function displayMovie(data) {
    const container = document.getElementById("movieContainer");

    if (data.Response === "False") {
        container.innerHTML = "<p>Movie not found</p>";
        return;
    }

    container.innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}">
        <p>⭐ Rating: ${data.imdbRating}</p>
        <p>${data.Plot}</p>
    `;
}