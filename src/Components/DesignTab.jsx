import React from "react";

const DesignTab = () => {
  return (
    <div className="bg-white p-5 xl:w-1/3 md:w-1/2 mt-8 rounded-md">
      <h2 className="text-3xl font-semibold">Design</h2>
      <p className="my-3 text-gray-600">
        When designing user interfaces, thoughtful consideration should be given
        to both the visual design and the placement of elements within the
        layout. Effective design and placement can significantly enhance the
        user experience and usability of the application.
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

export default DesignTab;
