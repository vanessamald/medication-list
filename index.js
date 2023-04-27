const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'Medications')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Medications'))
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})