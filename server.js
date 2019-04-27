const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));

app.post('/api/email', (req, res) => {
    console.log(req);
    res.send("Success!");
});

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));