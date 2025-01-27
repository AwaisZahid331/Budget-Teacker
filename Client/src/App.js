import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './services/api';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import CategoryBreakdown from './components/CategoryBreakdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const fetchAndSetTransactions = async () => {
        const data = await fetchTransactions();
        setTransactions(data);
    };

    useEffect(() => {
        fetchAndSetTransactions();
    }, []);

    return (
        <div>
           
            <h1 style={{ marginLeft: "40px", marginTop: "30px", display: "flex", alignItems: "center" }}>
                Budget Tracker
            <i className="bi bi-cash-coin" style={{ marginRight: "10px", color: "black", margin:"13px" }}></i>
            </h1>

            <TransactionForm fetchTransactions={fetchAndSetTransactions} />
            <TransactionList transactions={transactions} fetchTransactions={fetchAndSetTransactions} />
            <Summary transactions={transactions} />
            <CategoryBreakdown transactions={transactions} />
        </div>
    );
};

export default App;
