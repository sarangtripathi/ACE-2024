CREATE DATABASE ace_hack;

CREATE TABLE org_surplus(
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    quantity VARCHAR(255),
    expdate VARCHAR(255),
    storereq VARCHAR(255),
    foodsafety VARCHAR(255)
);

CREATE TABLE organization(
    org_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
);
CREATE TABLE volunteer(
    volunteer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
);

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
    role VARCHAR(255),
);