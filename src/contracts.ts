export interface ISolver {
    // trim(toTrim: string): string
}

export interface SolvableDriver {
    resolve(): string
    validate(): boolean
}

export enum SolvableType {
    Classic = 'classic'
}