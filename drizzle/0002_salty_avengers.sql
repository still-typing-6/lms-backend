ALTER TABLE `teacher_table` MODIFY COLUMN `profilePic` varchar(255) DEFAULT 'https://i.pravatar.cc/300';--> statement-breakpoint
ALTER TABLE `teacher_table` MODIFY COLUMN `createdAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `teacher_table` MODIFY COLUMN `updatedAt` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP;