import { urls } from "./constant.js";

const postSection = document.querySelector('.posts');
const detailSection = document.querySelector('.detail-post');
const loader = document.querySelector('.loader-container');
document.querySelector('.back-button').addEventListener('click', hideDetail);

export async function clickPost(id) {
  loader.classList.remove('hidden');

  const res = await fetch(urls[id]);
  const post = await res.json();

  const detail = document.querySelector('.detail-post');
  detail.innerHTML = '';
  createDetail(post, detail);

  loader.classList.add('hidden');
  postSection.classList.add('hidden');
  detailSection.classList.remove('hidden');
}

function createDetail(post, parent) {
  const header = document.createElement('header');
  header.classList.add('detail-post-header');

  const button = document.createElement('button');
  button.classList.add('back-button');
  button.addEventListener('click', hideDetail);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-arrow-left', 'fa-solid', 'green');

  const title = document.createElement('h2');
  title.textContent = post.title;

  const content = document.createElement('p');
  content.classList.add('detail-post-content');
  content.textContent = post.content;

  const author = document.createElement('p');
  author.classList.add('detail-post-author');
  author.textContent = post.author;

  button.appendChild(icon);
  header.appendChild(button);
  header.appendChild(title);
  parent.appendChild(header);
  parent.appendChild(content);
  parent.appendChild(author);
}

function hideDetail() {
  postSection.classList.remove('hidden');
  detailSection.classList.add('hidden');
}