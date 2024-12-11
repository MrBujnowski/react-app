const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const messages = [
    { id: 1, text: 'Ahoj, světe!' },
    { id: 2, text: 'React je skvělý!' },
];

app.get('/api/messages', (req, res) => {
    res.json(messages);
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});