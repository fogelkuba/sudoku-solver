import { ISolver, SolvableType } from "./contracts";
export declare class Solver implements ISolver {
    type: SolvableType;
    constructor(toSolve: string, type?: SolvableType);
    private driver;
    /**
     * String representation of sudoku to solve.
     */
    toSolve: string;
    private getDriver;
    /**
     * Removes white characters from input string
     * @param toTrim
     */
    private static trim;
}
