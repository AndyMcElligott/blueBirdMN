
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"Id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"rider" varchar(255) NOT NULL,
	"terrain" varchar(255) NOT NULL,
	"experience" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"is_Admin" BOOLEAN NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "hill" (
	"id" serial NOT NULL,
	"open" BOOLEAN NOT NULL,
	"snow_equip" varchar(255) NOT NULL,
	"night" BOOLEAN NOT NULL,
	"rental" BOOLEAN NOT NULL,
	"hours" int NOT NULL,
	"terrain" varchar(255) NOT NULL,
	"slops" varchar(255) NOT NULL,
	"live_view" varchar(255) NOT NULL,
	"about" varchar(255) NOT NULL,
	CONSTRAINT "Hill_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "video" (
	"user_id" serial NOT NULL,
	"youtube_id" varchar(255) NOT NULL,
	"date_time" timestamp with time zone NOT NULL,
	"hill_id" TIME NOT NULL,
	CONSTRAINT "video_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "video" ADD CONSTRAINT "video_fk0" FOREIGN KEY ("user_id") REFERENCES "User"("Id");
ALTER TABLE "video" ADD CONSTRAINT "video_fk1" FOREIGN KEY ("hill_id") REFERENCES "Hill"("id");
