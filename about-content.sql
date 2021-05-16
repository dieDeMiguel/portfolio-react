-- -------------------------------------------------------------
-- TablePlus 3.12.8(368)
--
-- https://tableplus.com/
--
-- Database: portfolio
-- Generation Time: 2021-05-16 12:46:05.0180
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS about_id_seq;

-- Table Definition
CREATE TABLE "public"."about" (
    "id" int4 NOT NULL DEFAULT nextval('about_id_seq'::regclass),
    "first_paragraph" text,
    "second_paragraph" text,
    "third_paragraph" text,
    "fourth_paragraph" text,
    "image_first_row" varchar(255),
    "image_second_row" varchar(255),
    "first_banner" varchar(255),
    "second_banner" varchar(255),
    "third_banner" varchar(255),
    "fourth_banner" varchar(255),
    "last_paragraph" text,
    "long_paragraph" text,
    "created_at" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."about" ("id", "first_paragraph", "second_paragraph", "third_paragraph", "fourth_paragraph", "image_first_row", "image_second_row", "first_banner", "second_banner", "third_banner", "fourth_banner", "last_paragraph", "long_paragraph", "created_at") VALUES
(1, 'Born and raised in Argentina: The story starts in a Buenos Aires suburb. Two younger brothers, middle class family, great school with english since an early age and connection with knowledge through media and technology', 'Travelling is my passion. I can trace this passion back to Uruguay, which is and always has been part of my history.  This muddy stain that separates Buenos Aires from "Colonia del Sacramento" started many of my summer vacations and triggered my curiosity', 'Working challenging and demanding environments. My search is oriented to Full-Stack / Front-End positions in a NodeJS environment where I can grow and enhance my current skill set.', 'Coding in pairs: Team work is great, specially in two-person team coding. Studies shows that pairing reduces the probability of error, experience proves this point. Finding a good pair is the real challenge, then comes the technical challenge.', 'https://s3.amazonaws.com/portfolio-diego/7TYEaRzoJGEGmUOPYo-OUl2mXuzXpiSD.jpg', 'https://s3.amazonaws.com/portfolio-diego/Q-QEBa0CpmYC1frwwxKz_DqtsyMLwT_W.jpg', 'https://s3.amazonaws.com/portfolio-diego/lg5008bwSc7fCmevonoi_cihsa8lcF4O.jpg', 'https://s3.amazonaws.com/portfolio-diego/bN8qAlMHNvjsH_jHmztsOBCGOXc1wWpZ.jpg', 'https://s3.amazonaws.com/portfolio-diego/k65N7WQEo_EqE8Bm-IBc7kg7SSlcLkpL.jpg', 'https://s3.amazonaws.com/portfolio-diego/LzgItZeq0I9yAlavtmOUHAKjfUgavdip.jpg', 'test', 'test', '2021-05-15 12:23:37.250299');
