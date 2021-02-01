import React, { useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './Menu';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const context = useContext(MenuContext);
  const {index, disabled, className, style, children } = props;
  const classes = classnames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = (index: number | undefined) => {
    if (context.onSelect && !disabled && (typeof index === 'number')) {
      context.onSelect(index);
    }
  }
  return (
    <li className={classes} style={style} onClick={() => handleClick(index)}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
