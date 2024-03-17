CREATE DATABASE ace_hack;

CREATE TABLE org_surplus(
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    quantity VARCHAR(255),
    expdate VARCHAR(255),
    storereq VARCHAR(255),
    foodsafety VARCHAR(255)
);