import React from "react";

const PlacementTab = () => {
  return (
    <div className="bg-white p-5 xl:w-1/3 md:w-1/2 mt-8 rounded-md">
      <h2 className="text-3xl font-semibold">Placement</h2>
      <p className="my-3 text-gray-600">
        Placement of elements play a crucial role in guiding users' interactions
        and conveying information effectively.Strategic placement of elements,
        such as navigation menus, buttons, and content, can streamline user
        workflows and improve accessibility. Furthermore, consistency in design
        elements and spacing helps maintain visual harmony and aids in intuitive
        navigation. By focusing on thoughtful design and strategic placement.
      </p>

      <div className="text-end px-2">
        <button className=" bg-red-500 mr-3 rounded-md font-medium px-3 py-2 text-white">
          Delete
        </button>
        <button className="bg-green-500 rounded-md font-medium px-3 py-2 text-white">
          Publish
        </button>
      </div>
    </div>
  );
};

export default PlacementTab;
