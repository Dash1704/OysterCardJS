const OysterCard = require('./oystercard')

describe(OysterCard, () => {
  describe('getBalance', () => {
    it('should show a default balance of 0', () => {
      let card = new OysterCard
      expect(card.getBalance()).toEqual(0)
    });
  });

  describe('topUp', () => {
    it('should allow a user to top up his card', () => {
      let card = new OysterCard
      card.topUp(5)
      expect(card.getBalance()).toEqual(5)
    });
    
    it('should not allow the card to have more than £90', () => {
      let card = new OysterCard
      card.topUp(this.maxBalance)
      expect(() => card.topUp(1)).toThrow('Max balance exceeded');
    });
  })
 
  describe('deduct', () => {
    it('should decut money from the card', () => {
      let card = new OysterCard
      card.topUp(5)
      card.deduct(1)
      expect(card.getBalance()).toEqual(4)
    });
  });

  describe('inJourney', () => {
    it('should not be in a journey bu default', () => {
      let card = new OysterCard
      expect(card.inJourney()).toEqual(false)
    });
  });

  describe('tapIn', () => {
    it('should change the inJourney state to true', () => {
      let card = new OysterCard
      card.tapIn()
      expect(card.inJourney()).toEqual(true)
    });
  });

});