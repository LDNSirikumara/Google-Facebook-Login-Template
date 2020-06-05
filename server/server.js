const express = require('express');

const app = express();

app.get('/api/lol', (req, res) => {
    res.json({
        data: 'you fucked yee '
    });
});

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`API is Runing on port ${port}`);
});

