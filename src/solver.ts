import { ISolver, SolvableType } from "./contracts";

export class Solver implements ISolver {
    constructor (
        toSolve: string,
        public type: SolvableType = SolvableType.Classic
        ) {
        this.toSolve = this.trim(toSolve)
    }

    /**
     * String representation of sudoku to solve.
     */
    public toSolve: string


    /**
     * Removes white characters from input string
     * @param toTrim
     */
    private trim (toTrim: string): string {
        return toTrim.replace(/\s/g, '')
    }
}