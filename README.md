# Reproduction for undefined values in Bun SQLite

Just run:
```
bun index.ts
```

It will output:
```
[
  {
    table_b: {
      id: "2",
      table_a_id: "2",
      created_at: "2024-03-10 03:03:02",
    },
    table_a: {
      id: "2",
      column_a: 2,
      column_b: undefined,
      created_at: undefined,
    },
  }, {
    table_b: {
      id: "3",
      table_a_id: "3",
      created_at: "2024-03-10 03:03:02",
    },
    table_a: {
      id: "3",
      column_a: 3,
      column_b: undefined,
      created_at: undefined,
    },
  }
]
```

The problem above that `table_a.column_b` and `table_a.created_at` are `undefined`.

The query produced by the join is the following:
```sql
select "table_b"."id", "table_b"."antable_a_idime_id", "table_b"."created_at", "table_a"."id", "table_a"."column_a", "table_a"."column_b", "table_a"."created_at" from "table_b" inner join "table_a" on "table_a"."id" = "table_b"."antable_a_idime_id"
```

This works as expected if run manually

