import { AbstractDriver } from "./abstract";
import { SolvableDriver } from "../contracts";

export class ClassicDriver implements SolvableDriver {
    /**
     * Return resolved sudoku as a string.
     */
    public resolve(toSolve: string): string {
        return toSolve
    }

    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is corrects
     *
     */
    public validate (toSolve: string): boolean {
        if (!toSolve) {
            return false
        }

        if (toSolve.length !== 81) {
            return false
        }

        return true
    }
}