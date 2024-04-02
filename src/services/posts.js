import { posts as data } from "../data/posts";

//private
let posts = [...data];

function generateId(posts) {
  const maxId = posts.reduce((max, post) => (post.id > max ? post.id : max), 0);
  return maxId + 1;
}

function getPosts() {
  return posts;
}

function getPostsByUser(userId) {
  return posts.filter(post => post.userId === userId);
}

function getPostById(id) {
  return posts.find(post => post.id === id);
}

function addPost(post) {
  const id = generateId(posts);
  post.id = id;
  posts.unshift(post);
}

function updatePostTitle(id, title) {
  const post = getPostById(id);
  if (post) {
    post.title = title;
    return true; 
  }
  return false;
}

function updatePostBody(id, body) {
  const post = getPostById(id);
  if (post) {
    post.body = body;
    return true;
  }
  return false;
}

function updatePost(id, updatedPost) {
  const post = getPostById(id);
  if (post) {
    post.title = updatedPost.title || post.title;
    post.body = updatedPost.body || post.body;
    return true; 
  }
  return false; 
}

function deletePostById(id) {
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    return true;
  }
  return false; 
}

function deletePostsByUserId(userId) {
  posts = posts.filter(post => post.userId !== userId);
}