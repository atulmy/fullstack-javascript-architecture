// Imports
import express from 'express'

const app = express()
const port = 8000

app.get('/', (req, res) => res.send('<h3>Example / Backend / API</h3>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
