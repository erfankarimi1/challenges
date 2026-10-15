export default function App() {
  return(
    <div>
      <Greeting name="Tom"/>

    </div>



  ); 
}
function Greeting({name}){
   return (
      <>
        <h1>Hello {name} </h1>

    
      </>
   );
}
