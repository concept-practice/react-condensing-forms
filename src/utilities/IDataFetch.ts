export default interface IDataFetch<T> {
    AddEntity(entity: T): void;
    RemoveEntity(id: string): void;
    GetById(id: string): void;
}