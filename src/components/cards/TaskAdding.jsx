import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { addItem, listItems } from "../../services/itemServices";
import { TaskAddedItem } from "./TaskAddedItem";

export const TaskAdding = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        getAllItems();
    }, []);

    // adding an item
    const handleAddItem = (e) => {
        e.preventDefault();

        if (validateItem(taskTitle, taskDescription)) {

            // object to be sent to the backend
            const itemEntry = {
                taskTitle,
                taskDescription,
            };

            // service
            addItem(itemEntry).then((res) => {
                alert("Successfully added an item");
                getAllItems();
            }).catch((err) => console.error(err));

            // emptying input fields
            setTaskTitle("");
            setTaskDescription("");

        } else {
            alert("Please enter your task title and task description")
        }

    }

    // filtering input forms
    const validateItem = (itemTitle, itemDescription) => {
        if (itemTitle === "" || itemDescription === "") return false;
        return true;
    }

    const getAllItems = () => {
        listItems().then((res) => {
            setAllItems(res.data);
        }).catch((err) => {
            console.error(err);
        })
    }

    return (
        <>
            <div className='w-230 max-w-full max-h-110 overflow-y-scroll px-5'>
                <div className="flex flex-col gap-3">
                    <div>
                        <button className="bg-[#336AE0] rounded-md flex items-center justify-center gap-2 px-6 py-3 cursor-pointer hover:bg-[#225DDC] transition-all duration-100 ease text-sm">
                            <GoPlus size={20} />
                            Add Task
                        </button>
                    </div>
                    <form onSubmit={handleAddItem}>
                        <div className="bg-[#242424] rounded-md relative px-6 py-5 flex flex-col gap-3">
                            <input type="text" placeholder="Create Task Title"
                                className="text-xl p-1" onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} />
                            <input type="text" placeholder="Create Task Description" className="text-[#5B5B5B] text-sm p-1" onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} />
                            <div>
                                <button type="submit" className="bg-[#336AE0] rounded-md px-4 py-1 cursor-pointer">Create Task</button>
                            </div>
                        </div>

                    </form>

                </div>

                {
                    allItems?.map((item, index) => (
                        <TaskAddedItem key={index} item={item}/>

                    ))
                }

            </div>
        </>
    )
}
