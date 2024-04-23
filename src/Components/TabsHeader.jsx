import React, { useState } from "react";
import ContentTab from "./ContentTab";
import DesignTab from "./DesignTab";
import PlacementTab from "./PlacementTab";

const TabsHeader = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <>
      <nav>
        <ul className="w-10/12 mx-auto py-3 flex flex-wrap">
          <li>
            <i
              className="fa fa-arrow-left cursor-pointer p-2 border border-gray-500"
              aria-hidden="true"
            ></i>
            <span className="text-xl ml-3 font-semibold">Test</span>
          </li>
          <li className="ml-auto">
            <button className=" text-red-500 mr-3 rounded-md font-bold px-3 py-2">
              Delete
            </button>
            <button className="bg-green-800 rounded-md font-medium px-5 py-1 text-white">
              Publish
            </button>
          </li>
        </ul>
      </nav>

      <main className="w-10/12 mx-auto py-5">
        <div id="tabsButton" className="border-b-2 border-gray-300">
          <button
            className="pb-5 px-5 focus:border-green-500 focus:border-b-2"
            onClick={() => updateToggle(1)}
          >
            Content
          </button>
          <button
            className="pb-5 px-5 focus:border-green-500 focus:border-b-2"
            onClick={() => updateToggle(2)}
          >
            Design
          </button>
          <button
            className="pb-5 px-5 focus:border-green-500 focus:border-b-2"
            onClick={() => updateToggle(3)}
          >
            Placement
          </button>
        </div>
        <div id="tabsWrapper">
          <div className={toggle === 1 ? "showContent" : "hideContent"}>
            <ContentTab />
          </div>

          <div className={toggle === 2 ? "showContent" : "hideContent"}>
            <DesignTab />
          </div>

          <div className={toggle === 3 ? "showContent" : "hideContent"}>
            <PlacementTab />
          </div>
        </div>
      </main>
    </>
  );
};

export default TabsHeader;
