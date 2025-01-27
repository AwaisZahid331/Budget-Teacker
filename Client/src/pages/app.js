



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Summary from '../components/Summary';
import Chart from '../components/Chart';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch transactions from backend on page load
        const fetchTransactions = async () => {
            try {
                // const response = await axios.get('/api/transactions');
                const response = await axios.get(`${window.location.origin}/api/transactions`);
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
        fetchTransactions();
    }, []);

    const addTransaction = async (transaction) => {
        try {
            // const response = await axios.post('/api/transactions', transaction);
            const response = await axios.post(`${window.location.origin}/api/transactions`, transaction);
            setTransactions((prev) => [...prev, response.data]);
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    const deleteTransaction = async (id) => {
        try {
            // await axios.delete(`/api/transactions/${id}`);
            await axios.delete(`${window.location.origin}/api/transactions/${id}`);
            setTransactions((prev) => prev.filter((txn) => txn.id !== id));
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    return (
        <div>
            <Header />
            <main className="container mt-4">
                <div className="row">
                    {/* Transaction Form */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">Add Transaction</h5>
                            </div>
                            <div className="card-body">
                                <TransactionForm addTransaction={addTransaction} />
                            </div>
                        </div>
                    </div>

                    {/* Transaction List */}
                    <div className="col-md-8 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-secondary text-white">
                                <h5 className="mb-0">Transaction List</h5>
                            </div>
                            <div className="card-body">
                                <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Summary */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-success text-white">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <Summary transactions={transactions} />
                            </div>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-info text-white">
                                <h5 className="mb-0">Transactions Chart</h5>
                            </div>
                            <div className="card-body">
                                <Chart transactions={transactions} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
