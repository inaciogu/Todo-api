export default interface Model<T> {
  create: (obj: T) => Promise<T>;
  list: () => Promise<T[]>;
  listOne: (id: string) => Promise<T | null>;
  update: (id: string, obj: T) => Promise<T>;
  delete: (id: string) => Promise<T | null>;
}
