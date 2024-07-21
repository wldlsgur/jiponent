import { Props } from './type';

const List = <T,>({ data, children, ...rest }: Props<T>) => {
  return <ul {...rest}>{data.map((value: T, index: number) => children(value, index))}</ul>;
};

export default List;
