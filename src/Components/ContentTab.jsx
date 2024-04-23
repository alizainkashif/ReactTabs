import React from "react";

const ContentTab = () => {
  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 h-54 bg-white mt-9 rounded-md p-5">
        <h5 className="font-semibold mb-2">Type</h5>

        <div className="mb-2">
          <label htmlFor="Tabs">
            <input type="radio" id="Tabs" /> Tabs
          </label>
        </div>

        <div className="inputs">
          <label htmlFor="Name" className="my-3 font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="Text"
            id="Name"
            className="w-full p-1 rounded-md border-gray-400 border focus:outline-none my-3"
          />
        </div>

        <hr />

        <div>
          <h5 className="font-semibold my-3">Item 1</h5>

          <div className="inputs">
            <label htmlFor="heading" className="font-medium">
              Heading
            </label>
            <input
              type="text"
              placeholder="Tab 1"
              id="heading"
              className="w-full p-1 rounded-md border-gray-400 border focus:outline-none my-2"
            />
          </div>

          <div className="inputs">
            <label htmlFor="textArea" className="font-medium">
              Text
            </label>
            <input
              type="text"
              placeholder="Your description text goes here"
              id="textArea"
              className="w-full p-2 pb-20 rounded-md border-gray-400 border focus:outline-none my-2"
            />
          </div>

          <button className="border-none text-red-600 text-end w-full mt-3">
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentTab;
