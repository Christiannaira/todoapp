import { GoPlus } from "react-icons/go";
import SoloGif from "../../assets/sungjinwoo.gif";


export const HomePage = () => {
  return (
    <>
      <div className="text-white min-h-screen min-w-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="mb-3">
            <img src={SoloGif} alt="sung jin woo gif" className="rounded-lg inline-block" width={"160px"}/>
          </div>
          <h1 className="font-medium text-2xl">Start your Solo Leveling Journey</h1>
          <p className="text-[#B0B0B0]">Just one percent daily progress</p>
          <button className="bg-[#336AE0] rounded-md flex items-center justify-center gap-2 px-6 py-3 cursor-pointer hover:bg-[#225DDC] transition-all duration-100 ease text-sm mt-3">
            <GoPlus size={20}/>
            Add Task
          </button>
        </div>
      </div>

    </>
  )
}
