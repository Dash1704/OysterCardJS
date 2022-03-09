class OysterCard {

constructor(){
  this.balance = 0
  this.maxBalance = 90
  this.minBalance = 1
  this.currentJourney = []
}

getBalance(){
  return this.balance
}

topUp(money){
  if (this.balance < this.maxBalance){
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
  }
  else { throw 'Not enough balance'}
}

tapOut(){
  this.deduct(this.minBalance)
  this.currentJourney = ['Not in journey']
}
}

module.exports = OysterCard