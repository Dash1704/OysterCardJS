class OysterCard {

constructor(){
  this.balance = 0
  this.maxBalance = 90
  this.minBalance = 1
  this.currentJourney = 'Not in journey'
  this.journeyHistory = []
}

getBalance(){
  return this.balance
}

topUp(money){
  if (this.balance < this.maxBalance && money <= this.maxBalance){
    this.balance += money
  }
  else { throw 'Max balance exceeded'}
  }

deduct(fare){
  this.balance -= fare
}

tapIn(entryStation){
  if (this.balance > this.minBalance){
    this.currentJourney = [entryStation]
    this.journeyHistory.push(entryStation)
  }
  else { throw 'Not enough balance on Oystercard'}
}

tapOut(exitStation){
  this.deduct(this.minBalance)
  this.journeyHistory.push(exitStation)
  this.currentJourney = ['Not in journey']
}

getJourneyHistory(){
  return this.journeyHistory
}

}

module.exports = OysterCard