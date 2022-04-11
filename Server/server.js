const express = require('express')

const app = express()
const port = 3002

app.get('/api', (req, res) => {
  res.json({message: 'Express server!!'})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})