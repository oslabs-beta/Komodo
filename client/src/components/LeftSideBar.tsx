import React, { useState } from 'react';
import Functions from './Functions';
import FunctionDetails from './FunctionDetails';
import { mockFunctions } from '../shared';
import waves3 from '../assets/waves3.png';

type Props = {};

const LeftSideBar = ({}: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      {showSidebar ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed left-8 top-6 z-50 transition duration-400 ease-in-out hover:rotate-90"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-40 flex items-center cursor-pointer left-4 top-2"
          viewBox="0 -5 90 80"
          width="150"
          height="150"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      )}

      <div //entire sidebar div // sidebar does not fully extend to the bottom, research
        className={`flex flex-col items-center -left-2 top-0  -mb-4  bg-gray-300  pl-10 pr-10 text-black fixed h-screen z-40  ease-in-out duration-300  ${
          showSidebar ? 'translate-x-0 ' : '-translate-x-full'
        }`}
      >
        <img src={waves3} className='fixed h-screen z-10 ease-in-out duration-300'/>
        <h3 className="mt-20 text-2xl min-w-min font-semibold text-white mb-5">
          F U N C T I O N S
        </h3>
        <div // function data table in sidebar
          className=" flex flex-col items-center z-20 overflow-y-auto h-[75%] w-[110%] "
        >
          {/* <div> */}
          {mockFunctions.map((item) => (
            <div><button>
              <FunctionDetails name={item.name} />
            </button></div>
          ))}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;