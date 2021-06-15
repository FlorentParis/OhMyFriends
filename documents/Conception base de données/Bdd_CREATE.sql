DROP DATABASE IF EXISTS OhMyFriends;

CREATE DATABASE OhMyFriends;
USE OhMyFriends;

CREATE TABLE PERSONNAGES(
   id_personnage INT,
   nom VARCHAR(50),
   PRIMARY KEY(id_personnage)
);

CREATE TABLE SAISONS(
   id_saison INT,
   nb_avg_omg DECIMAL(4,2),
   PRIMARY KEY(id_saison)
);

CREATE TABLE EPISODES(
   id_episode INT,
   date_diffusion DATE NOT NULL,
   audience INT,
   id_saison INT NOT NULL,
   PRIMARY KEY(id_episode),
   FOREIGN KEY(id_saison) REFERENCES SAISONS(id_saison)
);

CREATE TABLE SOURCES(
   id_source INT,
   libelle VARCHAR(50),
   PRIMARY KEY(id_source)
);

CREATE TABLE LIVRES(
   id_source INT,
   annee SMALLINT,
   omg_count VARCHAR(50),
   total_count VARCHAR(50),
   PRIMARY KEY(id_source, annee),
   FOREIGN KEY(id_source) REFERENCES SOURCES(id_source)
);

CREATE TABLE SCRIPTS(
   id_personnage INT,
   id_saison INT,
   nb_omg INT,
   PRIMARY KEY(id_personnage, id_saison),
   FOREIGN KEY(id_personnage) REFERENCES PERSONNAGES(id_personnage),
   FOREIGN KEY(id_saison) REFERENCES SAISONS(id_saison)
);
