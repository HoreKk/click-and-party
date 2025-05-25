CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`created` integer DEFAULT (STRFTIME('%s', 'now') * 1000)
);
