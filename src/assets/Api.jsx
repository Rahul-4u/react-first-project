import React, { useEffect, useState } from "react";

const Api = ({ selectedCategory }) => {
  const [pets, setPets] = useState([]);
  const [sortedPets, setSortedPets] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending"); // Default order

  const fetchPets = async () => {
    try {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/peddy/pets"
      );
      const data = await response.json();
      setPets(data.pets);
      setSortedPets(data.pets); // Initial pets
    } catch (error) {
      console.error("Data fetch korar shomoy vul:", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // Filter pets by selected category
  const filteredPets = selectedCategory
    ? pets.filter((pet) => pet.category === selectedCategory)
    : pets;

  // Sort pets by price when category changes or sortOrder changes
  useEffect(() => {
    const sorted = [...filteredPets].sort((a, b) => {
      return sortOrder === "descending" ? "descending" : a.price - b.price;
    });
    setSortedPets(sorted); // Update sorted pets
  }, [filteredPets, sortOrder]); // Depend on filteredPets and sortOrder

  // Toggle sort order
  const handleSort = () => {
    setSortOrder(sortOrder === "descending" ? "ascending" : "descending");
  };

  return (
    <div>
      <div className="text-white flex justify-between p-5">
        <h1>Hello pets</h1>
        <button onClick={handleSort}>
          Sort by Price ({sortOrder === "descending" ? "↓" : "↑"})
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {sortedPets.map((pet) => (
          <div key={pet.petId} className="card">
            <img src={pet.image} alt={pet.pet_name} />
            <h2>{pet.pet_name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Price: {pet.price}</p>
            <button className="btn">Adopt</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
