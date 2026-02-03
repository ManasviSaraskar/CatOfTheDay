function loadCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            const catImg = document.getElementById("catImage");
            catImg.src = data[0].url;
        })
        .catch(error => {
            console.error("Error fetching cat:", error);
        });
}

// load one cat automatically on page load
loadCat();
