CREATE TABLE `student_table` (
	`student_id` int AUTO_INCREMENT NOT NULL,
	`profilePic` varchar(255),
	`createdAt` date,
	`updateAt` date,
	`usere_id` int NOT NULL,
	CONSTRAINT `student_table_student_id` PRIMARY KEY(`student_id`)
);
--> statement-breakpoint
CREATE TABLE `teacher_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`profilePic` varchar(255),
	`createdAt` date,
	`updatedAt` date,
	`user_id` int NOT NULL,
	CONSTRAINT `teacher_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fname` char(25),
	`lname` char(25),
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`phoneNo` varchar(10),
	`dob` date NOT NULL,
	CONSTRAINT `users_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_table_email_unique` UNIQUE(`email`),
	CONSTRAINT `users_table_phoneNo_unique` UNIQUE(`phoneNo`)
);
--> statement-breakpoint
ALTER TABLE `student_table` ADD CONSTRAINT `student_table_usere_id_users_table_id_fk` FOREIGN KEY (`usere_id`) REFERENCES `users_table`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `teacher_table` ADD CONSTRAINT `teacher_table_user_id_users_table_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON DELETE no action ON UPDATE no action;