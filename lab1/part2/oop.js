class Account {
    constructor(acc_no = 1, balance = 0) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    depitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class SavingAccount extends Account {
    constructor(acc_no = 1, balance = 0, min_balance = 100) {
        super(acc_no, balance);
        this.min_balance = min_balance;
    }
    addCustomer() { }
    removeCustomer() { }
}
class CurrentAccount extends Account {
    constructor(acc_no = 1, balance = 0, interest_rate = 0.1) {
        super(acc_no, balance);
        this.interest_rate = interest_rate;
    }
    addCustomer() { }
    removeCustomer() { }
}
