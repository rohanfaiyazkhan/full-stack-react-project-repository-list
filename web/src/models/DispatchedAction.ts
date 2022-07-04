export interface DispatchedAction<T = string, P = any> {
  type: T;
  payload?: P;
  debug?: boolean;
}
