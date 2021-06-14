/* Recuperer le nombre d'omg dans la série par saison */
Select SUM(nb_omg) from scripts where id_saison = 1;

/* Quantité de OMG dans les books, moyenne des source (de 1994 à 2004) */
Select AVG(omg_count) from livres where annee = 1994;

/* Quantité de OMG par saison et par personnages */
Select * from scripts;

/* Audience totale (par saisons) */
Select AVG(audience) from Episodes where id_saison = 1;

/* Quantité de OMG totale dans les Books (par saisons) */
Select AVG(omg_count) from Livres where annee = 1994;

/* Quantité de OMG totale dans la série (par saisons) */
Select AVG(nb_omg) from scripts where id_saison = 1;