import React from 'react';
import classnames from 'classnames';

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface AlertProps {
  alertType? : AlertType;
  title?: string;
  description?: string;
  closable?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { alertType, title, description, closable } = props;
  // alert-success alert-default
  const classes = classnames('alert', {
    [`alert-${alertType}`]: alertType,
    'alert-with-description': description
  })

  return (
    <div className={classes}>
      <div className="alert-content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      {closable && <div className="icon">X</div>}
    </div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Default,
  closable: true,
  title: 'alert text'
}

export default Alert
