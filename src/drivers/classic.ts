import { SolvableDriver } from "..";

export class ClassicDriver extends AbstractDriver implements SolvableDriver {
    /**
     * Return resolved sudoku as a string.
     */
    public resolve(): string {
        return this.toSolve
    }

    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is corrects
     *
     */
    public validate(): boolean {
        if (!this.toSolve) {
            return false
        }

        if (this.toSolve.length !== 81) {
            return false
        }

        return true
    }
}