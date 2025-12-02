import { useState } from "react";
import Dummy from "../../assets/dummyavatar.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


export const HomeProfileCard = () => {

    const [profileOption, setProfileOption] = useState(false);

    const handleProfileOption = () => {
        setProfileOption(!profileOption);
    }

    return (
        <>
            <div>
                <div className='fixed top-10 right-10 bg-[#252525] flex items-center w-70 max-w-full rounded-md py-2 px-4 justify-between'>
                    <div className="flex flex-col">
                        <h3 className="text-[#B0B0B0] text-md">Christian Naira</h3>
                        <span className="text-[#676767] text-xs">Lone Wolf</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={handleProfileOption}>
                        <div className="p-1 bg-[#336AE0] rounded-full">
                            <img src={Dummy} alt="dummy avatar" width={"50px"} className="inline-block"/>
                        </div>
                        {profileOption? (
                            <MdKeyboardArrowUp size={20} color="#ffffff" />
                        ) : (
                            <MdKeyboardArrowDown size={20} color="#ffffff" />
                        )}
                    </div>
                </div>
                {profileOption && (
                    <div className="fixed top-33 right-10 bg-[#252525] w-70 max-w-full rounded-md py-2 px-4">
                    asd 
                </div>
                )}

            </div>
        </>
    )
}
