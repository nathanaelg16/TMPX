const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
	res.send('Express Server')
})

app.listen(port, () => {
	console.log(`[server]: Server is listening at http://localhost:${port}`)
})
