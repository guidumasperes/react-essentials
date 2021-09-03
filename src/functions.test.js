import {timesTwo} from "./functions"; 

//first arg is the name of the test, second is what should be tested
test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
}); //syntax from jest, already installed with create-react-app