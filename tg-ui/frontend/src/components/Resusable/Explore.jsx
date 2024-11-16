import React from "react";
import clsx from "clsx";
import Button from "./Button";


const ExploreItem = ({
  item, // Object containing the data to display
  containerClassName, // Additional class for the container
  type, // Type of the item (e.g., "creator", "coin")
  fields, // Fields to display (e.g., description, followers, marketCap, etc.)
  buttonText, // Text for the button
  linkBase, // Base URL for navigation
}) => {
  return (
    <div
      className={clsx(
        `relative h-80 w-full bg-cover bg-center rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 border-2 border-primary-500`,
        containerClassName
      )}
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      {/* Platform Tag */}
      {type === "creator" && (
        <div className="absolute top-2 right-2 g7 text-white text-xs px-2 py-1 rounded shadow-lg">
          <span>Twitter</span>
        </div>
      )}

      {/* Overlay for Hover Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center">
        <div className="text-center text-white px-4 mb-12">
          <p className="text-lg font-bold mb-1">{item.name}</p>
          {fields.map((field, index) => (
            <p key={index} className="text-sm mb-2">
              {field.label}: {item[field.key]}
            </p>
          ))}
        </div>

        {/* Button for navigation */}
        <Button
          containerClassName="w-full items-center justify-center flex"
          href={`${linkBase}/${item.id}`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ExploreItem;
