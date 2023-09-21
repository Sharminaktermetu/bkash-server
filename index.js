const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    // origin: 'https://bkash-payment-e5cf7.web.app',
    credentials: true,
};

// Enable CORS with the configured options
app.use(cors(corsOptions));
dotenv.config();
app.use(bodyParser.json());

app.use('/api', require('./routes/routes'));


const port = process.env.PORT || 5000; 

app.get('/', (req, res) => res.send('Server is running'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
