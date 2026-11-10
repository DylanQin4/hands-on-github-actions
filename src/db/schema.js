const { pgTable, serial, varchar, timestamp } = require('drizzle-orm/pg-core')

const subscribers = pgTable('subscribers', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 254 }).notNull().unique(),
  emailAddress: varchar('email_address', { length: 254 }).unique(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),
})

module.exports = { subscribers }
