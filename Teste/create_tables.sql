CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table Categories (
	id bigserial primary key,
	name varchar(200) not null unique
);

create table Products (
	id bigserial primary key,
	name varchar(200) not null,
	price decimal(8, 2) not null,
	category_id integer,
	foreign key(category_id) references categories(id)
);
