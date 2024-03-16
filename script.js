document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Yumuşak kaydırma efekti
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.querySelector('#news-container');
    const loadMoreBtn = document.querySelector('#load-more-btn');
    let newsCount = 4;

    Array.from(newsContainer.children)
        .slice(newsCount)
        .forEach(card => card.style.display = 'none');

    loadMoreBtn.addEventListener('click', loadMoreNews);

    updateLoadMoreButton();

    function loadMoreNews() {
        Array.from(newsContainer.children)
            .slice(newsCount, newsCount + 4)
            .forEach(card => card.style.display = 'flex');

        newsCount += 4;
        updateLoadMoreButton();
    }

    function updateLoadMoreButton() {
        loadMoreBtn.style.display = (newsContainer.children.length <= newsCount) ? 'none' : 'block';
    }
});

const goToNewsPage = (newsPage) => {
    const newsUrl = newsPage;
    window.location.href = newsUrl;
};


