import {
  Select,
  MenuItem,
  InputLabel,
  SelectProps,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';

import { SimpleSelectProps } from './types';

export default function SimpleSelect<T>({
  label,
  helperText,
  ablePassEmpty,
  getValueField,
  getLabelField,
  options,
  ...selectProps
}: SimpleSelectProps<T> & SelectProps) {
  return (
    <FormControl fullWidth size={selectProps.size} error={selectProps.error}>
      {label && <InputLabel shrink>{label}</InputLabel>}
      <Select input={<OutlinedInput notched label={label} />} {...selectProps}>
        {ablePassEmpty && (
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem value={getValueField(option)}>
            {getLabelField(option)}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
