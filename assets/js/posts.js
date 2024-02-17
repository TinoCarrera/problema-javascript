import { urls } from "./constant.js";
import { clickPost } from "./detail.js";
import { formatDate } from "./utils.js";

async function getPosts() {
  const res = await fetch(urls.post);
  const data = await res.json();
  const { posts } = data;

  createList(posts);
}

function createList(posts) {
  const postList = document.querySelector('.posts');
  postList.innerHTML = '';

  posts.forEach(post => {
    const article = createArticle(post);
    postList.appendChild(article);
  });
}

function createArticle(post) {
  const article = document.createElement('article');
  article.classList.add('post');

  const link = document.createElement('a');
  link.classList.add('post-link');
  link.dataset.id = post.id;
  link.addEventListener('click', () => clickPost(post.id));

  const header = document.createElement('header');
  header.classList.add('post-header');

  const title = document.createElement('h3');
  title.classList.add('post-title');
  title.textContent = post.title;

  const footer = document.createElement('footer');
  footer.classList.add('post-footer');

  const content = document.createElement('p');
  content.classList.add('post-content');
  content.textContent = post.content;

  const date = document.createElement('p');
  date.classList.add('post-date');
  date.textContent = `${formatDate(post.date)} meses`;

  header.appendChild(title);
  footer.appendChild(content);
  footer.appendChild(date);
  link.appendChild(header);
  link.appendChild(footer);
  article.appendChild(link);

  return article;
}

getPosts().then(() => document.querySelector('.loader-container').classList.add('hidden'));
