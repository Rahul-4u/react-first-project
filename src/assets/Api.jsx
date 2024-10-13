import React, { useEffect, useState } from "react";

const Api = ({ selectedCategory }) => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/peddy/pets"
      );
      const data = await response.json();
      setPets(data.pets);
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
      {filteredPets.map((pet) => (
        <div key={pet.petId} className="card">
          <img src={pet.image} alt={pet.pet_name} />
          <h2>{pet.pet_name}</h2>
          <p>Breed: {pet.breed}</p>
          <p>Price: {pet.price}</p>
          <button className="btn">Adopt</button>
        </div>
      ))}
    </div>
  );
};

export default Api;
