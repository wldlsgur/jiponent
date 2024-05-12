import { DividerProps } from './type';

import { twJoin, twMerge } from 'tailwind-merge';

const Divider = ({ direction = 'horizontal', className, ...rest }: DividerProps) => {
  return (
    <hr
      className={twMerge(
        twJoin(
          'border-none bg-gray-300',
          direction === 'horizontal' && 'block w-full h-1',
          direction === 'vertical' && 'inline-block w-px h-5 align-middle mx-[1rem]',
        ),
        className,
      )}
      {...rest}
    />
  );
};

export default Divider;
