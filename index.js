const app = require('express')();

app.get('/:password', (req, res) => {
    if (req.params.password === process.env.PASS) return res.sendFile(process.cwd() + '/index.html')

    res.send("Nay male ja")
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on .... http://localhost:${port}`))