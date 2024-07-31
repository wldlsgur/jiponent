import React from 'react';
import BreadCrumbItem from '../breadCrumbItem';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const BreadCrumbContainer = ({ children, separator, className, ...rest }: Props) => {
  const items = React.Children.toArray(children).filter((element) => React.isValidElement(element));
  const totalItems = items.length;
  const breadcrumbItems = items.map((element, index) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, {
        ...element.props,
        separator,
        active: index === totalItems - 1,
      });
    }
    return element;
  });

  return (
    <nav
      className={combineClassName(S.default.container, className)}
      {...rest}
    >
      {breadcrumbItems}
    </nav>
  );
};

BreadCrumbContainer.Item = BreadCrumbItem;

export default BreadCrumbContainer;
