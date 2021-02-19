import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonType = "primary" | 'default' | 'danger' | 'link';
export type ButtonSize = 'lg' | 'normal' | 'sm';

interface BaseButtonProps {
   /** 自定义类 */
  className?: string;
   /** button类型 */
  btnType?: ButtonType;
  /** button大小 */
  size?: ButtonSize;
   /** button是否禁用 */
  disabled?: boolean;
   /** button是否是链接按钮 */
  href?: string;
   /** button文字 */
  children: React.ReactNode
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {
  const { className, btnType, size, disabled, href, children, ...restProps } = props;
  const classes = classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    'disabled': disabled && (btnType === 'link')
  })
  // 链接标签 a 
  if (btnType === 'link' && href) {
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
  btnType: 'default',
  size: 'normal',
}

export default Button;
