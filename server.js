const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`)
})
