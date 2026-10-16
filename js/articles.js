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
        description: "Exploring boiler plate and setup differences between JavaScript and Python projects.",
        date: "2026-09-01",
        updatedate: "2026-09-08",
        url: "articles/article-1.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Python Virtual Environments",
        description: "Why do you need a virtual environment for python?",
        date: "2026-09-01",
        updatedate: "2026-09-08",
        url: "articles/article-2.html",
        img: "Python.png",
        imgAlt: "Python Logo happy face"
    },
    {
        title: "Syntax ",
        description: "Comparing syntax differences between Python and JavaScript.",
        date: "2026-09-08",
        updatedate: null,
        url: "articles/article-3.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Data Structures ",
        description: "Comparing data structure differences between Python and JavaScript.",
        date: "2026-09-08",
        updatedate: null,
        url: "articles/article-4.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Flow Control",
        description: "Comparing Flow Control differences between Python and JavaScript.",
        date: "2026-09-11",
        updatedate: null,
        url: "articles/article-5.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Functions",
        description: "Functions in Python ",
        date: "2026-09-15",
        updatedate: null,
        url: "articles/article-6.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "OOP",
        description: "OOP in Python ",
        date: "2026-09-18",
        updatedate: null,
        url: "articles/article-7.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Modules - packages",
        description: "Modules and packages in Python",
        date: "2026-09-18",
        updatedate: null,
        url: "articles/article-8.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Error handling",
        description: "Error handling in Python",
        date: "2026-09-18",
        updatedate: null,
        url: "articles/article-9.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Async",
        description: "Async in Python",
        date: "2026-09-29",
        updatedate: null,
        url: "articles/article-10.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "Files",
        description: "Files in Python",
        date: "2026-09-29",
        updatedate: null,
        url: "articles/article-11.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    },
    {
        title: "REST APIs",
        description: "REST APIs in Python",
        date: "2026-09-30",
        updatedate: null,
        url: "articles/article-12.html",
        img: "JS_Python_handshake.png",
        imgAlt: "JavaScript and Python Handshake"
    }
];

const articleList = document.getElementById("article-list");

articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "article-card";

    card.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        ${article.img ? `<img class="article-image" src="${article.img}" alt="${article.imgAlt}" class="article-image">` : ''}
        <small>${article.date}</small>
        ${article.updatedate ? `<small>Last updated: ${article.updatedate}</small>` : ''}
    
        ${article.url ? `<a href="${article.url}" class="read-more">Read More →</a>` : ''}

    `;

    articleList.appendChild(card);
});
