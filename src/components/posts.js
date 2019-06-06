import React from 'react'

const PostsComponent = ({list}) => {

  return <div
    style={{
    margin: '10px'
    }}
  >{list.map((post) => {
    return (<div key={ post.id }>
        <h3>{ post.title }</h3>
        <div>{post.body}</div>
      </div>
    );
  })}
  </div>
};

export default PostsComponent;
