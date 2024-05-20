export interface Props<T> {
  key: string;
  defaultValue: T;
  onError: (error?: Error) => void;
}
