const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
const loading = document.querySelector("#loading");

const fetchData = (url) => {
  // Show loading spinner initially
  loading.style.display = "block";

  // Fetch data from the API
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Hide loading spinner once data is received
      loading.style.display = "none";

      // Process each book and create elements
      data.forEach((book) => {
        // Create container for each book
        const bookElement = document.createElement("div");
        bookElement.className = "book mb-4 p-3 border rounded";

        // Extract and format book information
        const title = document.createElement("h3");
        title.textContent = book.name;
        title.className = "text-center";

        const author = document.createElement("p");
        author.textContent = `Author: ${book.authors.join(", ")}`;
        author.className = "text-center";

        const year = document.createElement("p");
        const publicationDate = new Date(book.released);
        year.textContent = `Published: ${publicationDate.getFullYear()}`;
        year.className = "text-center";

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.numberOfPages}`;
        pages.className = "text-center";

        // Append all elements to book container
        bookElement.appendChild(title);
        bookElement.appendChild(author);
        bookElement.appendChild(year);
        bookElement.appendChild(pages);

        // Append book container to main books div
        app.appendChild(bookElement);
      });

      // Style the books container
      app.style.display = "flex";
      app.style.flexDirection = "column";
      app.style.alignItems = "center";
      app.style.gap = "20px";
    })
    .catch((error) => {
      // Hide loading spinner and show error message
      loading.style.display = "none";
      app.textContent = `Error loading books: ${error.message}`;
      app.style.textAlign = "center";
      app.style.color = "red";
    });
};

// Call the function to fetch and display data
fetchData(url);
