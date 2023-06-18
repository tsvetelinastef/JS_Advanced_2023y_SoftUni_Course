//const lottery = require('./lottery'); // Import the lottery object

// Test suite
describe('Lottery', function() {
  // Test case for buyLotteryTicket function
  describe('buyLotteryTicket', function() {
    it('should return a success message when valid input is provided', function() {
      const result = lottery.buyLotteryTicket(10, 3, true);
      const expected = 'You bought 3 tickets for 30$.';
      expect(result).to.equal(expected);
    });

    it('should throw an error when buy parameter is false', function() {
      expect(() => lottery.buyLotteryTicket(10, 3, false)).to.throw('Unable to buy lottery ticket!');
    });

    it('should throw an error when invalid input is provided', function() {
      expect(() => lottery.buyLotteryTicket(-5, 0, true)).to.throw('Invalid input!');
    });
  });

  // Test case for checkTicket function
  describe('checkTicket', function() {
    it('should return a success message when winning numbers are matched', function() {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]);
      const expected = 'Congratulations you win, check your reward!';
      expect(result).to.equal(expected);
    });

    it('should return a success message when all numbers match (JACKPOT)', function() {
      const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
      const expected = 'You win the JACKPOT!!!';
      expect(result).to.equal(expected);
    });

    it('should throw an error when invalid input is provided', function() {
      expect(() => lottery.checkTicket([1, 2, 3, 4], [4, 5, 6])).to.throw('Invalid input!');
    });
  });

  // Test case for secondChance function
  describe('secondChance', function() {
    it('should return a success message when ticketID is a winner', function() {
      const result = lottery.secondChance(12345, [6789, 12345, 9876]);
      const expected = 'You win our second chance prize!';
      expect(result).to.equal(expected);
    });

    it('should return a failure message when ticketID is not a winner', function() {
      const result = lottery.secondChance(12345, [6789, 54321, 9876]);
      const expected = "Sorry, your ticket didn't win!";
      expect(result).to.equal(expected);
    });

    it('should throw an error when invalid input is provided', function() {
      expect(() => lottery.secondChance('invalid', [12345])).to.throw('Invalid input!');
    });
  });
});

