
        function searchProducts() {
            // 1. Get the value typed in the search bar
            var input = document.getElementById("searchInput");
            var filter = input.value.toUpperCase();
            
            // 2. Get all product cards
            var grid = document.getElementById("productGrid");
            var cards = grid.getElementsByClassName("product-item");
            var noResults = document.getElementById("no-results");
            
            var foundAny = false;

            // 3. Loop through all cards and hide those that don't match
            for (var i = 0; i < cards.length; i++) {
                var titleElement = cards[i].getElementsByTagName("h2")[0];
                if (titleElement) {
                    var txtValue = titleElement.textContent || titleElement.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        cards[i].style.display = ""; // Show card
                        foundAny = true;
                    } else {
                        cards[i].style.display = "none"; // Hide card
                    }
                }
            }

            // 4. Show "No results" message if nothing matches
            if (foundAny) {
                noResults.style.display = "none";
            } else {
                noResults.style.display = "block";
            }
        }

        // Optional: Allow pressing "Enter" key to search
        document.getElementById("searchInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchProducts();
            }
        });




document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        const parent = this.parentElement;

        // Close others
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== parent) d.classList.remove('active');
        });

        parent.classList.toggle('active');
    });
});

document.querySelector('.all-btn').addEventListener('click', function () {
    document.querySelector('.sub-header').classList.toggle('show');
});
