const articles = [
    {
        title: "Introduction",
        description: "A brief introduction to this series of articles to tell my journey towards AI software development",
        date: "2026-09-09",
        updatedate: "2026-09-08",
        url: "articles/article-0.html"
    },
    {
        title: "Starting a project ",
        description: "Exploring the boiler plate and setup differences between JavaScript and Python projects.",
        date: "2026-09-01",
        updatedate: "2026-09-08",
        url: "articles/article-1.html"
    },
    {
        title: "Python Virtual Environments",
        description: "Why do you need a virtual environment for python?",
        date: "2026-09-01",
        updatedate: "2026-09-08",
        url: "articles/article-2.html"
    },
    {
        title: "Syntax ",
        description: "Comparing the syntax differences between Python and JavaScript.",
        date: "2026-09-08",
        updatedate: null,
        url: "articles/article-3.html"
    },
    {
        title: "Data Structures ",
        description: "Comparing the data structure differences between Python and JavaScript.",
        date: "2026-09-08",
        updatedate: null,
        url: "articles/article-4.html"
    },
    {
        title: "Flow Control",
        description: "Comparing Flow Control differences between Python and JavaScript.",
        date: "2026-11-08",
        updatedate: null,
        url: "articles/article-5.html"
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
        ${article.updatedate ? `<small>Last updated: ${article.updatedate}</small>` : ''}
    
        ${article.url ? `<a href="${article.url}" class="read-more">Read More →</a>` : ''}

    `;

    articleList.appendChild(card);
});
