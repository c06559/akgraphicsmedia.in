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



// Disable   Contant
document.addEventListener("contextmenu", event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};

