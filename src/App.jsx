import { useState } from "react";
import Counter from "./Counter";
import Button from "./Button";

function App() {
  const [cont, setCont] = useState(0);

  const handleOnClick = () => {
    setCont(cont + 1);
  };

  return (
    <div>
      <Counter cont={cont} />
      <Counter cont={cont*2} />
      <Button text={"Incrementar"} handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
