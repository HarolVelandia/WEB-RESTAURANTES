import { restaurants as suggested } from "../data/restaurants";

export const getRestaurants = () => {
  const saved = JSON.parse(localStorage.getItem("userRestaurants")) || [];
  return [...suggested, ...saved];
};

export const addRestaurant = (nuevo) => {
  const saved = JSON.parse(localStorage.getItem("userRestaurants")) || [];
  saved.push(nuevo);
  localStorage.setItem("userRestaurants", JSON.stringify(saved));
};
