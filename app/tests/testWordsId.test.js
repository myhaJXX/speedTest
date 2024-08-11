//tests for converting
const getid = require('../js/getWordsIs')

describe(
    "Test splitting words",
    () => {
        const testCases = [
            {
                inString: 'my name is'.split(" "),
                expected: [0, 3, 8, 11]
            },
            {
                inString: 'my-- --name isheh e hhe'.split(" "),
                expected: [0, 5, 12, 18, 20, 24]
            },
            {
                inString: ' '.split(" "),
                expected: [0, 1, 2]
            },
            {
                inString: ''.split(" "),
                expected: [0, 1]
            }
        ]

        testCases.forEach(test => {
            it(`Case: (${test.inString.join(' ')}) | Must: [${test.expected.join('-')}]`,
                ()=>{
                    const res = getid(test.inString)
                    expect(res).toStrictEqual(test.expected)
                }
            )
        })
    }
)