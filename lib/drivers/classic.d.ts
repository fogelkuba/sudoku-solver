import { SolvableDriver } from "..";
import { AbstractDriver } from "./abstract";
export declare class ClassicDriver extends AbstractDriver implements SolvableDriver {
    constructor(toSolve: string);
    /**
     * Return resolved sudoku as a string.
     */
    resolve(): string;
    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is corrects
     *
     */
    validate(): boolean;
}
