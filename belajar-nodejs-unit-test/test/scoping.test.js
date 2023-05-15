beforeAll(() => console.log("Before All Outer"));
afterAll(() => console.log("After All Outer"));
beforeEach(() => console.log("Before Each Outer"));
afterEach(() => console.log("After Each Outer"));

test('Test Outer', () => console.log("Test Outer"));

describe('Inner 1', () => {
    beforeAll(() => console.log("Before All Inner"));
    afterAll(() => console.log("After All Inner"));
    beforeEach(() => console.log("Before Each Inner"));
    afterEach(() => console.log("After Each Inner"));

    test('Test Inner', () => console.log("Test Inner"));
})
describe('Inner 2', () => {

    beforeEach(() => console.log("Before Each Inner"));
    afterEach(() => console.log("After Each Inner"));

    test('Test Inner', () => console.log("Test Inner"));
})