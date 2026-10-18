function createBankAcc(initialBalance) {
  let balance = initialBalance; // Private variable via closure

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAcc(100);
console.log(account.deposit(50));  // 150
console.log(account.withdraw(30)); // 120
console.log(account.balance);      // undefined (encapsulated)