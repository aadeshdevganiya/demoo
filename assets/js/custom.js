function calculateNights() {
    const checkInDate = document.getElementById("checkInDate").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const nightsCount = document.getElementById("nightsCount");

    if (checkInDate && checkOutDate) {
        const start = new Date(checkInDate);
        const end = new Date(checkOutDate);

        // Calculate the difference in time
        const timeDiff = end - start;

        // Calculate the difference in days
        const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

        // Set the number of nights only if check-out is after check-in
        nightsCount.value = daysDiff > 0 ? daysDiff : 0;
    } else {
        nightsCount.value = "";
    }
}

// next button

// Loop through each tab and add the next button functionality
const nextBtns = document.querySelectorAll('.next-btn a');

nextBtns.forEach(button => {
    button.addEventListener('click', function() {
        // Get the current active tab and the nav-links
        const currentActiveTab = document.querySelector('.nav-link.active');
        const allTabs = document.querySelectorAll('.nav-link');
        
        // Find the next tab
        let nextTab = currentActiveTab.nextElementSibling;
        
        // If the current tab is the last one, loop back to the first tab
        if (!nextTab) {
            nextTab = allTabs[0];
        }
        
        // Deactivate the current tab and its content
        currentActiveTab.classList.remove('active');
        document.querySelector(currentActiveTab.getAttribute('data-bs-target')).classList.remove('show', 'active');
        
        // Activate the next tab and its content
        nextTab.classList.add('active');
        document.querySelector(nextTab.getAttribute('data-bs-target')).classList.add('show', 'active');
    });
});

function updatePlaceholders() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById('markupSelect').value;

    // Get all the input fields with the class '.field-input' that are numbers
    var inputs = document.querySelectorAll('.markup .field-input[type="number"]');

    // Loop through each input field and update the placeholder based on the selection
    inputs.forEach(function(input) {
        var inputType = input.getAttribute('data-type'); // Get the custom data attribute

        if (selectedValue === "$") {
            input.placeholder = "Enter Amount"; // General placeholder for Amount
            input.disabled = false; // Enable input fields if $ is selected
        } else if (selectedValue === "%") {
            input.placeholder = "Enter Percentage"; // General placeholder for Percentage
            input.disabled = false; // Enable input fields if % is selected
        } else {
            // If no selection, disable the inputs
            input.placeholder = "Enter Amount"; // Default placeholder
            input.disabled = true; // Disable all input fields
        }
    });
}


// ====== hotel filter tab ======== 

$(document).ready(function() {
    // When a tab is clicked
    $(".tablist-main a").on("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all tabs and content
        $(".tablist-main a").removeClass("active");
        $(".tab-content .tab-content-pane").removeClass("active");

        // Add 'active' class to the clicked tab
        $(this).addClass("active");

        // Get the data-tab attribute of the clicked tab
        var tabId = $(this).data("tab");

        // Show the corresponding tab content
        $("#" + tabId).addClass("active");
    });
});

const priceRange = document.querySelector(".price-range");
const priceSlider = document.querySelector(".price-slider");

priceSlider.addEventListener("input", function() {
    priceRange.textContent = `₹${this.value}`;
});
