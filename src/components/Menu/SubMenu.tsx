import React, { useContext, useState } from 'react'
import classnames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem';

interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {index, title, className, children } = props;
  const context = useContext(MenuContext)
  const [opened, setOpen] = useState(false)
  const classes = classnames('submenu-item menu-item', className, {
    'is-active': context.index === index
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
        return childElement;
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
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
