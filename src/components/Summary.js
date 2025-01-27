import React from 'react';

const Summary = ({ transactions }) => {
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="container my-4">
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="card bg-success text-white shadow">
                        <div className="card-body">
                            <h4>Total Income</h4>
                            <h5 className="fw-bold">${totalIncome.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-danger text-white shadow">
                        <div className="card-body">
                            <h4>Total Expenses</h4>
                            <h5 className="fw-bold">${totalExpense.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-info text-white shadow">
                        <div className="card-body">
                            <h4>Balance</h4>
                            <h5 className="fw-bold">${balance.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
