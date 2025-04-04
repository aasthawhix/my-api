function fetchData() {
    fetch("https://yourusername.github.io/my-api/data.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Error fetching API:", error));
}
