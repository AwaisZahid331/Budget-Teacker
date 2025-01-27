import React, { useState } from 'react';
import { addTransaction } from '../services/api';

const TransactionForm = ({ fetchTransactions }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('income');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTransaction({ title, amount: parseFloat(amount), category, type });
        fetchTransactions();
        setTitle('');
        setAmount('');
        setCategory('');
    };

    return (
        <div className="container my-4">
            <h3 className="text-center mb-4">Add New Transaction</h3>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Enter transaction title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="amount" 
                        placeholder="Enter amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        required 
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="category" 
                        placeholder="Enter category (e.g., Food, Salary)" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required 
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select 
                        className="form-select" 
                        id="type" 
                        value={type} 
                        onChange={(e) => setType(e.target.value)} 
                        required
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary w-50">Add Transaction</button>
                </div>
            </form>
        </div>
    );
};

export default TransactionForm;
