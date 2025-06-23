const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const feedbackRouter = require('./routes/feedback');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/feedback', feedbackRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});