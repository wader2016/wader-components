import React, { useContext, useState } from 'react'
import classnames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem';
import Icon from '../Icon/icon';

interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {index, title, className, children } = props;
  const context = useContext(MenuContext)
  const defaultOpenedMenus = context.defaultOpenedMenus || [];
  const isOpened = (index && context.mode === 'vertical') ? defaultOpenedMenus.includes(index) : false
  const [opened, setOpen] = useState(isOpened)
  const classes = classnames('submenu-item menu-item', className, {
    'is-active': context.index === index,
    'is-opened': opened,
    'is-vertical': context.mode === 'vertical'
  })

  const submenuClasses = classnames('wader-submenu', {
    'menu-opened': opened
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!opened);
  }
  let timer: any;
  const mouseEvent = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300);
  }

  const handleEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const mouseEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => mouseEvent(e, true),
    onMouseLeave: (e: React.MouseEvent) => mouseEvent(e, false),
  } : {}

  const renderChildren = () => {
    const childrenElement = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        });
      } else {
        console.error('error node');
      }
    })
    return (
      <ul className={submenuClasses}>
        {childrenElement}
      </ul>
    )
  }
  return (
    <li className={classes} {...mouseEvents}>
      <div className='submenu-title' {...handleEvents}>
        {title}
        <Icon icon="angle-down" className="icon-down" />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
