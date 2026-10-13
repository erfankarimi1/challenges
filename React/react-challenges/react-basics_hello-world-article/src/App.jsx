import "./styles.css";

export default function App() {
  return( 

    <HelloWorldArticle />
  
  );
}
function HelloWorldArticle(){
  return(
    <article>
      <h1> Hi This is a f. H1 </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad cumque odio doloribus libero quibusdam, omnis, perspiciatis sequi laborum magni suscipit inventore! Eius modi debitis, eligendi fuga neque officia ducimus?</p>

      <button type="button" onClick={()=> console.log("Sikeee your Button isn't working")}>Check The Console</button>

    </article>
  );
}