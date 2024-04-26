import React, { useContext } from "react";
import { UserRoleContext } from "./ContextFile";
import { useNavigate } from "react-router-dom";

const CategoryComp = () => {

  const { setCateg, setFetch } = useContext(UserRoleContext);
  const Navigate = useNavigate()

  const CategoryList = [
    {
      ID: 1,
      name: "General",
      color: "bg-gradient-to-br from-purple-300 to-indigo-400 hover:from-purple-400 hover:to-indigo-500",
    },
    {
      ID: 2,
      name: "Business",
      color: "bg-gradient-to-br from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500",
    },
    {
      ID: 3,
      name: "Sports",
      color: "bg-gradient-to-br from-green-300 to-green-400 hover:from-green-400 hover:to-green-500",
    },
    {
      ID: 4,
      name: "Entertainment",
      color: "bg-gradient-to-br from-pink-300 to-purple-400 hover:from-pink-400 hover:to-purple-500",
    },
    {
      ID: 5,
      name: "Health",
      color: "bg-gradient-to-br from-red-300 to-pink-400 hover:from-red-400 hover:to-pink-500",
    },
    {
      ID: 6,
      name: "Sciences",
      color: "bg-gradient-to-br from-blue-300 to-green-400 hover:from-blue-400 hover:to-green-500",
    },
    {
      ID: 7,
      name: "Technology",
      color: "bg-gradient-to-br from-indigo-300 to-blue-400 hover:from-indigo-400 hover:to-blue-500",
    },
  ];

  const handleCategory = (category) => {
    Navigate('/')
    setFetch(true)
    setCateg(category)
  }

  return (
    <>
      <div className="flex justify-center m-5 gap-2">
        {CategoryList.map((e) => (
          <button
            onClick={() => handleCategory(e.name)}
            key={e.ID}
            value={e.name}
            className={`relative p-3 border rounded-xl overflow-hidden group cursor-pointer ${e.color} hover:shadow-lg transition duration-300`}
            style={{ fontFamily: "Montserrat" }} 
          >
            <h2 className="text-2xl font-medium text-white">
              {e.name}
            </h2>
            <div className="relative inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryComp;
