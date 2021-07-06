import { ISolver, SolvableDriver, SolvableType } from "./contracts";
import { driversMap } from "./drivers/drivers-map";

export class Solver implements ISolver {
    constructor (
        toSolve: string,
        public type: SolvableType = SolvableType.Classic
    ) {
        const trimmed = Solver.trim(toSolve)
        const driver = this.getDriver(type)
        this.driver = new driver(trimmed)
    }

    private driver!: SolvableDriver

    private getDriver(type: SolvableType): any {
        return driversMap[type]
    }


    /**
     * Removes white characters from input string
     * @param toTrim
     */
    private static trim (toTrim: string): string {
        return toTrim.replace(/\s/g, '')
    }
}