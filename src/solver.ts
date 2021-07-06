import { ISolver, SolvableType } from "./contracts";

export class Solver implements ISolver {
    constructor (toSolve: string, type: SolvableType = SolvableType.Classic) {
        this.toSolve = this.trim(toSolve)
    }

    /**
     * String representation of sudoku to solve.
     */
    public toSolve: string

    /**
     * Return resolved sudoku as a string.
     */
    public resolve (): string {
        return this.toSolve
    }

    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is corrects
     *
     */
    public validate (): boolean {
        if (!this.toSolve) {
            return false
        }

        if (this.toSolve.length !== 81) {
            return false
        }

        return true
    }

    /**
     * Removes white characters from input string
     * @param toTrim
     */
    private trim (toTrim: string): string {
        return toTrim.replace(/\s/g, '')
    }
}