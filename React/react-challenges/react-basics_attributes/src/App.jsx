import "./styles.css";

function ArticleFunc(){
  return (
  <article className="article" >
    <h2 className="article__title">The H2 inside Article</h2>

    <label htmlFor="name" >Name :</label>
    <input id="name"/>

    <a className="article__link" href="google.com">Link</a>

  </article>
  );
}

export default function App() {
  return <ArticleFunc />;
}


