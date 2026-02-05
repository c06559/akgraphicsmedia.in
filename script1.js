function searchProducts() {
    // 1. Search box se text lein aur chhota (lowercase) karein
    let filter = document.getElementById('searchInput').value.toLowerCase();
    
    // 2. Saare product cards ko select karein
    let cards = document.querySelectorAll('.product-card-link');

    // 3. Har card par loop chalayein
    cards.forEach(card => {
        // Card ke andar ka Title (h3) nikalein
        let title = card.querySelector('h3').innerText.toLowerCase();

        // Agar title me search text hai to 'block' (dikhao), nahi to 'none' (chupao)
        if (title.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Extra Feature: Taaki button na dabana pade, type karte hi search ho jaye

document.getElementById('searchInput').addEventListener('keyup', searchProducts);


<script>
document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function () {

        const dropdown = this.parentElement;

        // Close other open menus
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
        });

        // Toggle current
        dropdown.classList.toggle('active');
    });
});
</script>
