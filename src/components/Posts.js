import React from 'react'

const Posts = (props) => {
    return (
      <div>
        {props.posts.map((posts) => (
          <div key= {posts.id}>
            {" "}
            <h5>
              <a href={posts.url} target="_blank" rel="noopener noreferrer">
                <span>{posts.title}</span>
              </a>
            </h5>
            <span>{posts.user}</span>
            <span>{posts.points} points</span>
            <span>{posts.time_ago}</span>
            <span>{posts.comments_count} comments </span>
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
