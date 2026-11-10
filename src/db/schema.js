const { pgTable, serial, varchar, timestamp } = require('drizzle-orm/pg-core')

const subscribers = pgTable('subscribers', {
  id: serial('id').primaryKey(),
  emailAddress: varchar('email_address', { length: 254 }).notNull().unique(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  })
    .defaultNow()
    .notNull(),
})

module.exports = { subscribers }
