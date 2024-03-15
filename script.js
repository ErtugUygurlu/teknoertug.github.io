document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('news-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    let newsCount = 4;

    for (let i = newsCount; i < newsContainer.children.length; i++) {
        const card = newsContainer.children[i];
        card.style.display = 'none';
    }

    loadMoreBtn.addEventListener('click', function () {

        for (let i = newsCount; i < newsCount + 4; i++) {
            if (i < newsContainer.children.length) {
                const card = newsContainer.children[i];
                card.style.display = 'flex';
            }
        }

        newsCount += 4;

        if (newsCount >= newsContainer.children.length) {
            loadMoreBtn.style.display = 'none';
        }
    });


    if (newsContainer.children.length <= newsCount) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
});

function goToNewsPage(newsPage) {

    var newsUrl = newsPage;

    window.location.href = newsUrl;
}
