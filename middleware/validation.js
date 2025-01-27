function validateTransaction(req, res, next) {
    const { title, amount, type } = req.body;

    if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Title is required and must be a string' });
    }

    if (!amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ error: 'Amount must be a positive number' });
    }

    if (!['income', 'expense'].includes(type)) {
        return res.status(400).json({ error: 'Type must be income or expense' });
    }

    next();
}

module.exports = { validateTransaction };
