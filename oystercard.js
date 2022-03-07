class OysterCard {

constructor(){
  this.balance = 0
  this.maxBalance = 90
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

}

module.exports = OysterCard