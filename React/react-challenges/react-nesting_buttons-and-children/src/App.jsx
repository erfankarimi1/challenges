import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click one </Button>
      <Button>Click two</Button>
      <Button>Click three</Button>
      <Button>Click four</Button>

    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
