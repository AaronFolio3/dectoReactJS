import React, { useState } from "react";
import ArticleComponent from "../ArticleComponent";

const Content = () => {
  const [articles] = useState(null);
  return (
    <main className="main-content">
      <header>
        <h1>Demo</h1>
        <h1>Demo1</h1>
        <h1>Demo2</h1>
      </header>
      <div className="articles">
        {articles &&
          articles.map((article, id) => {
            return <ArticleComponent key={id} data={article} />;
          })}
      </div>
    </main>
  );
};

export default Content;
