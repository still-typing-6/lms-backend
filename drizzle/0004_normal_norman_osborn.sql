CREATE TABLE `course_table` (
	`courseId` int AUTO_INCREMENT NOT NULL,
	`courseName` varchar(50) NOT NULL,
	`description` varchar(255) NOT NULL,
	`teacher_id` int NOT NULL,
	`is_Active` boolean NOT NULL DEFAULT true,
	`created_At` timestamp NOT NULL DEFAULT (now()),
	`updated_At` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `course_table_courseId` PRIMARY KEY(`courseId`),
	CONSTRAINT `course_table_courseId_unique` UNIQUE(`courseId`)
);
--> statement-breakpoint
CREATE TABLE `lesson_table` (
	`lesson_number` int NOT NULL,
	`course_id` int NOT NULL,
	`module_number` int NOT NULL,
	`video_url` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lesson_title` varchar(100) NOT NULL,
	`lesson_context` varchar(255) NOT NULL,
	CONSTRAINT `lesson_table_course_id_module_number_lesson_number_pk` PRIMARY KEY(`course_id`,`module_number`,`lesson_number`)
);
--> statement-breakpoint
CREATE TABLE `module_table` (
	`module_number` int NOT NULL,
	`course_id` int NOT NULL,
	`title` varchar(50) NOT NULL,
	`created_At` timestamp NOT NULL DEFAULT (now()),
	`updated_At` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `module_table_course_id_module_number_pk` PRIMARY KEY(`course_id`,`module_number`)
);
--> statement-breakpoint
ALTER TABLE `course_table` ADD CONSTRAINT `course_table_teacher_id_teacher_table_id_fk` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_table`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `lesson_table` ADD CONSTRAINT `fk_lesson_to_module` FOREIGN KEY (`course_id`,`module_number`) REFERENCES `module_table`(`course_id`,`module_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `module_table` ADD CONSTRAINT `module_table_course_id_course_table_courseId_fk` FOREIGN KEY (`course_id`) REFERENCES `course_table`(`courseId`) ON DELETE cascade ON UPDATE cascade;