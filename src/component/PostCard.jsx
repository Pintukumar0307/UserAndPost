import React from 'react';


const PostCard = ({ title, cover, description }) => {
  return (
    <div className="post-card">
      <img src={cover} alt="Cover" className="post-cover" />
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-description">{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
