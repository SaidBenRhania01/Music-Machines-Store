import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+212657011638"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};