# **Budget Tracker Project Report**

### **1. Introduction**
The **Budget Tracker** is a financial application that helps users track their income and expenses. Users can add, delete, and categorize transactions, and view a summary of their total income, expenses, and balance.
---

### **2. Technologies Used**

- **Frontend:**
  - **React.js:** Used for building the user interface with dynamic components.
  - **Bootstrap 5:** For responsive design and styling.
  - **Recharts:** Used for displaying income/expense data in a pie chart.

- **Backend:**
  - **Node.js & Express.js:** Used to handle API requests and manage transactions.
  - **In-memory Storage:** Transactions are stored temporarily (for simplicity, no database).

- **Other Libraries:**
  - **Axios:** Used for making API requests between frontend and backend.

---

### **3. Features and Functionality**

- **Transaction Management:** Add, delete, and categorize transactions (income/expense).
- **Summary:** Displays total income, total expenses, and balance.
- **Graphical Representation:** Shows a pie chart for income/expense breakdown.
- **Responsive Design:** Optimized for mobile and desktop using Bootstrap.

---

### **4. API and Backend**

- **GET /api/transactions:** Retrieves all transactions.
- **POST /api/transactions:** Adds a new transaction.
- **DELETE /api/transactions/:id:** Deletes a specific transaction by ID.

---

### **5. UI/UX Details**

- **Header:** Simple header with a "Budget Tracker" title and a relevant icon.
- **Transaction Form:** Form to input title, amount, category, and type (income/expense).
- **Transaction List:** Displays added transactions with a delete option.
- **Summary:** Displays the total income, expenses, and balance.
- **Graph:** A pie chart to visually represent the income vs. expense categories.

---

### **6. Graphical Representation (Recharts)**

- **Pie Chart:** A pie chart visualizes the income and expenses categories, showing the proportion of each.

---

### **7. Setup Instructions**

1. **Frontend:**
   - `npm install` (Install dependencies)
   - `npm start` (Start the React app)

2. **Backend:**
   - `npm install` (Install backend dependencies)
   - `npm start` (Start the Express server)

---

### **8. Code Explanation**

- **App Component:** Renders all sub-components (TransactionForm, TransactionList, Summary, Chart).
- **TransactionForm:** Allows users to add new transactions via form input.
- **TransactionList:** Displays transactions and allows deletion.
- **Summary:** Displays income, expenses, and balance summary.
- **Chart (Pie):** Visualizes income vs. expenses.

---

### **9. Challenges and Learnings**

- **State Management:** Handling React state efficiently for dynamic UI updates.
- **API Integration:** Handling backend API requests using Axios.
- **Responsive Design:** Ensuring proper display on all screen sizes using Bootstrap.


### **10. Future Improvements**

- **Database Integration:** Replace in-memory storage with a database (MongoDB).
- **User Authentication:** Add login/signup functionality for user-specific data.
---

### **12. References**

- React Documentation: https://reactjs.org/docs/getting-started.html
- Bootstrap Documentation: https://getbootstrap.com/docs/5.1/getting-started/introduction/
- Recharts Documentation: https://recharts.org/en-US/
