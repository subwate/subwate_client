import React, { HTMLAttributes, ReactNode } from 'react';

type ContainerTitleProps = {
  /**
   * 제목아래 구분선을 표시합니다.
   */
  divider?: 'solid' | 'dash';
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

const dividerClasses = {
  dash: 'border-dashed',
  solid: 'border-solid',
};

const ContainerTitle = ({
  className,
  children,
  divider,
  ...props
}: ContainerTitleProps) => {
  return (
    <>
      <h2
        className={
          'w-full text-base font-semibold' +
          ` ${className ? `${className}` : ''}`
        }
        {...props}
      >
        {children}
      </h2>
      {divider && (
        <div
          className={`relative left-[-100vw] h-px w-[200vw] border-b border-gray-300
             ${dividerClasses[divider] || ''} `}
        ></div>
      )}
    </>
  );
};

export default ContainerTitle;
