export class Exchangable {
    public static exchange<T>(from: T, to: T): T {
        return to;
    }
}

export interface HasIntereaction {
    interact(): void;
}