// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// const CategoryBreakdown = ({ transactions }) => {
//     const data = transactions
//         .filter(t => t.type === 'expense')
//         .reduce((acc, { category, amount }) => {
//             const found = acc.find(item => item.name === category);
//             if (found) found.value += amount;
//             else acc.push({ name: category, value: amount });
//             return acc;
//         }, []);

//     const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//     return (
//         <PieChart width={400} height={400}>
//             <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
//                 {data.map((_, index) => (
//                     <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//         </PieChart>
//     );
// };

// export default CategoryBreakdown;

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const CategoryBreakdown = ({ transactions }) => {
    const data = transactions
        .filter((t) => t.type === 'expense')
        .reduce((acc, { category, amount }) => {
            const found = acc.find((item) => item.name === category);
            if (found) found.value += amount;
            else acc.push({ name: category, value: amount });
            return acc;
        }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="card shadow-sm mt-4">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0 text-center">Expense Category Breakdown</h5>
            </div>
            <div className="card-body">
                {data.length > 0 ? (
                    <div className="d-flex justify-content-center">
                        <PieChart width={400} height={400}>
                            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                                {data.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                ) : (
                    <p className="text-center text-muted">No expense data available to display.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryBreakdown;
