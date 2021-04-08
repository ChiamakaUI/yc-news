import axios from "axios";

const URL_BASE = 'http://node-hnapi.herokuapp.com'

export async function getPosts() {
    const response = await axios.get(`${URL_BASE}/news`);
    return response.data
}

export async function getComments({id}) {
  const response = await axios.get(`${URL_BASE}/item/${id}`);
  return response.data;
}