'use client';
import React, { HTMLAttributes, useEffect, useState } from 'react';

type CarouselNavigationProps = {
  /**
   * 현재 보고있는 캐러셀 아이템 번호입니다.
   */
  currentItem: number;
  /**
   * 각 캐러셀 아이템의 클릭 핸들러를 담은 배열입니다.
   * @example [{onClick: () => {setCurrentItem(1);}}]
   */
  itemArray: CarouselItem[];
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

type CarouselItem = {
  onClick: () => void;
};

const CarouselNavigator = ({
  currentItem,
  itemArray,
  className,
  ...props
}: CarouselNavigationProps) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    setCurrent(currentItem);
  }, [currentItem]);

  const onClick = (index: number) => {
    setCurrent(index);
    itemArray[index].onClick();
  };

  return (
    <div
      {...props}
      className={
        'mx-auto mt-auto flex w-fit flex-row items-center justify-center gap-[5px] ' +
        ` ${className ? className : ''}`
      }
    >
      {itemArray.map((item, index) => (
        <button
          className={`size-[7px] rounded-full ${
            index === current ? 'bg-gray-300' : 'bg-gray-200'
          }`}
          aria-label={`carousel item ${index}`}
          key={index}
          onClick={() => onClick(index)}
        ></button>
      ))}
    </div>
  );
};

export default CarouselNavigator;
