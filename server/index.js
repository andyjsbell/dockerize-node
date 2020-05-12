const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hi there updated for devops with triggered build!!!');
});

app.listen(PORT, HOST);

console.log(`Server running on http://${HOST}:${PORT}`);
