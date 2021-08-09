import { Solver } from './solver'

describe('Tests for solver class', () => {
    const validSudoku =`
        --- 45- 18-
        92- -1- ---
        --- 39- ---

        -19 --- 64-
        --- --- ---
        -43 --- 51-

        --- -46 ---
        --- -2- -67
        -75 -83 ---
        `

    const invalidSudoku = `
        --- 45- 18-
        92- -1- ---
        --- 39- ---

        -19 --- 64-
        --- --- ---
        -43 --- 51-

        --- -46 ---
        --- -2- -67
        -75 -83 -8-
        `

    const verticalDuplicatedSudoku = `
        9-- 45- 18-
        92- -1- ---
        9-- 39- ---

        -19 --- 64-
        --- --- ---
        -43 --- 51-

        --- -46 ---
        --- -2- -67
        -75 -83 ---
        `

    const notCompleteSudoku = `
        --- 45- 18-
        92- -1- ---
        --- 39- ---

        -19 --- 64-
        --- --- ---
        -43 --- 51-
        `


    /**
     * Test for Solver instance
     */

    test('Expect [solver] to instiantiate properly', () => {
        const solver = new Solver(validSudoku)

        expect(solver).toBeInstanceOf(Solver)
    })


    /**
     * Tests for [validate] method.
     */

    test('Expect [validate] method to return true when proper sudoku is provided', () => {
        const solver = new Solver(validSudoku)

        const result = solver.validate()

        expect(result).toBe(true)
    })

    test('Expect [validate] method to return false when no sudoku is provided', () => {
        const solver = new Solver('')

        const result = solver.validate()

        expect(result).toBe(false)
    })

    test('Expect [validate] method to return false when duplicated sudoku is provided', () => {
        const solver = new Solver(verticalDuplicatedSudoku)

        const result = solver.validate()

        expect(result).toBe(false)
    })

    test('Expect [validate] method to return false when not-complete sudoku is provided', () => {
        const solver = new Solver(notCompleteSudoku)

        const result = solver.validate()

        expect(result).toBe(false)
    })

    test('Expect [validate] method to return false when invalid sudoku is provided', () => {
        const solver = new Solver(invalidSudoku)

        const result = solver.validate()

        expect(result).toBe(false)
    })


    // /**
    //  * Tests for [resolve] method.
    //  */

    test('Expect [resolve] method to return answer', () => {
        const toSolve = '123'
        const solver = new Solver(toSolve)

        const result = solver.resolve()

        expect(result).toBe(toSolve)
    })
})