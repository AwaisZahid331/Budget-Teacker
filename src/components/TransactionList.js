import React from 'react';
import { deleteTransaction } from '../services/api';

const TransactionList = ({ transactions, fetchTransactions }) => {
    const handleDelete = async (id) => {
        await deleteTransaction(id);
        fetchTransactions();
    };

    return (
        <div className="container my-4">
            <h3 className="text-center mb-4">Transaction List</h3>
            {transactions.length > 0 ? (
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(({ id, title, amount, category, type }) => (
                            <tr key={id}>
                                <td>{title}</td>
                                <td>${amount}</td>
                                <td>{category}</td>
                                <td className={type === 'income' ? 'text-success' : 'text-danger'}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-muted">No transactions found.</p>
            )}
        </div>
    );
};

export default TransactionList;
