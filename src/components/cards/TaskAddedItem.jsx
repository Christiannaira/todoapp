import { IoCloseOutline } from "react-icons/io5";
import { deleteItem } from "../../services/itemServices";


export const TaskAddedItem = ({item, getAllItems}) => {

  const handleDeleteItem = (id) => {
      deleteItem(id).then((res) => {
          getAllItems();
      }).catch((err) => console.error(err));

  }

  return (
    <>
    
        <div>
            <div className='bg-[#242424] rounded-md relative px-6 py-5 flex flex-col gap-3 my-3 cursor-pointer relative'>
                <h3 className='text-2xl text-[#B0B0B0]'>{item.taskTitle}</h3>
                <span className='text-[#5B5B5B] text-md'>{item.taskDescription}</span>
                <div className="absolute top-5 right-5 cursor-pointer" onClick={() => handleDeleteItem(item.id)}>
                  <IoCloseOutline size={25} className="hover:text-[#ffffff]"/>
                </div>
            </div>
        </div>
    
    </>
  )
}
