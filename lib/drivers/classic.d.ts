import { SolvableDriver } from "../contracts";
export declare class ClassicDriver implements SolvableDriver {
    /**
     * Return resolved sudoku as a string.
     */
    resolve(toSolve: string): string;
    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is corrects
     *
     */
    validate(toSolve: string): boolean;
    /**
     * Check for potential conflicts in given sudoku
     */
    private hasConflicts;
}
