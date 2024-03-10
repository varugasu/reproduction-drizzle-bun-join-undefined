CREATE TABLE `table_a` (
	`id` text PRIMARY KEY NOT NULL,
	`column_a` integer,
	`column_b` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `table_b` (
	`id` text PRIMARY KEY NOT NULL,
	`antable_a_idime_id` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`antable_a_idime_id`) REFERENCES `table_a`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `table_a_column_a_unique` ON `table_a` (`column_a`);--> statement-breakpoint
CREATE UNIQUE INDEX `table_b_antable_a_idime_id_unique` ON `table_b` (`antable_a_idime_id`);