export type SimpleSelectProps<T> = {
  options: T[];
  label?: string;
  value: T | null;
  helperText?: string;
  ablePassEmpty?: boolean;
  emptyOptionLabel?: string;
  getLabelField: (o: T) => string;
  getValueField: (o: T) => string;
  onChange: (o: T | null) => void;
};
