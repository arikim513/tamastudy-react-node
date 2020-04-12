import React from 'react';

const GetPostsPresenter = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        const { _id, title, description, imgUrl, view, user, createdAt } = post;
        return (
          <div key={_id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imgUrl} alt={''} />
            <p>{view}</p>
            <p>{user}</p>
            <p>{createdAt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetPostsPresenter;
