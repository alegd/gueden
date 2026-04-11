export interface TextInputProps {
  as?: string;
  className?: string;
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  type?: string;
  variant?: 'filled' | 'outlined';
  hideReset?: boolean;
  validation?: Record<string, unknown>;
}
