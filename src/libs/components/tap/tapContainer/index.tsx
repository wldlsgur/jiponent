import React, { ReactElement, ReactNode, useMemo, useState } from 'react';
import TapItem from '../tapItem';
import { Props } from './type';

const childrenToArray = (children: ReactNode) => {
  return React.Children.toArray(children).filter((element) =>
    React.isValidElement(element),
  ) as ReactElement[];
};

const TapContainer = ({ children, defaultIndex, activeStyle, itemAttribute, ...rest }: Props) => {
  const [currentActive, setCurrentActive] = useState(
    () => defaultIndex || childrenToArray(children)[0].props.index,
  );
  const { length } = childrenToArray(children);

  const items = useMemo(() => {
    return childrenToArray(children).map((element) => {
      return React.cloneElement(element, {
        ...itemAttribute,
        ...element.props,
        key: element.props.index,
        active: element.props.index === currentActive,
        length,
        onClick: () => setCurrentActive(element.props.index),
        activeStyle,
      });
    });
  }, [activeStyle, children, currentActive, itemAttribute, length]);

  const activeItem = useMemo(() => {
    return items.find((element) => currentActive === element.props.index);
  }, [currentActive, items]);

  return (
    <div {...rest}>
      <div>{items}</div>
      <div>{activeItem && activeItem.props.content}</div>
    </div>
  );
};

TapContainer.Item = TapItem;

export default TapContainer;
