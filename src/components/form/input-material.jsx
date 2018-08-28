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
    const {
      className, placeholder, message, error, ...rest
    } = this.props;

    const focusClass = classNames({
      error,
      focus,
      fill: value,
    });

    return (
      <label className={`material-wrap ${className}`}>
        <Input
          {...rest}
          error={error}
          className="material"
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <span className={`placeholder ${focusClass}`}>{placeholder}</span>
        {error && message && <span className="error-text">{message}</span>}
      </label>
    );
  }
}


InputMaterial.defaultProps = {
  placeholder: '',
  error: false,
  message: '',
};

InputMaterial.propTypes = {
  ...Input.propTypes,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  message: PropTypes.string,
};

export default InputMaterial;
