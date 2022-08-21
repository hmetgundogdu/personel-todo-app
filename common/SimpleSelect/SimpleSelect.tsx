import { forwardRef, ForwardedRef } from 'react';

import {
  Select,
  MenuItem,
  InputLabel,
  SelectProps,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';

import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { SimpleSelectProps } from './types';

function SimpleSelect<T>(
  {
    value,
    label,
    options,
    helperText,
    ablePassEmpty,
    emptyOptionLabel,
    onChange,
    getValueField,
    getLabelField,
    ...selectProps
  }: SimpleSelectProps<T> & Omit<SelectProps, 'onChange' | 'value'>,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  // Memorize
  const selectValue = value ? getValueField(value) : '';
  // Handlers
  const handleSelectChange: SelectInputProps<unknown>['onChange'] = (e) => {
    const newValue = e.target.value;
    const selectedOption = options.find((s) => getValueField(s) === newValue);
    const newSelectedOption = selectedOption || null;

    onChange(newSelectedOption);
  };

  return (
    <FormControl fullWidth size={selectProps.size} error={selectProps.error}>
      {label && <InputLabel shrink>{label}</InputLabel>}
      <Select
        input={<OutlinedInput notched label={label} />}
        {...selectProps}
        inputRef={ref}
        value={selectValue}
        onChange={handleSelectChange}
      >
        {ablePassEmpty && (
          <MenuItem value="">
            <em>{emptyOptionLabel || 'Select'}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={getValueField(option)} value={getValueField(option)}>
            {getLabelField(option)}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default forwardRef(SimpleSelect) as <T>(
  props: SimpleSelectProps<T> & Omit<SelectProps, 'onChange' | 'value'>,
  ref?: React.ForwardedRef<HTMLSelectElement>,
) => ReturnType<typeof Select>;
