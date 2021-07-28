import { ISolver, SolvableDriver, SolvableType } from "./contracts";
import { driversMap } from "./drivers/drivers-map";

export class Solver implements ISolver {
    constructor (
        public toSolve: string,
        public type: SolvableType = SolvableType.Classic
    ) {
        this.setDriver(type)
    }

    /**
     * Driver set for particular sudoku type.
   §  */
    private driver!: SolvableDriver

    /**
     * Returns driver for given sudoku type.
     * @param type
     */
    private static getDriver(type: SolvableType): any {
        return driversMap[type]
    }

    /**
     * Removes white characters from input string.
     * @param toTrim
     */
    private static trim (toTrim: string): string {
        return toTrim.replace(/\s/g, '')
    }

    /**
     * Resolves sudoku using given driver
     */
    public resolve(): string {
        return this.driver.resolve(Solver.trim(this.toSolve))
    }

    /**
     * Sets driver for given type.
     */
    public setDriver(type: SolvableType): SolvableDriver {
        this.driver = new (Solver.getDriver(type))()
        return this.driver
    }

    /**
     * Validates sudoku against given driver
     */
    public validate(): boolean {
        return this.driver.validate(Solver.trim(this.toSolve))
    }
}