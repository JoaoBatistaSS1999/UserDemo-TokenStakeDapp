import React from "react";

const Button = ({ text }) => {
  return (
    <button class="bg-gray-600 hover:bg-pink-600 text-white font-bold py-2 px-3 rounded">
      {text}
    </button>
  );
};

export default Button;
