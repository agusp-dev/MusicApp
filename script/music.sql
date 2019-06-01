CREATE DATABASE music;

USE music;

CREATE TABLE song (
    id INT NOT NULL auto_increment,
    title VARCHAR(50) DEFAULT NULL,
    autor VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO song (id, title, autor)
VALUES 
    (1,'Somebody to love','Queen'),
	(2,'We will rock you','Queen'),
	(3,'Hello','Adele'),
	(4,'Rolling in the deep','Adele'),
	(5,'I was made for loving you','Kiss'),
	(6,'I love it loud','Kiss'),
	(7,'Te necesito','Shakira'),
	(8,'Que me quedes tu','Shakira');



