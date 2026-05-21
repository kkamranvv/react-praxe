import { useState, type ChangeEvent } from "react";

function Objects() {
  const [car, setCar] = useState({
    year: 2026,
    make: "Tesla",
    model: "model 3",
  });

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, year: Number(e.target.value) }));
  };

  const handleMakeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };

  const handleModelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite car is {car.year} {car.make} {car.model}
      </p>
      <label htmlFor="car-year">Year:</label>
      <input
        id="car-year"
        type="number"
        value={car.year}
        onChange={handleYearChange}
        title="Car year"
        placeholder="Enter year"
      />
      <br />
      <label htmlFor="car-make">Make:</label>
      <input
        id="car-make"
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        title="Car make"
        placeholder="Enter make"
      />
      <br />
      <label htmlFor="car-model">Model:</label>
      <input
        id="car-model"
        type="text"
        value={car.model}
        onChange={handleModelChange}
        title="Car model"
        placeholder="Enter model"
      />
      <br />
    </div>
  );
}

export default Objects;
