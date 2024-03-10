import { sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const tableA = sqliteTable('table_a', {
    id: text('id')
      .primaryKey(),
    column_a: integer('column_a').unique(),
    column_b: text('column_b').notNull(),
    created_at: text('created_at')
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  })
  
export const tableB = sqliteTable('table_b', {
    id: text('id')
      .primaryKey(),
    table_a_id: text('antable_a_idime_id')
      .references(() => tableA.id)
      .unique()
      .notNull(),
    created_at: text('created_at')
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  })
  