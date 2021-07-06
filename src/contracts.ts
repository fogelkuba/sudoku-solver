export interface ISolver {}

export enum SolvableType {
    Classic = 'classic'
}

export interface SolvableDriver {
    resolve(): string
    validate(): boolean
    trim(toTrim: string): string
}