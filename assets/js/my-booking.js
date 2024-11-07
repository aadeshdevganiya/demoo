// Filter results by date range
function filterResults() {
    let fromDate = document.getElementById("from-date").value;
    let toDate = document.getElementById("to-date").value;
    // Implement filtering logic here (e.g., using table rows or server request)
    alert(`Filter from ${fromDate} to ${toDate}`);
}

// Reset filters
function resetFilters() {
    document.getElementById("from-date").value = '';
    document.getElementById("to-date").value = '';
    // Implement reset logic here (e.g., reset table rows)
    alert("Filters reset");
}


// Sample data for pagination (in a real app, use data from backend)
let currentPage = 1;
const totalPages = 89;

// Function to go to a specific page
function goToPage(page) {
    if (page === 'prev') {
        if (currentPage > 1) currentPage--;
    } else if (page === 'next') {
        if (currentPage < totalPages) currentPage++;
    } else {
        currentPage = page;
    }

    // Update pagination buttons
    updatePagination();

    // Load data for the selected page (to be implemented as per data source)
    alert(`Showing data for page ${currentPage}`);
}

// Function to update pagination buttons
function updatePagination() {
    const paginationButtons = document.querySelectorAll('.pagination button');
    paginationButtons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText == currentPage) {
            button.classList.add('active');
        }
    });
}

// Initial call to set up pagination
updatePagination();
