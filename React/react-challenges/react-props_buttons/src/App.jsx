export default function App() {
  return(
    <>
      <Button 
      color= "red"
      disabled={false}
      text= "Click me"      
      onClick={() => {console.log("clicked me")}}
      />
   </> 
  );
}
function Button({color,disabled,text, onClick}){
  function handleClick(){
    console.log("You clicked the button!");
  }
  return(
    <>
    <button disabled ={disabled} onClick={onClick} style={{color:color}}>
      {text}
    </button>
    </>
  );
}