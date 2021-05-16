-- -------------------------------------------------------------
-- TablePlus 3.12.8(368)
--
-- https://tableplus.com/
--
-- Database: portfolio
-- Generation Time: 2021-05-16 12:46:32.4500
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS projects_id_seq;

-- Table Definition
CREATE TABLE "public"."projects" (
    "id" int4 NOT NULL DEFAULT nextval('projects_id_seq'::regclass),
    "info" text NOT NULL,
    "heading" varchar(255) NOT NULL,
    "subtitle" varchar(255),
    "title" varchar(255) NOT NULL,
    "img" varchar(255),
    "technologies" text,
    "slug" varchar(255) NOT NULL,
    "directory" varchar(255),
    "link" varchar(255),
    "date" varchar(255),
    "git" varchar(255),
    "position" int2,
    "created_at" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."projects" ("id", "info", "heading", "subtitle", "title", "img", "technologies", "slug", "directory", "link", "date", "git", "position", "created_at") VALUES
(2, 'Weather Application developed in JavaScript, NodeJS, Handlebars. This Site consumes two API’s in order to obtain Geolocation and Weather forecast for the searched city.', 'Weather App', 'Weather forecast services', 'Make it rain!', 'https://s3.amazonaws.com/portfolio-diego/OviKCW0nwAICr2gKw_RO6vL3EiyuekEI.jpg', 'NodeJS,ExpressJS,API,Postman,JavaScript', 'weather', '', 'https://weatherappargentina.herokuapp.com', 'April 2020', 'https://github.com/dieDeMiguel/weatherApp', 1001, '2021-05-13 11:19:01.102485'),
(3, 'Petition web that helps to gather signatures in order to improve the way we handle "One use plastic" and recyclables in my neighbourhood. The Site is developed in  a NodeJS environment using ExpressJS and Handlebars as frameworks and PostgreSQL for the database. The signature canvas is converted into base64 encoding and stored as a string into the database. ', 'Eimsbüttel Petition', 'Signature page for a petition', 'Petition!', 'https://s3.amazonaws.com/portfolio-diego/S80ca--mm_MfWfuURNx-PXZ0yvcAQIp7.jpg', 'NodeJS,ExpressJS,API,Handlebars,JavaScript', 'petition', '', 'https://eimsbuettel-initiative.herokuapp.com/', 'March 2021', 'https://github.com/dieDeMiguel/petition', 1002, '2021-05-14 08:58:28.350422'),
(4, 'This application calculates the total bill per person for a variable amount of customers in a restaurant', 'Hamburg Tip', 'Tip Calculator', 'Tip-Calculator', 'https://s3.amazonaws.com/portfolio-diego/PbXLkyYqTLVUmsq8BhAPHO5zjaZ5Nznt.jpg', 'NodeJS,Vanilla JavaScript, CSS3', 'tip', 'Tip-Calculator', '', 'August 2020', 'https://github.com/dieDeMiguel/tip', 990, '2021-05-14 09:04:42.265662'),
(5, 'Socket.io was used in this project in order real time chat messaging. Users can choose between different chat rooms or create one. Send location button implemented in order to show the location of the user.', 'Chat App', 'Real time chat app', 'chat-app', 'https://s3.amazonaws.com/portfolio-diego/v1TR3u6l_Cq3MDujzK--1jACsEZSZf9n.jpg', 'NodeJS,ExpressJS,Socket.io,Handlebars,JavaScript', 'chat', '', 'https://diedemiguel-chatapp.herokuapp.com/', 'April 2020', 'https://github.com/dieDeMiguel/chatapp', 999, '2021-05-14 09:08:46.885381'),
(6, 'Browser implementation of the classic board game. The game was developed in plain HTML and CSS using JQuery to toggle classes and check for wins.', 'Connect Four', 'Browser video game', 'connect-four', 'https://s3.amazonaws.com/portfolio-diego/Oag8L1puuI2ZO0bmpGSXLtgQDy1uSKqy.jpg', 'JavaScript,JQuery,CSS3,HTML5 ', 'connect-four', 'connect-four', '', 'February 2021', 'https://github.com/dieDeMiguel/connect-four', 960, '2021-05-14 09:31:21.68259'),
(7, 'This project uses Ajax Requests in order to retrieve information from an online site. The list of results are rendered in real time using keyboard and mouse events which are handled by Jquery.', 'Incremental Search ', 'Search input with real time results', 'Incremental Search', 'https://s3.amazonaws.com/portfolio-diego/V00ge6i0X-VBBE1yDsNMn--rbdoTNWoE.jpg', 'JavaScript,JQuery,CSS3,HTML5 ', 'incremental', 'incremental-search-using-ajax', '', 'March 2021', 'https://github.com/dieDeMiguel/incremental', 950, '2021-05-14 09:37:39.276673'),
(8, 'Image carousel implemented only with Vanilla JavaScript DOM manipulation. An extensive use of CSS properties was also necessary in order to achieve a dynamic component with adjustable refresh rate.', 'Kitty Carousel', 'It''s a furry Carousel', 'Kitty-Carousel', 'https://s3.amazonaws.com/portfolio-diego/FcvsRQIHJNuYPLTDt22Ishd0Uca5gJug.jpg', 'JavaScript,JQuery,CSS3,HTML5 ', 'carousel', 'Kitty-Carousel', '', 'February 2021', 'https://github.com/dieDeMiguel/carousel', 939, '2021-05-14 09:42:03.6404'),
(9, 'Ticker implemented on upper part of the UI showing random text". Vanilla JavaScript was used with methods like: “window.requestAnimationFrame( )”, “window.cancelAnimationFrame( )” and several “eventListeners” are used together with CSS3 selectors in order to animate a list of elements that move on the upper part of the site.', 'Ticker', 'Ticker with passing info', 'ticker', 'https://s3.amazonaws.com/portfolio-diego/rK4p3D0JDbxnllCGA1Bx_DxWV3pbSV11.jpg', 'JavaScript,JQuery,CSS3,HTML5 ', 'ticker', 'Ticker', '', 'February 2021', 'https://github.com/dieDeMiguel/ticker', 940, '2021-05-14 10:17:09.926069'),
(10, '"Spotify Search" allows the user to query Artists and Albums which are then required through Ajax Requests to a Spotify endpoint. This data is later rendered as a list that has links to the artists or albums on Spotify. Auto-scroll is implemented on this site.', 'Spotify Search', 'Search input with real time results', 'spotify-search', 'https://s3.amazonaws.com/portfolio-diego/uWUwHIOo8564LUyi3QJZR06xxDN71lGb.jpg', 'NodeJS,ExpressJS,API,JavaScript', 'spotify', 'Spotify-Search', '', 'March 2021', 'https://github.com/dieDeMiguel/spotify', 954, '2021-05-14 10:21:13.683887'),
(11, 'Imageboard developed in VueJS, pictures are uploaded to AWS''s S3 service and displayed dynamically in the UI. Pictures from the database are queried in batches and displayed on demand. Comments are available for each photo.', 'Imageboard!', 'Image upload service', 'Imageboard.', 'https://s3.amazonaws.com/portfolio-diego/58BtZi166D-L42JVYXju6izz6jqJAWh_.jpg', 'VueJS,NodeJS,ExpressJS,JavaScript,PostgreSQL', 'imageboard', '', 'https://imageboard-diego.herokuapp.com', 'April 2021', 'https://github.com/dieDeMiguel/imageboard', 1000, '2021-05-14 16:42:14.187623'),
(12, 'The project you are currently browsing is on its third iteration. This time it was completely developed in React.JS using PostgreSQL for the database, AWS S3 as host for the media and other dependencies like "Multer" to handle file uploads. This portfolio has a CRUD for the projects and about info, making it easily maintainable.', 'Developer''s Portfolio', 'This portfolio''s insights', 'portfolio!', 'https://s3.amazonaws.com/portfolio-diego/U6CCTCZXrsqJyvFez-miSsg_t4MveTDl.png', 'ReactJS,ES6 JavaScript,PostgreSQL,AWS S3,ReactRouter', 'portfolio', '', 'diegodemiguel.herokuapp.com', 'May 2021', 'https://github.com/dieDeMiguel/portfolio-react', 1004, '2021-05-16 12:38:33.901865');
