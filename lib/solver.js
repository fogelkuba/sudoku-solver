"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solver = void 0;
const contracts_1 = require("./contracts");
const drivers_map_1 = require("./drivers/drivers-map");
class Solver {
    constructor(toSolve, type = contracts_1.SolvableType.Classic) {
        this.toSolve = toSolve;
        this.type = type;
        this.setDriver(type);
    }
    /**
     * Returns driver for given sudoku type.
     * @param type
     */
    static getDriver(type) {
        return drivers_map_1.driversMap[type];
    }
    /**
     * Removes white characters from input string.
     * @param toTrim
     */
    static trim(toTrim) {
        return toTrim.replace(/\s/g, '');
    }
    /**
     * Resolves sudoku using given driver
     */
    resolve() {
        return this.driver.resolve(Solver.trim(this.toSolve));
    }
    /**
     * Sets driver for given type.
     */
    setDriver(type) {
        this.driver = new (Solver.getDriver(type))();
        return this.driver;
    }
    /**
     * Validates sudoku against given driver
     */
    validate() {
        return this.driver.validate(Solver.trim(this.toSolve));
    }
}
exports.Solver = Solver;
