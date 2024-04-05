import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">All Caterogy</h2>
      <ul className="*:px-8 *:py-4 *:text-[#9F9F9F]">
        {categories.map((category) => (
          <li
            key={category.id}
            className="text-lg font-medium hover:bg-gray-100 hover:text-gray-800"
          >
            <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideNav;
