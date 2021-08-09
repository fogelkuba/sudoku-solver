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

        let horozontalDuplicates = this.hasGroupDuplicates(horizontal)

        if (horozontalDuplicates) {
            return true
        }

        const vertical: string[][] = [
            [],[],[],
            [],[],[],
            [],[],[],
        ]

        toCheck.forEach((value, index) => {
            const group = index % 9
            vertical[group].push(value)
        });

        let verticalDuplicates = this.hasGroupDuplicates(vertical)

        if (verticalDuplicates) {
            return true
        }

        // check for square duplicates

        return false
    }

    /**
     * Check for duplicates in group
     * @param line
     */
    private hasGroupDuplicates(line: string[][]): boolean {
        let result = false
        // @ts-ignore
        line.forEach((value) => {
            // @ts-ignore
            const values = value.filter(v => !Number.isNaN(parseInt(v)))
            const filtered = [...new Set(values)]

            // console.log(values, filtered);

            if (values.length !== filtered.length) {
                result = true
            }

        })

        return result
    }
}

