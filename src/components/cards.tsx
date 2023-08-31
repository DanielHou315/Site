import Link from 'next/link'
import React from 'react';

import { MenuBook } from '@mui/icons-material';

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
        <h3 className="font-bold pb-2 text-sm">
          <MenuBook className='opacity-60'/> &nbsp; {title}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 min-w-0">{description}</p>
      </div>

      <div className="relative w-40 h-full rounded-r-lg overflow-hidden flex-shrink-0 flex-grow-0">
        <img
          fetchPriority='high'
          src={imageUrl}
          alt="Image"
          className="absolute w-40 inset-0 h-full object-cover object-center"
        />
      </div>
    </Link>
  );
};




// export const ProjectCard: React.FC<CardProps> = ({ title, description, imageUrl, pageUrl }) => {
//   return (
//     <Link href={pageUrl} className="flex w-80 h-60 border rounded-lg
//       bg-yellow-50/20 
//       dark:border-neutral-700 
//       transition-transform transform 
//       transition-all duration-300 ease-in-out 
//         hover:scale-105 active:scale-100 
//         hover:shadow-lg"
//     >

//       <div className="relative flex flex-col w-full rounded-t-lg overflow-hidden">
//         <img
//           fetchPriority='high'
//           src={imageUrl}
//           alt="Image"
//           className="absolute h-40 w-full inset-0 object-cover object-center"
//         />
//       </div>

//       <div className="justify-between flex-grow p-4 break-words">
//         <h3 className="font-bold pl-2 text-sm">{title}</h3>
//         <p className="text-xs text-gray-600 dark:text-gray-300 min-w-0">{description}</p>
//       </div>
      
//     </Link>
//   );
// };


export function ProjectCard({ title, imageUrl, pageUrl }: {title: string, imageUrl: string, pageUrl: string;}){
  return (
    <Link 
      href={pageUrl} 
      className="flex flex-col w-full max-w-sm border rounded-lg
                 bg-yellow-50/20
                 dark:border-neutral-700 
                 transition-transform transform 
                 transition-all duration-300 ease-in-out 
                 hover:scale-105 active:scale-100 
                 hover:shadow-lg"
    >
      {/* Image section */}
      <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
        <img
          fetchPriority='high'
          src={imageUrl}
          alt="Image"
          className="absolute w-full h-full inset-0 object-cover object-center"
        />
      </div>
      {/* Content section */}
      <div className="flex flex-col justify-between flex-grow p-4 break-words h-30">
        <h3 className="font-bold pb-2 text-sm">{title}</h3>
      </div>
    </Link>
  );
};





export function SkillCard({title, iconFile}: {title: string, iconFile: string}) {
  return(
    <div className="flex w-full h-16 dark:border-neutral-700 dark:bg-gray-100/20 rounded-lg p-1">
      <div className="relative w-11 h-full overflow-hidden flex-shrink-0 flex-grow-0 p-2 place-items-center">
        <img
          fetchPriority='high'
          src={iconFile}
          alt="Image"
          className="absolute w-full inset-0 self-center object-cover object-center "
        />
      </div>

      <div className="text-left px-4">
        <h3 className="font-bold pb-2 text-sm">{title}</h3>
      </div>
    </div>
  )
}




