const articles = [
    {
        title: "Starting a project in Python vs Starting a project in JavaScript",
        description: "Exploring the boiler plate and setup differences between JavaScript and Python projects.",
        date: "2026-09-02",
        updatedate: "2026-09-08",
        url: "articles/article-1.html"
    },
    {
        title: "Python Virtual Environments",
        description: "Why do you need a virtual environment for python?",
        date: "2026-09-01",
        updatedate: "2026-09-08",
        url: "articles/article-2.html"
    }
];

const articleList = document.getElementById("article-list");

articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "article-card";

    card.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <small>${article.date}</small>
        ${article.updatedate ? `<small>Updated: ${article.updatedate}</small>` : ''}
    
        ${article.url}
        <a href="${article.url}" class="read-more">
            Read More →
        </a>
    `;

    articleList.appendChild(card);
});
