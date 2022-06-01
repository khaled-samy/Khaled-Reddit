BEGIN;

DROP TABLE IF EXISTS  users,posts CASCADE ;

CREATE TABLE "users" (
    id SERIAL PRIMARY KEY , 
    username VARCHAR(200) NOT NULL UNIQUE ,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL 
);
CREATE TABLE "posts" (
    id SERIAL PRIMARY KEY , 
    title VARCHAR(200) NOT NULL  ,
    description text NOT NULL , 
    user_id INT ,
    FOREIGN KEY (user_id)  REFERENCES users(id)
);
COMMIT;
