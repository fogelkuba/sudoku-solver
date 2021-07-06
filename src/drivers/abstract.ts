export abstract class AbstractDriver {
    constructor(toSolve: string) {
        this.toSolve = toSolve
    }

    /**
    * String representation of sudoku to solve.
    */
    protected toSolve: string
}