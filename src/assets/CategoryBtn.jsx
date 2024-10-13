import React, { useEffect, useState } from "react";

export default function CategoryBtn({ onSelectCategory }) {
  const [btn, setBtn] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/peddy/categories"
      );
      const data = await res.json();
      setBtn(data.categories); // Assuming the structure has 'categories'
    };
    fetchCategory();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8 p-5">
      {btn.map((category) => (
        <div key={category.category} className="">
          <span
            className="flex items-center justify-center p-2 gap-8 border cursor-pointer"
            onClick={() => onSelectCategory(category.category)}
          >
            <img src={category.category_icon} alt={category.category} />
            <h1>{category.category}</h1>
          </span>
        </div>
      ))}
    </div>
  );
}
