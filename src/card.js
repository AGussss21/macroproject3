import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, title, link }) => (
  <div className="card bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
    <img alt={title} className="w-full rounded-lg shadow-md mb-4" src={imgSrc} />
    <Link to={link} className="bg-green-700 text-white py-2 px-4 rounded-full block text-center w-full">
      {title}
    </Link>
  </div>
);

export default Card;
