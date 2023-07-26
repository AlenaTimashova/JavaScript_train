class Account {

    constructor(balance, name) {
        this.balance = balance
        this.name = name
    }

    canPay(amount) {
        return this.balance >= amount
    }

    setNext(account) {
		this.incomer = account;
	}

    pay(orderPrice) {
        if(this.canPay(orderPrice)) {
            console.log(`Оплачено ${orderPrice} через ${this.name}`)
        } else if (this.incomer) {
            console.log(`Недостаточно средств на ${this.name}`) 
            this.incomer.pay(orderPrice)
        } else {
            console.log('Недостаточно средств. Оплата невозможна')
        }
    }
}

class MasterCard extends Account {
    constructor(balance) {
        super();
        this.balance = balance;
        this.name = 'MasterCard';
    }
}

class Visa extends Account {
    constructor(balance) {
        super();
        this.balance = balance;
        this.name = 'Visa'
    }
}

class PayPal extends Account {
    constructor(balance) {
        super();
        this.balance = balance;
        this.name = 'PayPal'
    }
}
//создание экземпляров классов

const master = new MasterCard(100);
const visa = new Visa(200);
const payPal = new PayPal(300);

// устанавливается очерёдность оплаты:

master.setNext(visa);
visa.setNext(payPal);

master.pay(250);

/*
Недостаточно средств на MasterCard
Недостаточно средств на Visa
Оплачено 250 через PayPal
*/

master.pay(500);

/*
Недостаточно средств на MasterCard
Недостаточно средств на Visa
Недостаточно средств. Оплата невозможна
*/