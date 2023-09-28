import express from 'express';

const app = express();
app.listen(4471, () => {
    console.log('Server is running on port 4471.');
}); 

app.get('/', (req, res) => {
    res.json({ message: 'My fake API is running' })
});
