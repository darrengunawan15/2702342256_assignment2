const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        updateRating(rating);
    });

    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        highlightStars(rating);
    });

    star.addEventListener('mouseout', () => {
        const rating = parseInt(ratingValue.textContent);
        highlightStars(rating);
    });
});

function updateRating(rating) {
    ratingValue.textContent = rating;
    highlightStars(rating);
}

function highlightStars(rating) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}