import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import Api from "./Api";

export default function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log("Selected category:", selectedCategory); // ডিবাগিং

  return (
    <div>
      <CategoryBtn onSelectCategory={setSelectedCategory} />
      {selectedCategory && <Api selectedCategory={selectedCategory} />}
    </div>
  );
}
