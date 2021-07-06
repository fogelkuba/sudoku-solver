"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solver = void 0;
const contracts_1 = require("./contracts");
const drivers_map_1 = require("./drivers/drivers-map");
class Solver {
    constructor(toSolve, type = contracts_1.SolvableType.Classic) {
        this.type = type;
        this.toSolve = Solver.trim(toSolve);
        const driver = this.getDriver(type);
        this.driver = new driver(toSolve);
    }
    getDriver(type) {
        return drivers_map_1.driversMap[type];
    }
    /**
     * Removes white characters from input string
     * @param toTrim
     */
    static trim(toTrim) {
        return toTrim.replace(/\s/g, '');
    }
}
exports.Solver = Solver;
