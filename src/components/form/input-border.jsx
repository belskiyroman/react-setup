import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input } from 'semantic-ui-react';

class InputBorder extends Component {
  state = {
    value: '',
  };

  onChange = (e, data) => {
    const { onChange } = this.props;
    if (onChange) onChange(e, data);
    this.setState({ value: data.value });
  };

  render() {
    const { value } = this.state;
    const { className = '', fillClass = '', ...rest } = this.props;
    const fillClasses = {
      fill: !!value,
      [fillClass]: !!value,
    };
    const classes = classNames(className, fillClasses);
    return <Input {...rest} className={classes} onChange={this.onChange} />;
  }
}

InputBorder.propTypes = {
  ...Input.propTypes,
  fillClass: PropTypes.string,
};

InputBorder.defaultProps = {
  fillClass: '',
};

export default InputBorder;
