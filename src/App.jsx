import { useEffect, useState } from "react"
import { listItems, addItem } from "./services/itemServices";

function App() {

  // storing all items
  const [items, setItems] = useState([]);

  // storing the initial value for title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // loading the page 
  useEffect(() => {
    getAllItems();
  }, []);

  // getting all items
  const getAllItems = () => {

    listItems().then((res) => {
      // console.log(res.data);
      setItems(res.data);
    }).catch((err) => console.error(err));

  }

  // adding an item
  const handleAddItem = (e) => {
    e.preventDefault();

    if (validateItem(title, description)) {

      const itemEntry = {
        taskTitle: title,
        taskDescription: description,
      };

      addItem(itemEntry).then((res) => {
        alert("Successfully added an item");
        getAllItems();
      }).catch((err) => console.error(err));

    } else {
      alert("Please enter your task title and task description")
    }
  }

  // filtering input forms
  const validateItem = (itemTitle, itemDescription) => {
    if (itemTitle === "" || itemDescription === "") return false;
    return true;
  }

  return (
    <>
      <div className="w-screen min-h-screen border p-5">
        <h1>Hello World</h1>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <h2>{item.taskTitle}</h2>
              <p>{item.taskDescription}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 border p-5 max-w-screen">
          <form onSubmit={handleAddItem}>

            <div className="flex flex-col border p-2 my-2 gap-2">
              <label htmlFor="taskTitle" className="truncate">Task Title</label>
              <input value={title} id="taskTitle" name="taskTitle" type="text" placeholder="Enter your new task" className="border p-3 rounded-sm" onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="flex flex-col border p-2 my-2 gap-2">
              <label htmlFor="taskDescription" className="truncate">Task Description</label>
              <input value={description} id="taskDescription" name="taskDescription" type="text" placeholder="Enter your new task description" className="border p-3 rounded-sm" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit" className="py-3 px-5 border rounded-sm cursor-pointer">Add Item</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
