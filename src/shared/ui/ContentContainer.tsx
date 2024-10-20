'useClient';

import React, {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

type ContentContainerProps = {
  /**
   * 컨테이너 높이를 px단위로 지정합니다.
   * 인라인 스타일로 적용되어 최우선 적용됩니다.
   * @example 200 === '200px'
   */
  height?: number;
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

/**
 * children요소 크기를 감지해서 트랜지션효과를 기본적으로 제공하는 컨테이너 입니다.
 *
 * 너비는 100%로 고정되어 있으며, 너비를 조절하기 위해서는 부모 요소에서 조절하는것을 추천합니다.
 *
 * @param height 기본적으로 자식요소의 높이에 따라 동적으로 변화하며 고정값을 사용할 수 있습니다.
 */
const ContentContainer = ({
  height,
  className,
  children,
  ...props
}: ContentContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [visibleHeight, setVisibleHeight] = useState<number | undefined>();
  const styles = createStyles(height ?? visibleHeight);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const computedStyle = getComputedStyle(containerRef.current);
      const padding =
        parseFloat(computedStyle.paddingTop) +
        parseFloat(computedStyle.paddingBottom);
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          setVisibleHeight(entry.contentBoxSize[0].blockSize + padding);
        }
      });

      resizeObserver.observe(contentRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [children]);

  return (
    <section
      {...props}
      style={styles}
      ref={containerRef}
      className={`flex w-full flex-col overflow-hidden rounded-[10px] bg-white p-4 shadow-lg transition-all duration-500 ease-in-out ${
        className ? className : ''
      }`}
    >
      <div ref={contentRef}>{children}</div>
    </section>
  );
};

export default ContentContainer;

const createStyles = (height?: number) => {
  const styles = {
    height: `${height ? height + 'px' : ''}`,
  };
  return styles;
};
