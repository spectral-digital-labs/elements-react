import React, { ButtonHTMLAttributes } from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // colorScheme: string;
}

const Button = ({ ...props }: ButtonProps) => {
  // const errolsButton =
  //   "mt-4 py-4 px-8 text-xl font-bold rounded-3xl lg:py-4 focus:outline-none shadow-xl";
  // const errolsButton = {
  //   "mt-4": true,
  //   "py-4": true,
  //   "px-8": true,
  //   "text-xl": true,
  //   "font-bold": true,
  //   "rounded-3xl": true,
  //   "lg:py-4": true,
  //   "focus:outline-none": true,
  //   "shadow-xl": true,
  // };

  // const allyDefauly =
  //   "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800 disabled:opacity-50";

  // const htmlButton =
  //   "px-3 py-2 bg-primary-400 text-black border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline hover:bg-gray-200 active:bg-gray-300";

  const htmlButtonClassNames: Record<string, boolean> = {
    "px-3": true,
    "py-2": true,
    "text-black": true,
    border: true,
    "rounded-md": true,
    "focus:border-blue-500": true,
    "focus:outline-none": true,
    "focus:shadow-outline": true,
    "transition duration-150 ease-in-out": true,
    "focus:ring-2": true,
    "focus:ring-offset-2": true,
    "focus:ring-blue-500": true,
  };

  // htmlButtonClassNames[`bg-${colorScheme}-100`] = true;
  // htmlButtonClassNames[`border-${colorScheme}-300`] = true;
  // htmlButtonClassNames[`hover:bg-${colorScheme}-200`] = true;
  // htmlButtonClassNames[`active:bg-${colorScheme}-300`] = true;

  const accessibleHtmlButton = classnames({
    ...htmlButtonClassNames,
    "transition duration-150 ease-in-out": true,
    "focus:ring-2": true,
    "focus:ring-offset-2": true,
    "focus:ring-blue-500": true,
  });

  return (
    <>
      <button className={`${accessibleHtmlButton} mb-4`} {...props}>
        Button
      </button>

      <div className="grid grid-cols-11">
        {["primary", "secondary", "background", "info", "dark"].map((color) =>
          [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
            (shade) => (
              <button
                key={color + shade}
                // @TODO: twMerge isn't doing what I hoped it would. Explore but probably remove.
                className={twMerge(`bg-${color}-${shade}`)}
              >
                {shade}
              </button>
            )
          )
        )}
      </div>
    </>
  );
};

export default Button;
