import Image from "next/image";
import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full ">
      {/* Menu Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
        <Image
          src={menu.imageUrl || "/images/placeholder-food.jpg"}
          alt={menu.title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-90"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Menu Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-2">
          {menu.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-3 flex-grow">
          {menu.shortDescription}
        </p>

        {/* Price & Prep Time - Flex layout for alignment */}
        <div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-100">
          <p className="font-bold text-lg text-primary">
            ${menu.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">
            Prep Time: {menu.preparationTime}
          </p>
        </div>

        {/*Full Description Button */}
        <button className="btn-secondary btn-sm mt-auto">View Details</button>
      </div>
    </div>
  );
};

export default MenuCard;
