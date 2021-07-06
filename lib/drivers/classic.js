"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicDriver = void 0;
const abstract_1 = require("./abstract");
class ClassicDriver extends abstract_1.AbstractDriver {
    constructor(toSolve) {
        super(toSolve);
        this.toSolve = toSolve;
    }
    /**
     * Return resolved sudoku as a string.
     */
    resolve() {
        return this.toSolve;
    }
    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is corrects
     *
     */
    validate() {
        if (!this.toSolve) {
            return false;
        }
        if (this.toSolve.length !== 81) {
            return false;
        }
        return true;
    }
}
exports.ClassicDriver = ClassicDriver;
