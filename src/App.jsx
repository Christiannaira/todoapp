import { useEffect, useState } from "react"
import { listItems } from "./services/itemServices";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = () => {

    listItems().then((res) => {
      // console.log(res.data);
      setItems(res.data);
    }).catch((err) => console.error(err));

  }

  return (
    <>
    <h1>Hello World</h1>
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.taskTitle}</h2>
          <p>{item.taskDescription}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
