 'use client'



import React, { useState } from 'react';

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-72 mx-auto  p-4 rounded-lg bg-gray-200">
      <select
        className="border rounded bgColor p-4 py-3 w-full"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option className=' py-2' value="option1">Material Tailwind HTML</option>
        <option value="option2">Material Tailwind React</option>
        <option value="option3">Material Tailwind Vue</option>
        <option value="option4">Material Tailwind Angular</option>
        <option value="option5">Material Tailwind Svelte</option>
      </select>
    </div>
  );
};

export default Filter;
