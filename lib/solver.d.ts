import { ISolver, SolvableDriver, SolvableType } from "./contracts";
export declare class Solver implements ISolver {
    toSolve: string;
    type: SolvableType;
    constructor(toSolve: string, type?: SolvableType);
    /**
     * Driver set for particular sudoku type.
     */
    private driver;
    /**
     * Returns driver for given sudoku type.
     * @param type
     */
    private static getDriver;
    /**
     * Removes white characters from input string.
     * @param toTrim
     */
    private static trim;
    /**
     * Resolves sudoku using given driver
     */
    resolve(): string;
    /**
     * Sets driver for given type.
     */
    setDriver(type: SolvableType): SolvableDriver;
    /**
     * Validates sudoku against given driver
     */
    validate(): boolean;
}
