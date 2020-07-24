CREATE DATABASE partnerek;

CREATE TABLE ceginfo(
    ceginfo_id SERIAL PRIMARY KEY,
    nev VARCHAR(255) not NULL,
    cegforma VARCHAR(255),
    adoszam VARCHAR(255),
    cegjegyzekszam VARCHAR(255),
    bankszamlaszam VARCHAR(255)
);

CREATE TABLE cegelerhetoseg(
	telepules VARCHAR(255) not NULL,
	cim VARCHAR(255),
	telefonszam VARCHAR(20),
    megjegyzes VARCHAR(255)
);