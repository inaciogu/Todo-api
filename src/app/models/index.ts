export default interface Model<T> {
  create: (obj: T) => Promise<T>;
  list: () => Promise<T[]>;
  listOne: (id: string) => Promise<T | null>;
  update: (id: string, obj: T) => Promise<T | null>;
  switchStatus: (id: string, status: string) => Promise<T | null>;
  delete: (id: string) => Promise<T | null>;
}
