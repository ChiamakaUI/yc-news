import axios from "axios";

const URL_BASE = 'http://node-hnapi.herokuapp.com/'

export async function getPosts() {
    const posts = await axios.get(`${URL_BASE}news`)

    // console.log(posts)
    return posts.data
}

export async function getComments() {
  const comments = await axios.get(`${URL_BASE}item/1`);

  console.log(comments)
  return comments.data;
}