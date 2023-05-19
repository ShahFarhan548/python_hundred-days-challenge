const { default : TestRunner } = require("jest-runner");
const addFive = require (`./addFive`);

test ('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
} )

// npm init -y {automatically answering all the question sa yes}
// npm install --save-dev jest (add jest as a devDependency inside package.json)
// npm run test
