const express = require('express');
const { validateTransaction } = require('../middleware/validation');
const Transaction = require('../models/transaction');

const router = express.Router();

let transactions = []; // In-memory storage for simplicity

// GET all transactions
router.get('/', (req, res) => {
    res.json(transactions);
});

// POST a new transaction
router.post('/', validateTransaction, (req, res) => {
    const { title, amount, type, category } = req.body;

    const transaction = new Transaction(title, amount, type, category);
    transactions.push(transaction);

    res.status(201).json(transaction);
});

// DELETE a transaction by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const transactionIndex = transactions.findIndex(t => t.id === id);
    if (transactionIndex === -1) {
        return res.status(404).json({ error: 'Transaction not found' });
    }

    transactions.splice(transactionIndex, 1);
    res.status(200).json({ message: 'Transaction deleted successfully' });
});

module.exports = router;
