const express = require('express')
const { join } = require('node:path')
const { sql } = require('drizzle-orm')
const validator = require('validator')
const { getDb } = require('./db/index.js')
const { subscribers } = require('./db/schema.js')

const app = express()
const publicDir = join(__dirname, '..', 'public')

app.use(express.static(publicDir))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.sendFile(join(publicDir, 'index.html'))
})

app.post('/api/subscribers', async (req, res) => {
  try {
    const email =
      typeof req.body?.email === 'string' ? req.body.email.trim() : ''

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email' })
    }

    const db = getDb()

    await db
      .insert(subscribers)
      .values({ email: email })
      .onConflictDoNothing({ target: subscribers.email })

    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong.' })
  }
})

app.get('/health', async (req, res) => {
  try {
    await getDb().execute(sql`SELECT 1`)

    res.status(200).json({
      status: 'ok',
    })
  } catch (error) {
    console.error('Health check failed: ', error)

    res.status(503).json({
      status: 503,
      message: 'Database unavailable',
    })
  }
})

module.exports = app
