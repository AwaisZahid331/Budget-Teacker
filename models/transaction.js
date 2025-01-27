class Transaction {
    constructor(title, amount, type, category) {
        this.id = Date.now().toString(); // Unique identifier
        this.title = title;
        this.amount = amount;
        this.type = type; // 'income' or 'expense'
        this.category = category || 'Miscellaneous'; // Default category
        this.date = new Date(); // Automatically assign the current date
    }
}

module.exports = Transaction;
