let atm = {
    balance: 2000,
    checkBalance () {
        console.log(`Your amount is ${this.balance}$`)
    }, 
    deposit(amount){
       // this.balance = this.balance + amount
        this.balance += amount
    },
    withdraw(amount){
        this.balance -= amount
        console.log(`You just withdraw ${amount}`)
    }
}
atm.checkBalance()
atm.deposit(100)
atm.checkBalance()
atm.withdraw(200)
atm.checkBalance()
