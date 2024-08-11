//tests for converting
const getMark = require('../js/createMark')

describe(
    "Mark test",
    () => {
        const testCases = [
            {
                inNumber: 0,
                expected: 'veryLow'
            },
            {
                inNumber: 30,
                expected: 'low'
            },
            {
                inNumber: 100,
                expected: 'fast'
            },
        ]

        testCases.forEach(test => {
            it(`Case: (${test.inNumber}) | Must: [${test.expected}]`,
                ()=>{
                    const res = getMark(test.inNumber)
                    expect(res).toBe(test.expected)
                }
            )
        })
    }
)