import React from 'react';
import classNames from 'classnames';

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

interface BaseButtonProps {
  className?: string;
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { className, btnType, size, disabled, href, children, ...restProps } = props;
  const classes = classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    'disabled': disabled && (btnType === ButtonType.Link)
  })
  // 链接标签 a 
  if (btnType === ButtonType.Link && href) {
    return (
      <a {...restProps} className={classes} href={href}>{children}</a>
    )
  } else {
    return (
      <button {...restProps} className={classes} disabled={disabled}>{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
