import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'
import { eq } from 'drizzle-orm'
import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import { tableA, tableB } from './schema'


const sqlite = new Database('db.sqlite', { create: true })

const db = drizzle(sqlite, {
    logger: true,
})


migrate(db, { migrationsFolder: 'drizzle' })


const main = async () => {
    await db.delete(tableB)
    await db.delete(tableA)

    await db.insert(tableA).values([
        {
            id: "1",
            column_a: 1,
            column_b: "1b"
        },
        {
            id: "2",
            column_a: 2,
            column_b: "2b"
        },
        {
            id: "3",
            column_a: 3,
            column_b: "3b"
        }
    ])

    await db.insert(tableB).values([
        {
            id: "2",
            table_a_id: "2",
        },
        {
            id: "3",
            table_a_id: "3",
        }
    ])

    

    console.log(await db.select().from(tableB).innerJoin(tableA, eq(tableA.id, tableB.table_a_id)))
}

main()
