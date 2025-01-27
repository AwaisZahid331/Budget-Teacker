const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactions');

const app = express();
const path = require('path');
// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/transactions', transactionRoutes);


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });


// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
