CREATE DATABASE partners;

CREATE TABLE ceginfo(
    cegId SERIAL PRIMARY KEY,
    nev VARCHAR(255),
    cegforma VARCHAR(255),
    adoszam VARCHAR(255),
    cegjegyzekszam VARCHAR(255),
    bankszamlaszam VARCHAR(255)
);

CREATE TABLE cegelerhetoseg(
    cegId SERIAL,
	telepules VARCHAR(255),
	cim VARCHAR(255),
	telefonszam VARCHAR(20),
    megjegyzes VARCHAR(255),
    FOREIGN KEY (cegId) REFERENCES ceginfo(cegId) ON DELETE CASCADE
);