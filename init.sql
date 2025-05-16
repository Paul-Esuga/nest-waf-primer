-- CREATE TABLE users {
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(100) NOt NULL,
--     last_name VARCHAR(100) NOT NULL,
--     email VARCHAR(500) UNIQUE NOT NULL
-- }

-- INSERT INTO users VALUE ("Paul", "Esuga", "paul.esuga@pau.edu.ng")

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(500) UNIQUE NOT NULL
);

INSERT INTO users (first_name, last_name, email) 
VALUES ('Paul', 'Esuga', 'paul.esuga@pau.edu.ng');
