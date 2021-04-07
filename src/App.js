import React,{useEffect, useState} from "react";
import Posts from './components/Posts';
import {getPosts, getComments}from "./components/Api";



function App() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    async function fetch() {
      let post = await getPosts();
      // console.log(post)
      setPosts(post)

    }
    fetch();

  })

  useEffect(() => {
    async function fetch() {
      let comments = await getComments();

      console.log(comments)

    }
    fetch();

  })
  return (
    <div>
{/* 
      {
        posts.map(post => (

          <div>posts</div>
        ))
      } */}

            
      <Posts posts={posts} /> 
      
      
    </div>
  );
}

export default App;
