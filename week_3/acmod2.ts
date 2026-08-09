class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected accountType: string;

    constructor(name: string, balance: number, type: string) {
        this.accountHolder = name;
        this.balance = balance;
        this.accountType = type;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Updated Balance:", this.balance);
    }

    displayAccount(): void {
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Type:", this.accountType);
    }
}

const account = new BankAccount("Supraja", 25000, "Savings");
account.displayAccount();
account.deposit(5000);