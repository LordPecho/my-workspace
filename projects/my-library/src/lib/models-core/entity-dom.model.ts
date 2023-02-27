// API

export interface IEntityBaseDOM<T = any> {
  // DOM STATE fields
  loading?: boolean;
  loaded?: boolean;
  menuActions?: any;

  // SPREAD DATA FROM SERVER
  patchValues?(data: T): void;
}
