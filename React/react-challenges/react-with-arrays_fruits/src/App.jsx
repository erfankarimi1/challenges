import Card from "./components/Card";

export default function App() {
  const fruits = [
  {id:1337, name:'🍌 Banana', color:"yellow",},
  {id:1338, name:'🍊 Orange', color:"orange",},
  {id:1339, name:'🍉 Watermelone',color:"red",},
  {id:1340, name:'🍓Strawberry',color:"red",},
  {id:1341, name:'🥝 Kiwi', color:"green",}
  ];

  return (
    <div className="app">
      {fruits.map((fruit) =>(<Card key={fruit.id} name={fruit.name} color={fruit.color} />) )}
      
    </div>
  );
}
