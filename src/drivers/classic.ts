import { SolvableDriver } from "../contracts";

export class ClassicDriver implements SolvableDriver {
    /**
     * Return resolved sudoku as a string.
     */
    public resolve(toSolve: string): string {
        return toSolve
    }

    /**
     * Check if sudoku is resolvable.
     * If there are no conflicts, or number of fields is correct.
     */
    public validate(toSolve: string): boolean {
        if (!toSolve) {
            return false
        }

        if (toSolve.length !== 81) {
            return false
        }

        if (this.hasConflicts(toSolve)) {
            console.log('has conflict');

            return false
        }

        return true
    }

    /**
     * Check for potential conflicts in given sudoku
     */
    private hasConflicts(toSolve: string) {
        const toCheck = toSolve.split('')
        const horizontal = []

        for (let index = 0; index < 9; index++) {
            const start = (index * 9)
            const end = ((index + 1) * 9)

            horizontal.push(toCheck.slice(start, end))
        }


        let horozontalDuplicates = horizontal.reduce((result, current, index) => {
            const values = current.filter(v => !Number.isNaN(parseInt(v)))
            const filtered = [new Set(values)]

            console.log(values, filtered);

            if (values.length !== filtered.length) {
                return true
            }

            return false
        }, false)

        if (horozontalDuplicates) {
            return true
        }

        return false
    }
}

