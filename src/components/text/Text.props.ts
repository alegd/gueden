export interface TextProps {
  as?: 'helper' | 'title' | 'subtitle' | 'error';
  content: string;
  className?: string;
  numberOfLines?: number;
  style?: { [key: string]: string | number };
  variant?:
    | 'body'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'caption'
    | 'button'
    | 'error'
    | 'label';
  onClick?: () => void;
}
