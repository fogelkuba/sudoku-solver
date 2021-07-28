export interface ISolver {
    resolve(toSolve: string): string
    setDriver(type: SolvableType): SolvableDriver
    validate(toSolve: string): boolean
}

export interface SolvableDriver {
    resolve(toSolve: string): string
    validate(toSolve: string): boolean
}

export enum SolvableType {
    Classic = 'classic'
}