ALTER TABLE `teacher_table` ADD `created_at` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `teacher_table` ADD `update_at` timestamp DEFAULT (now()) NOT NULL ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `teacher_table` DROP COLUMN `createdAt`;--> statement-breakpoint
ALTER TABLE `teacher_table` DROP COLUMN `updatedAt`;