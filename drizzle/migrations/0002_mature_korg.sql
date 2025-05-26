PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_games` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`description` text,
	`slug` text,
	`created` integer DEFAULT (STRFTIME('%s', 'now') * 1000)
);
--> statement-breakpoint
INSERT INTO `__new_games`("id", "name", "description", "slug", "created") SELECT "id", "name", "description", "slug", "created" FROM `games`;--> statement-breakpoint
DROP TABLE `games`;--> statement-breakpoint
ALTER TABLE `__new_games` RENAME TO `games`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `games_slug_unique` ON `games` (`slug`);--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`created` integer DEFAULT (STRFTIME('%s', 'now') * 1000)
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "name", "created") SELECT "id", "name", "created" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;