import React from 'react';
import { Select } from 'semantic-ui-react';

const SelectMaterial = ({ className, ...rest }) => (
  <Select {...rest} className={`material ${className}`} />
);

SelectMaterial.propTypes = Select.propTypes;

export default SelectMaterial;
