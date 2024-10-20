import React, { HTMLAttributes, ReactNode } from 'react';

type ContainerButtonProps = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const ContainerButton = ({
  className,
  children,
  ...props
}: ContainerButtonProps) => {
  return (
    <button
      {...props}
      className={`flex min-h-[23px] w-fit items-center justify-center rounded-full bg-gray-300 px-2 text-white ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  );
};

export default ContainerButton;
