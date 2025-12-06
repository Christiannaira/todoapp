import { GoPlus } from "react-icons/go";
import SoloGif from "../../assets/sungjinwoo.gif";
import { HomeProfileCard } from "../cards/HomeProfileCard";
import { TaskAdding } from "../cards/TaskAdding";
import { useState } from "react";

export const HomePage = () => {
   const [isInitialized, setIsInitialized] = useState(false);

   const handleIsInitialized = () => {
      setIsInitialized(!isInitialized);
   };

   return (
      <>
         <div className="relative">
            <div className="text-white min-h-screen min-w-screen flex items-center justify-center">
               {/* Show this if user has not yet created tasks */}
               {isInitialized ? (
                  <>
                     {/* Show this if user has already existing tasks */}
                     <TaskAdding />
                  </>
               ) : (
                  <div className="flex flex-col items-center gap-2">
                     <div className="mb-3">
                        <img
                           src={SoloGif}
                           alt="sung jin woo gif"
                           className="rounded-lg inline-block"
                           width={"160px"}
                        />
                     </div>
                     <h1 className="font-medium text-2xl">
                        Start your Solo Leveling Journey
                     </h1>
                     <p className="text-[#B0B0B0]">
                        Just one percent daily progress
                     </p>
                     <button
                        className="bg-[#336AE0] rounded-md flex items-center justify-center gap-2 px-6 py-3 cursor-pointer hover:bg-[#225DDC] transition-all duration-100 ease text-sm mt-3"
                        onClick={handleIsInitialized}
                     >
                        <GoPlus size={20} />
                        Add Task
                     </button>
                  </div>
               )}
            </div>
            <HomeProfileCard />
         </div>
      </>
   );
};
