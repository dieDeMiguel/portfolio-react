DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS about;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    info TEXT NOT NULL,
    heading VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL UNIQUE,
    img VARCHAR(255),
    technologies TEXT,
    slug VARCHAR(255) NOT NULL UNIQUE,
    directory VARCHAR(255) UNIQUE,
    link VARCHAR(255) UNIQUE,
    date VARCHAR(255),
    git VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE about (
    id SERIAL PRIMARY KEY,
    first_paragraph TEXT,
    second_paragraph  TEXT,
    third_paragraph  TEXT,
    fourth_paragraph  TEXT,
    image_first_row VARCHAR(255),
    image_second_row VARCHAR(255),
    first_banner VARCHAR(255),
    second_banner VARCHAR(255),
    third_banner VARCHAR(255),
    fourth_banner VARCHAR(255),
    last_paragraph TEXT,
    long_paragraph TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);







