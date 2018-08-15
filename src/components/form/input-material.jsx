import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input } from 'semantic-ui-react';

class InputMaterial extends Component {
  state = {
    value: '',
    focus: false,
  };

  onChange = (e, data) => {
    const { onChange } = this.props;
    if (onChange) onChange(e, data);
    this.setState({ value: data.value });
  };

  onFocus = (e, data) => {
    const { onFocus } = this.props;
    if (onFocus) onFocus(e, data);
    this.setState({ focus: true });
  };

  onBlur = (e, data) => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(e, data);
    this.setState({ focus: false });
  };

  render() {
    const { value, focus } = this.state;
    const { className, placeholder, ...rest } = this.props;

    const focusClass = classNames({
      focus: value || focus,
    });

    return (
      <label className="material-wrap">
        <Input
          {...rest}
          className={`material ${className}`}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <span className={`placeholder ${focusClass}`}>{placeholder}</span>
      </label>
    );
  }
}


InputMaterial.defaultProps = {
  placeholder: '',
};

InputMaterial.propTypes = {
  ...Input.propTypes,
  placeholder: PropTypes.string,
};

export default InputMaterial;
