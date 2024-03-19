import React from 'react';
interface CenterAlignedTextProps {
  leftText: string;
  rightText: string;
  padding?: string; // TailwindCSS padding classes e.g., 'p-4'
}

export const CenterText: React.FC<CenterAlignedTextProps> = ({ leftText, rightText, padding = 'p-1' }) => {
  return (
    <div className={`flex justify-center items-center ${padding}`}>
      <div className="flex-1 text-right pr-6 font-bold">
        {leftText}
      </div>
      <div className="flex-1 text-left pl-6">
        {rightText}
      </div>
    </div>
  );
};



interface H1TextProps {
  text: string;
  font: string;
}

export const H1Text: React.FC<H1TextProps> = ({ text, font = 'shui' }) => {
  return (
    <div className={`flex justify-center items-center font-${font}`}>
      <div className="self-center text-6xl font-shui text-center dark:text-white border-b">
        {text}
      </div>
    </div>
  );
};