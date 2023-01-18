import React from 'react';

function Article({article}) {
  return (
    <article>
        <h3>{article.title}</h3>
        <p>written by {article.author}</p>
        <a href={`https://reddit.com${article.permalink}`} target="_blank">check post</a>
    </article>
  );
};

export default Article;