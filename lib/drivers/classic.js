"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicDriver = void 0;
class ClassicDriver {
    /**
     * Return resolved sudoku as a string.
     */
    resolve(toSolve) {
        return toSolve;
    }
    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is corrects
     *
     */
    validate(toSolve) {
        if (!toSolve) {
            return false;
        }
        if (toSolve.length !== 81) {
            return false;
        }
        if (this.hasConflicts(toSolve)) {
            return false;
        }
        return true;
    }
    /**
     * Check for potential conflicts in given sudoku
     */
    hasConflicts(toSolve) {
        return false;
    }
}
exports.ClassicDriver = ClassicDriver;
