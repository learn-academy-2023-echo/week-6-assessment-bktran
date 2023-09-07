// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("toSentence", () => {
  it("returns an array with a sentence about each person with their name capitalized.", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(toSentence(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
//==> ReferenceError: toSentence is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
// declare toSentence that takes in an array
// declare empty result array
// iterate over array
  // split obj.name on space to an array
  // access array at 0 and 1 index. Capitalize and reassign to a new variable
  // push new name concatenated with obj.occupation to result string
  
  const toSentence = (array) => {
    let result = []
    for (let i = 0; i < array.length; i++){
      let nameArr = array[i].name.split(" ") //["ford", "prefect"]
      let firstName = nameArr[0].charAt(0).toUpperCase() + nameArr[0].slice(1)
      let lastName = nameArr[1].charAt(0).toUpperCase() +nameArr[1].slice(1)
      result.push(firstName + " " + lastName + " is " + array[i].occupation + ".")
    }
    return result
  }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("filterAndEval", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(filterAndEval(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(filterAndEval(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
//===>ReferenceError: filterAndEval is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare filterAndEval that takes in an array
// filter array based on typeof number and assign it to a variable
// declare empty result array
// iterate over this array
  // push the expression of value % 3 to result arrray
// return result

const filterAndEval = (array) => {
  let numsOnly = array.filter( value => typeof value === "number")
  let result = []
  for (let i = 0; i < numsOnly.length; i++){
    result.push(numsOnly[i] % 3)
  }
  return result
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})
//===> ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare a sumCubed that takes in an array
// declare a sum variable
//iterate over array
  // reassign sum to cubed value
// return sum vairable


const sumCubed = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++){
    sum += array[i] ** 3
  }
  return sum
}
