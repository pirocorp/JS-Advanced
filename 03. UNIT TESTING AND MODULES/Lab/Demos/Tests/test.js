const { expect } = require('chai');

it('Expect 2 + 1 to be equal to 3', () => {
    //Arrange
    const expected = 3;

    //Act
    const result = 2 + 1;

    //Assert
    expect(result).to.be.equal(expected);
});