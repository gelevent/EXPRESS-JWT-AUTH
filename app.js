const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const AuthRoute = require('./Routes/AuthRoute');
const TodoRoute = require('./Routes/TodoRoute');
app.use('/api/auth', AuthRoute);
app.use('/api', TodoRoute);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    // menjalankan PORT
    console.log(`Server is running on port ${PORT}`);
});