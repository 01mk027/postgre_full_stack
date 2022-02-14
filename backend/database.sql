CREATE DATABASE postgre_full_stack;

CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    task_desc VARCHAR(255),
    task_name VARCHAR(255),
    add_date TIMESTAMP,
    update_date TIMESTAMP,
    state_of_task VARCHAR(255)
);
