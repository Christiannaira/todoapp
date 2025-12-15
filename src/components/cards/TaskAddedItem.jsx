import { IoCloseOutline } from "react-icons/io5";
import { deleteItem } from "../../services/itemServices";
import { useState } from "react";

export const TaskAddedItem = ({ item, getAllItems, handleUpdateTask }) => {
   const handleDeleteItem = (id) => {
      deleteItem(id)
         .then((res) => {
            getAllItems();
         })
         .catch((err) => console.error(err));
   };

   const formattedDateTime = (date, time) => {
      if (!date || !time) return "";

      const dateTime = new Date(`${date}T${time}`);

      return dateTime.toLocaleString("en-US", {
         month: "long",
         day: "numeric",
         year: "numeric",
         hour: "numeric",
         minute: "2-digit",
         hour12: true,
      });
   };

   const handleOpenUpdateTask = () => {
      handleUpdateTask(item.id);
   };

   return (
      <>
         <div onClick={handleOpenUpdateTask}>
            <div className="bg-[#242424] rounded-md relative px-6 py-5 flex flex-col gap-3 my-3 cursor-pointer relative">
               <div
                  className={`absolute top-0 left-0 w-5 h-5 rounded-sm ${
                     item.priorityLevel === "1"
                        ? `bg-red-500`
                        : item.priorityLevel === "2"
                        ? `bg-green-500`
                        : `bg-yellow-500`
                  }`}
               />
               <h3 className="text-2xl text-[#B0B0B0]">{item.taskTitle}</h3>
               <span className="text-[#5B5B5B] text-md">
                  {item.taskDescription}
               </span>
               <div className="text-[#5B5B5B] text-sm">
                  {formattedDateTime(item.dueDate, item.dueTime)}
               </div>
               <div
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={() => handleDeleteItem(item.id)}
               >
                  <IoCloseOutline size={25} className="hover:text-[#ffffff]" />
               </div>
            </div>
         </div>
      </>
   );
};
