import React, { useEffect, useState } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import Posts from './components/Posts';
import { getPosts }from "./components/Api";
import Comments from "./components/Comments";

function App() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    async function fetch() {
      let post = await getPosts();
      setPosts(post);
    }
    fetch();
  });

  return (
    <div>
      <Switch>
        <Redirect 
          exact
          from={'/'}
          to={'/news'}
        />
        <Route path={'/news'} exact render={(props)=>(<Posts posts={posts} {...props}/> )}/>
        <Route path={'/item/:id'} exact component={Comments}/>
      </Switch>
    </div>
  );
}

export default App;
