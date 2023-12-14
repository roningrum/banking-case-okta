
let customers = []

//tambah customer
function addCustomer(name, accountNumber) {
    let newCustomer = {
        name: name,
        accountNumber: accountNumber,
        balance: 0,
        transactionHistory: []
    }
    customers.push(newCustomer)
    console.log(customers)
}

// check account number
function checkAccount(accountNumber) {
    return customers.find((customer) => customer.accountNumber === accountNumber)

}

function viewTransactionHistory(accountNumber) {
    return customers.find((customers) => {
        if (customers.accountNumber === accountNumber) {
            console.log(customers.transactionHistory)
            return customers.transactionHistory
        }
    })

}


function deposit(accountNumber, amount) {
    let customer = checkAccount(accountNumber);
    if (customer) {
        customer.balance += amount;
        customer.transactionHistory.push({ date: Date.now(), type: 'deposit', amount: amount });
        console.log(`Deposit of ${amount} to account number ${accountNumber} was successful.`);
    } else {
        console.log(`Customer with account number ${accountNumber} not found.`);
    }
}

function withdraw(accountNumber, amount) {
    let customer = checkAccount(accountNumber);
    if (customer) {
        if (customer.balance >= amount) {
            customer.balance -= amount;
            customer.transactionHistory.push({ type: 'withdrawal', amount: amount });
            console.log(`Withdrawal of ${amount} from account number ${accountNumber} was successful.`);
        } else {
            console.log(`Insufficient balance for withdrawal from account number ${accountNumber}.`);
        }
    } else {
        console.log(`Customer with account number ${accountNumber} not found.`);
    }
}

function transactionHistory(type, accountNumber) {
    customers.find((customers) => {
        if (customers.accountNumber == accountNumber) {
            switch (type) {
                case 'deposit':
                    let lastdeposit = customers.transactionHistory.find((transaction) => transaction.type == "deposit")
                    console.log(`Transaksi Deposit Saat Ini ${lastdeposit.amount}`)
                    break;
                case 'withdraw':
                    let lastWithDraw = customers.transactionHistory.find((transaction) => transaction.type == "withdrawal")
                    lastWithDraw.amount > 0 ? console.log(`Transaksi WithDraw ${lastWithDraw.amount}`) : console.log("Saat Ini Kamu Belum Melakukan transaksi")
                    break;
                default:
                    console.log("Invalid Transaction Type")
            }
        }
    }
    )

}


addCustomer("Jean", "123456789")
console.log(checkAccount("123456789"))
addCustomer("Amira", "12345678")
deposit("123456789", 2000)
withdraw("123456789", 500)
viewTransactionHistory("123456789")
transactionHistory("deposit", "123456789")
transactionHistory("withdraw", "123456789")
//deposit
