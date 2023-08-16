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
    <Link href={pageUrl} className="flex bg-yellow-100 bg-opacity-20 border rounded-lg w-full max-w-xl transition-transform transform hover:scale-105">

      <div className="flex flex-col justify-between flex-grow p-4 break-words">
        <h3 className="font-bold pb-2 text-sm">{title}</h3>
        <p className="text-xs text-gray-600 min-w-0">{description}</p>
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