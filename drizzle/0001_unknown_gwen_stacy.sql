ALTER TABLE `student_table` DROP FOREIGN KEY `student_table_usere_id_users_table_id_fk`;
--> statement-breakpoint
ALTER TABLE `student_table` MODIFY COLUMN `profilePic` varchar(255) DEFAULT 'https://i.pravatar.cc/300';--> statement-breakpoint
ALTER TABLE `student_table` ADD `created_at` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `student_table` ADD `updated_at` timestamp DEFAULT (now()) NOT NULL ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `student_table` ADD `user_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `users_table` ADD `profileType` enum('Student','Teacher') NOT NULL;--> statement-breakpoint
ALTER TABLE `student_table` ADD CONSTRAINT `student_table_user_id_users_table_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `student_table` DROP COLUMN `createdAt`;--> statement-breakpoint
ALTER TABLE `student_table` DROP COLUMN `updateAt`;--> statement-breakpoint
ALTER TABLE `student_table` DROP COLUMN `usere_id`;