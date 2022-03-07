const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.heading.toLowerCase().includes(value) ||
      user.author.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("../blog.json")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const title = card.querySelector("[data-title]");
      const author = card.querySelector("[data-author]");
      const date = card.querySelector("[data-date]");
      const heading = card.querySelector("[data-heading]");
      const content = card.querySelector("[data-content]");
      author.textContent = user.author;
      date.textContent = user.date;
      heading.textContent = user.heading;
      content.textContent = user.content;
      userCardContainer.append(card);
      return {
        title: user.title,
        author: user.author,
        date: user.date,
        heading: user.heading,
        content: user.content,
        element: card,
      };
    });
  });
