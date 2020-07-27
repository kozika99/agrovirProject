CREATE DATABASE partners;

CREATE TABLE ceginfo(
    ceg_id SERIAL PRIMARY KEY,
    nev VARCHAR(255) not NULL,
    cegforma VARCHAR(255),
    adoszam VARCHAR(255),
    cegjegyzekszam VARCHAR(255),
    bankszamlaszam VARCHAR(255)
);

CREATE TABLE cegelerhetoseg(
    ceg_id SERIAL PRIMARY KEY,
	telepules VARCHAR(255) not NULL,
	cim VARCHAR(255),
	telefonszam VARCHAR(20),
    megjegyzes VARCHAR(255)
);