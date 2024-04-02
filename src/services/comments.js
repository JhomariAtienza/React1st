import { comments as data } from "../data/comments";

//private
let comments = [...data];

function generateId(comments) {
  const maxId = comments.reduce((max, comment) => (comment.id > max ? comment.id : max), 0);
  return maxId + 1;
}

function getCommentById(id) {
  return comments.find(comment => comment.id === id);
}

function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId);
}

function updateCommentBody(id, body) {
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments[index].body = body;
    return true;
  }
  return false;
}

function deleteCommentById(id) {
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    return true;
  }
  return false;
}

function addComment(comment) {
  const id = generateId(comments);
  comment.id = id;
  comments.push(comment);
}

