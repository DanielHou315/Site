import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from 'next/image';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Tailwind CSS is used here to apply styling.
    h1: ({ children }) => (
      <h1 className="text-5xl text-center p-8 font-shui">{children}</h1> // Adjusted for responsive font size
    ),
    img: (props) => (
      // Tailwind CSS does not directly support the 'sizes' attribute, so it's kept as is.
      // Width and height auto are default behaviors for images in Tailwind CSS.
      <div className="w-full flex justify-center"> // Ensures the image container is full width and centers the image
        <Image
          sizes="100vw"
          className="max-w-full h-auto" // Ensures the image scales within its container without distortion
          {...(props as ImageProps)}
        />
      </div>
    ),
  };
}
