export interface ISolver {
}
export interface SolvableDriver {
    resolve(): string;
    validate(): boolean;
}
export declare enum SolvableType {
    Classic = "classic"
}
