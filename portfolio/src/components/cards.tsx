import Link from 'next/link'
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
}

export const ArticleCard: React.FC<CardProps> = ({ title, description, imageUrl, pageUrl }) => {
  return (
    <Link href={pageUrl} className="flex w-full max-w-xl border rounded-lg
      bg-yellow-50/20 
      dark:border-neutral-700 
      transition-transform transform 
      transition-all duration-300 ease-in-out 
        hover:scale-105 active:scale-100 
        hover:shadow-lg"
    >
      <div className="flex flex-col justify-between flex-grow p-4 break-words">
        <h3 className="font-bold pb-2 text-sm">{title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 min-w-0">{description}</p>
      </div>

      <div className="relative w-40 h-full rounded-r-lg overflow-hidden flex-shrink-0 flex-grow-0">
        <img
          src={imageUrl}
          alt="Image"
          className="absolute w-40 inset-0 h-full object-cover object-center"
        />
      </div>
    </Link>
  );
};