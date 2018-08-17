import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Select } from 'semantic-ui-react';

class SelectMaterialLabeled extends Component {
  state = {
    value: '',
  };

  componentDidMount() {
    const { defaultValue = '' } = this.props;
    this.setState({ value: defaultValue.toString() });
  }

  onChange = (e, data) => {
    const { onChange } = this.props;
    if (onChange) onChange(e, data);
    this.setState({ value: data.value });
  };

  render() {
    const { value } = this.state;
    const { className, placeholder, ...rest } = this.props;

    const focusClass = classNames({
      focus: value,
    });

    return (
      <label className="material-wrap">
        <Select
          {...rest}
          className={`material ${className}`}
          onChange={this.onChange}
        />
        <span className={`placeholder ${focusClass}`}>{placeholder}</span>
      </label>
    );
  }
}

SelectMaterialLabeled.defaultProps = {
  placeholder: '',
};

SelectMaterialLabeled.propTypes = {
  ...Select.propTypes,
  placeholder: PropTypes.string,
};


const SelectMaterial = props => (props.placeholder
  ? <SelectMaterialLabeled {...props} />
  : <Select {...props} className={`material ${props.className}`} />
);

export default SelectMaterial;
