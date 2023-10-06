const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/aws/textract', (req, res) => {
    const request_body = req.body;

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': getGatewayAccessToken(),
    };

    const url = request_body.url;
    const type = request_body.type;

    try {
        const output = mainTextract.checkRawOrText(url, type);

        if (output) {
            res.status(200).json(output);
        } else {
            res.status(401).send('Something went wrong');
        }
    } catch (error) {
        res.status(404).send('Something went wrong');
    }
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
