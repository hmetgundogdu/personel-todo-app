export type SimpleSelectProps<T> = {
  label?: string;
  helperText?: string;
  ablePassEmpty?: boolean;
  getLabelField: (o: T) => string;
  getValueField: (o: T) => string;
  options: T[];
};
