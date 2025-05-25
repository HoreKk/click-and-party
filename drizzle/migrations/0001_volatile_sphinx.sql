CREATE TABLE `games` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`description` text,
	`slug` text,
	`created` integer DEFAULT (STRFTIME('%s', 'now') * 1000)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `games_slug_unique` ON `games` (`slug`);