import React from "react";

const App = () => {
  const getRandomColor = () => {
    const Colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-pink-500",
      "bg-orange-500",
      "bg-purple-500",
    ];
    return Colors[Math.floor(Math.random() * Colors.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-200 via-fuchsia-200 to-pink-200 p-7">
      <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-red-800 via-orange-400 to-pink-500 text-transparent bg-clip-text mx-auto w-fit">
        Match the Color Game
      </h1>
      <div className="flex flex-row justify-center py-5">
        <div className="w-[100px] h-[100px] shadow-lg rounded-md bg-blue-500 me-2"></div>
        <div className="w-[100px] h-[100px] shadow-lg rounded-md bg-blue-500 me-2"></div>
        <div className="w-[100px] h-[100px] shadow-lg rounded-md bg-blue-500 me-2"></div>
        <div className="w-[100px] h-[100px] shadow-lg rounded-md bg-blue-500"></div>
      </div>
      <hr />
      <div className="flex flex-row justify-center py-5">
        <div className="border-2 border-gray-500 rounded-md me-2">
          <hr
          className={`w-[100px] h-[100px] shadow-lg opacity-2 ${getRandomColor()}`}
        />
        </div>
        <div className="border-2 border-gray-500 rounded-md me-2">
          <hr
          className={`w-[100px] h-[100px] shadow-lg opacity-2 ${getRandomColor()}`}
        />
        </div>
        <div className="border-2 border-gray-500 rounded-md me-2">
          <hr
          className={`w-[100px] h-[100px] shadow-lg opacity-2 ${getRandomColor()}`}
        />
        </div>
        <div className="border-2 border-gray-500 rounded-md me-2">
          <hr
          className={`w-[100px] h-[100px] shadow-lg opacity-2 ${getRandomColor()}`}
        />
        </div>
      </div>
    </div>
  );
};

export default App;
