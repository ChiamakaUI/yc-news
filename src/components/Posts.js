import React from 'react';
import { Link } from "react-router-dom";

const Posts = (props) => {
    return (
      <div>
        {props.posts.map((post) => (
          <div key= {post.id}>
            {" "}
            <h5>
              <Link to={`/item/${post.id}`}>
                <span>{post.title}</span>
              </Link>
            </h5>
            <span>{post.user}</span>
            <span>{post.points} points</span>
            <span>{post.time_ago}</span>
            <span>{post.comments_count} comments </span>
          </div>
        ))}
        {/* <div className="repoTitle">
            <i className="fa fa-book pr-1" />
            <a href={props.repo.url} target="_blank" rel="noopener noreferrer">
              <span> {props.repo.name} </span>
            </a>
          </div> */}
      </div>
    );
}

export default Posts
