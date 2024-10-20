import React, { HTMLAttributes, ReactNode } from 'react';

type ContainerTooltipProps = {
  /**
   * 툴팁 타입을 지정합니다.
   * @default 'info'
   * @property {info} - 회색 배경과 검정색 텍스트, 게시글의 정보 툴팁
   * @property {number} - 노션색 배경과 휜색 텍스트, 지하철 노선 번호 툴팁
   * @property {notice} - 빨간색 배경과 흰색 텍스트, 운영자 공지 툴팁
   */
  toolTipType?: 'info' | number | 'notice';
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const toolTipClasses: Record<number | 'info' | 'notice', string> = {
  info: 'bg-gray-300 !text-black px-2',
  1: 'bg-[#0052A4] px-2',
  2: 'bg-[#00A84D] px-2',
  3: 'bg-[#EF7C1C] px-2',
  4: 'bg-[#00A5DE] px-2',
  5: 'bg-[#996CAC] px-2',
  6: 'bg-[#CD7C2F] px-2',
  7: 'bg-[#747F00] px-2',
  8: 'bg-[#E6186C] px-2',
  9: 'bg-[#BB8336] px-2',
  notice: 'bg-red-600 min-w-[66px]',
};

const ContainerTooltip = ({
  toolTipType = 'info',
  className,
  children,
  ...props
}: ContainerTooltipProps) => {
  return (
    <div
      {...props}
      className={`flex min-h-[23px] w-fit items-center justify-center rounded-[8px] text-xs text-white
       ${toolTipClasses[toolTipType]} ${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
};

export default ContainerTooltip;
