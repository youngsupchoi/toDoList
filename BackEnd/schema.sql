CREATE DATABASE todolistsystem;
USE todolistsystem;

CREATE TABLE todos(
    ToDoId INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL, 
    author VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    priority INTEGER NOT NULL,
)
