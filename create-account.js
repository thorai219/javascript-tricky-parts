function createAccount(pin, amount = 0) {
  return {
    checkBalance(pinInput) {
      if (pin !== pinInput) return "Invalid PIN";
      return `$${amount}`;
    },
    deposit(pinInput, depositAmount) {
      if (pin !== pinInput) return "Invalid PIN";
      amount += depositAmount;
      return `Successfully deposited ${depositAmount}, Current balance: $${amount}`;
    },
    widthdraw(pinInput, withdrawAmount) {
      if (pin !== pinInput) return "Invalid PIN";
      if (withdrawAmount > amount) {
        return "Withdrawl amount exceeds account balance. Transaction cancelled";
      } else {
        amount -= withdrawAmount;
        return `Succressfully withdrew ${withdrawAmount}, Current balance: $${amount}`;
      }
    },
    changePin(pinInput, newPin) {
      if (pin !== pinInput) return "Invalid PIN";
      pin = newPin;
      return "PIN changed successfully!";
    },
  };
}

module.exports = { createAccount };
