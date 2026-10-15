export default function App() {
  return (
    <div>
      <Greeting name="Tom" />
      <Greeting name="Klaus" />
    </div>
  );
}
function Greeting({ name }) {
  return <h1>{name === "Klaus" ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}
