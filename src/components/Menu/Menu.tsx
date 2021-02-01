import React, { createContext, useState } from 'react';
import classnames from 'classnames';
import { MenuItemProps } from './MenuItem';

interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: 'horizonal' | 'vertical';
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onSelect?: (selectedIndex: string) => void;
  defaultOpenedMenus?: string[];
}

interface IMenuContext {
  index?: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: 'horizonal' | 'vertical';
  defaultOpenedMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'});

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children, onSelect, defaultOpenedMenus } = props;
  const classes = classnames('wader-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizonal': mode !== 'vertical'
  })

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (index: string) => {
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  }

  const passProps: IMenuContext = {
    index: activeIndex ? activeIndex : '0',
    onSelect: handleClick,
    mode,
    defaultOpenedMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error('error node');
      }
    })
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passProps}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizonal'
}

export default Menu
