class Account{
    constructor(public acc_no=1, public balance=0){
    }
    depitAmount(){}
    creditAmount(){}
    getBalance(){}
}
interface IAccount{
    Date_of_opening:Date;
    addCustomer();
    removeCustomer();
}
class SavingAccount extends Account implements IAccount{
    Date_of_opening: Date;
    constructor(acc_no=1,balance=0,public min_balance=100){
        super(acc_no,balance);
    }
    addCustomer(){}
    removeCustomer(){}
}
class CurrentAccount extends Account implements IAccount {
    Date_of_opening: Date;
    constructor(acc_no=1,balance=0,public interest_rate=0.1){
        super(acc_no,balance)
    }
    addCustomer() {}
    removeCustomer() {}
}