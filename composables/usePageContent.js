// Contenu de la page, en dur (anciennement les champs ACF de la page WordPress ID 7).
// Les noms de champs ACF sont conservés pour ne pas toucher aux templates.
const content = {
  grand_titre: '&nbsp;&nbsp;Take<br>\n&nbsp;Our<br>\nMoon',
  phrase_dintroduction: 'Quand le sage désigne la lune, <br>\nl\'idiot regarde le doigt.',

  titre_du_bloc_mission: 'Les missions<br>\n&nbsp;lunaires',
  sous_titre_bloc_mission: 'Tant convoité... ce doigt',
  tableau_des_missions: [
    { mission: 'Luna 1A', etat: 'Union soviétique', annee: '1958', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 1B', etat: 'Union soviétique', annee: '1958', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 1C', etat: 'Union soviétique', annee: '1958', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 1', etat: 'Union soviétique', annee: '1958', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec - Survol de la lune à une distance de 5 955km' },
    { mission: 'Pioneer 4', etat: 'États-Unis', annee: '1959', type_de_mission: 'Survol', resultat_de_la_mission: 'Echec - Passe à ~60 000km de la lune' },
    { mission: 'Luna 2A', etat: 'Union soviétique', annee: '1959', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 2', etat: 'Union soviétique', annee: '1959', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Succès - Premier objet artificiel sur le sol lunaire' },
    { mission: 'Luna 3', etat: 'Union soviétique', annee: '1959', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Premières images de la face caché de la lune' },
    { mission: 'Luna 3A', etat: 'Union soviétique', annee: '1960', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 3B', etat: 'Union soviétique', annee: '1960', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Ranger 1', etat: 'États-Unis', annee: '1961', type_de_mission: 'Sonde lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Ranger 2', etat: 'États-Unis', annee: '1961', type_de_mission: 'Sonde lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Ranger 3', etat: 'États-Unis', annee: '1961', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec de trajectoire' },
    { mission: 'Ranger 4', etat: 'États-Unis', annee: '1962', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec de trajectoire' },
    { mission: 'Ranger 5', etat: 'États-Unis', annee: '1962', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec de trajectoire' },
    { mission: 'Spoutnik 25', etat: 'Union soviétique', annee: '1963', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - La sonde ne quitte pas l\'orbite terrestre' },
    { mission: 'Luna 4A', etat: 'Union soviétique', annee: '1963', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec de trajectoire' },
    { mission: 'Luna 4', etat: 'Union soviétique', annee: '1963', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - Passe à ~833km de la lune' },
    { mission: 'Ranger 6', etat: 'États-Unis', annee: '1964', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Echec - Panne des caméras' },
    { mission: 'Luna 5A', etat: 'Union soviétique', annee: '1964', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 5B', etat: 'Union soviétique', annee: '1964', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Ranger 7', etat: 'États-Unis', annee: '1964', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Succès - Premières images Américaines proche de la surface' },
    { mission: 'Ranger 8', etat: 'États-Unis', annee: '1965', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Succès - Photographies' },
    { mission: 'Ranger 9', etat: 'États-Unis', annee: '1965', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Succès - Photographies' },
    { mission: 'Cosmos 60', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - La sonde ne quitte pas l\'orbite terrestre' },
    { mission: 'Luna 5C', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 5', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - S\'écrase sur le sol lunaire' },
    { mission: 'Luna 6', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - Passe à ~159 000km de la lune' },
    { mission: 'Luna 7', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - S\'écrase sur le sol lunaire' },
    { mission: 'Luna 8', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - S\'écrase sur le sol lunaire' },
    { mission: 'Luna 9', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Succès - Premier atterrissage en douceur et photo depuis la surface' },
    { mission: 'Cosmos 111', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Echec - La sonde ne quitte pas l\'orbite terrestre' },
    { mission: 'Luna 10', etat: 'Union soviétique', annee: '1965', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Premier orbiteur opérationnel' },
    { mission: 'Surveyor 1', etat: 'États-Unis', annee: '1966', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Succès - Premier atterrissage en douceur d\'une sonde Américaine' },
    { mission: 'Lunar Orbiter 1', etat: 'États-Unis', annee: '1966', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Premier orbiteur opérationnel Américain' },
    { mission: 'Luna 11', etat: 'Union soviétique', annee: '1966', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Surveyor 2', etat: 'États-Unis', annee: '1966', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec' },
    { mission: 'Luna 12', etat: 'Union soviétique', annee: '1966', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Photos effectuées depuis l\'orbite lunaire' },
    { mission: 'Lunar Orbiter 2', etat: 'États-Unis', annee: '1966', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Luna 13', etat: 'Union soviétique', annee: '1966', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Succès - Répétition de Luna 9' },
    { mission: 'Lunar Orbiter 3', etat: 'États-Unis', annee: '1967', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Cosmos 159', etat: 'Union soviétique', annee: '1967', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Echec' },
    { mission: 'Surveyor 3', etat: 'États-Unis', annee: '1967', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Succès - opérationnel' },
    { mission: 'Lunar orbiter 4', etat: 'États-Unis', annee: '1967', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - opérationnel' },
    { mission: 'Surveyor 4', etat: 'États-Unis', annee: '1967', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec' },
    { mission: 'Lunar orbiter 5', etat: 'États-Unis', annee: '1967', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Premières images haute résolution' },
    { mission: 'Surveyor 5', etat: 'États-Unis', annee: '1967', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Surveyor 6', etat: 'États-Unis', annee: '1967', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Surveyor 7', etat: 'États-Unis', annee: '1968', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Luna 14A', etat: 'Union soviétique', annee: '1968', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 14', etat: 'Union soviétique', annee: '1968', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Cartographie détaillée de la lune' },
    { mission: 'Apollo 8', etat: 'États-Unis', annee: '1968', type_de_mission: 'Mission habité / Survol', resultat_de_la_mission: 'Succès - Premier vol habité autour de la lune' },
    { mission: 'Luna 1969A', etat: 'Union soviétique', annee: '1969', type_de_mission: 'Rover lunaire', resultat_de_la_mission: 'Echec au lancement' },
    { mission: 'Luna 15A', etat: 'Union soviétique', annee: '1969', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec' },
    { mission: 'Apollo 10', etat: 'États-Unis', annee: '1969', type_de_mission: 'Mission habité / Survol', resultat_de_la_mission: 'Succès - Répétition du débarquement sur la surface' },
    { mission: 'Luna 15', etat: 'Union soviétique', annee: '1969', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec - La sonde s\'écrase sur le sol lunaire' },
    { mission: 'Apollo 11', etat: 'États-Unis', annee: '1969', type_de_mission: 'Mission habité / Exploration', resultat_de_la_mission: 'Succès - Premiers hommes sur la lune' },
    { mission: 'Cosmos 300', etat: 'Union soviétique', annee: '1969', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec - La sonde ne quitte pas l\'orbite terrestre' },
    { mission: 'Cosmos 305', etat: 'Union soviétique', annee: '1969', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec - La sonde ne quitte pas l\'orbite terrestre' },
    { mission: 'Apollo 12', etat: 'États-Unis', annee: '1969', type_de_mission: 'Mission habité / Exploration', resultat_de_la_mission: 'Succès - Retrouvailles avec la sonde Surveyor 3' },
    { mission: 'Luna 16A', etat: 'Union soviétique', annee: '1970', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec - La sonde s\'écrase sur le sol lunaire' },
    { mission: 'Apollo 13', etat: 'États-Unis', annee: '1970', type_de_mission: 'Mission habité / Exploration', resultat_de_la_mission: 'Echec - Retour de l\'équipage sain et sauf' },
    { mission: 'Luna 16', etat: 'Union soviétique', annee: '1970', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Succès - Retour d\'un échantillon de 101g' },
    { mission: 'Luna 17', etat: 'Union soviétique', annee: '1970', type_de_mission: 'Rover lunaire', resultat_de_la_mission: 'Succès - Le rover parcourt 10.5km' },
    { mission: 'Apollo 14', etat: 'États-Unis', annee: '1971', type_de_mission: 'Mission habité / Exploration', resultat_de_la_mission: 'Succès - Parcourent 3km' },
    { mission: 'Apollo 15', etat: 'États-Unis', annee: '1971', type_de_mission: 'Mission habité / Exploration', resultat_de_la_mission: 'Succès - Première utilisation d\'un rover, 27.76km parcouru' },
    { mission: 'Luna 18', etat: 'Union soviétique', annee: '1971', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec - La sonde s\'écrase sur le sol lunaire' },
    { mission: 'Luna 19', etat: 'Union soviétique', annee: '1971', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Luna 20', etat: 'Union soviétique', annee: '1972', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Succès - Retour d\'un échantillon de 55g' },
    { mission: 'Apollo 16', etat: 'États-Unis', annee: '1972', type_de_mission: 'Mission habité / Exploration', resultat_de_la_mission: 'Succès - Utilisation du rover, 35.89km parcouru' },
    { mission: 'Apollo 17', etat: 'États-Unis', annee: '1972', type_de_mission: 'Mission habité / Exploration', resultat_de_la_mission: 'Succès - Utilisation du rover, 37km parcouru' },
    { mission: 'Luna 21', etat: 'Union soviétique', annee: '1973', type_de_mission: 'Rover lunaire', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Luna 22', etat: 'Union soviétique', annee: '1974', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Opérationnel' },
    { mission: 'Luna 23', etat: 'Union soviétique', annee: '1974', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec - Foreuse endommagée' },
    { mission: 'Luna 24A', etat: 'Union soviétique', annee: '1975', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Echec' },
    { mission: 'Luna 24', etat: 'Union soviétique', annee: '1976', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Succès - Retour d\'un échantillon de 170.1g' },
    { mission: 'Hiten', etat: 'Japon', annee: '1990', type_de_mission: 'Orbite lunaire / Impact lunaire / Survol', resultat_de_la_mission: 'Echec' },
    { mission: 'Clementine', etat: 'États-Unis', annee: '1994', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Première sonde lunaire lancée depuis 20ans' },
    { mission: 'Lunar Prospector', etat: 'États-Unis', annee: '1998', type_de_mission: 'Orbite lunaire / Impact lunaire', resultat_de_la_mission: 'Succès - Carte détaillée des éléments chimiques présent sur la lune' },
    { mission: 'Smart 1', etat: 'Europe', annee: '2003', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - déplacement à profusion ionique' },
    { mission: 'Kaguya', etat: 'Japon', annee: '2007', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Étude de la géomorphologie de la lune' },
    { mission: 'Chang\'e 1', etat: 'Chine', annee: '2007', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Premier orbiteur lunaire Chinois / Cartographie 3D' },
    { mission: 'Chandrayaan-1', etat: 'Inde', annee: '2008', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Premier satellite Indien / Cartographie de la surface' },
    { mission: 'LRO', etat: 'États-Unis', annee: '2009', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Observation détaillée de la surface' },
    { mission: 'LCROSS', etat: 'États-Unis', annee: '2009', type_de_mission: 'Impact lunaire', resultat_de_la_mission: 'Succès - Analyse des débris lunaire après impact' },
    { mission: 'Chang\'e 2', etat: 'Chine', annee: '2010', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Images en haute résolution' },
    { mission: 'THEMIS 1 et 2', etat: 'États-Unis', annee: '2010', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: '' },
    { mission: 'GRAIL', etat: 'États-Unis', annee: '2011', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Relevé du champ de gravité de la lune' },
    { mission: 'LADEE', etat: 'États-Unis', annee: '2013', type_de_mission: 'Orbite lunaire', resultat_de_la_mission: 'Succès - Étude de l\'atmoshpère' },
    { mission: 'Chang\'e 3', etat: 'Chine', annee: '2013', type_de_mission: 'Rover lunaire', resultat_de_la_mission: 'Succès - Premier atterrissage lunaire chinois' },
    { mission: 'Chang\'e 4', etat: 'Chine', annee: '2018', type_de_mission: 'Rover lunaire', resultat_de_la_mission: 'Succès - Premier atterrissage sur la face cachée' },
    { mission: 'Beresheet', etat: 'Israël', annee: '2019', type_de_mission: 'Atterrisseur', resultat_de_la_mission: 'Echec - La sonde s\'écrase sur le sol lunaire' },
    { mission: 'Chandrayaan-2', etat: 'Inde', annee: '2019', type_de_mission: 'Orbite lunaire / Rover lunaire', resultat_de_la_mission: 'Echec - Perte de contact avant l\'atterissage' },
    { mission: 'Chang\'e 5', etat: 'Chine', annee: '2020', type_de_mission: 'Retour d\'échantillon', resultat_de_la_mission: 'Succès - Retour d\'un échantillon de 1731g' }
  ],

  grand_titre_colonisation: '&nbsp;&nbsp;Coloniser<br>\n&nbsp;la <br>\nlune',
  titre_colonisation: 'Le doigt, heu...<br>\n&nbsp;la lune',
  sous_titre_colonisation: 'Quelques bases sur notre satellite',
  // Icônes à déposer dans public/images/ (anciennement hébergées sur WordPress)
  tableau_des_informations: [
    { icone: '/images/Groupe-55.png', titre_de_linformation: 'Nom', sous_titre_de_linformation: 'Lune' },
    { icone: '/images/Groupe-54.png', titre_de_linformation: 'Diamètre', sous_titre_de_linformation: '3 474,8 km' },
    { icone: '/images/Groupe-53.png', titre_de_linformation: 'Masse', sous_titre_de_linformation: '7,6x10²²kg' },
    { icone: '/images/Groupe-52.png', titre_de_linformation: 'Distance de la terre', sous_titre_de_linformation: '384 400 km' }
  ],

  le_programme_artemis: 'Le programme<br>\n&nbsp;Artemis',
  minis_articles_artemis: [
    {
      titre_article_artemis: 'Un début de colonisation',
      texte_article_artemis: 'La présence continue d\'astronautes à la surface de la Lune doit permettre de développer et tester de nouvelles approches, technologies et systèmes qui pourront être utilisés dans des environnements plus difficiles. <br>\nLes investissements effectués doivent permettre d\'abaisser le coup de l\'exploration de l\'espace profond et permettre de lancer des missions avec équipage vers Mars.'
    },
    {
      titre_article_artemis: 'Répondre à des objectifs <br>\nscientifiques',
      texte_article_artemis: 'Le programme Artemis doit contribuer à remplir les objectifs scientifiques assignés par le rapport décennal sur les sciences planétaires produit par le Conseil national de la recherche des États-Unis. <br>\n<br>\nLes principaux thèmes du rapport traités par le programme Artemis sont la compréhension des processus planétaires et du cycle des volatiles, la reconstitution de l\'histoire de l\'impact à l\'origine de la formation du système Terre-Lune, la recherche d\'éléments fournissant des informations sur le Soleil à ses origines, l\'observation de l\'univers depuis la Lune, la réalisation d\'expériences dans l\'environnement lunaire et la recherche de méthodes et d\'équipements permettant de réduire les risques courus par les équipages des missions d\'exploration planétaire.'
    }
  ],

  titre_ressource: '&nbsp;&nbsp;Une <br>\n&nbsp;ressource<br>\nincroyable',
  titre_régolithe: 'Le régolithe <br>\n&nbsp;lunaire',
  // Image à déposer dans public/images/ (anciennement hébergée sur WordPress)
  photo_regolithe: '/images/Groupe-de-masques-44.webp',
  // Ordre d'affichage : [0] colonne gauche haut, [2] gauche bas, [1] droite haut, [3] droite bas
  informations_regolithe: [
    {
      titre_info_regolithe: 'De l\'oxygène sur la <br>\nlune',
      texte_info_regolithe: 'L\'oxygène compose environ 45% du poids du régolithe. Pour vulgariser l\'extraction, il faut chauffer à très haute température la poussière dans un contenant et à la soumettre à un courant électrique. L’oxygène, qui se désolidarise du régolithe, est récupéré sous forme de gaz. <br>\nSelon l’ESA, 75 % de l’oxygène peut être extrait en seulement 15 heures.<br>\nLe développement d\'un générateur à oxygène peut alors être une solution pour nos futures colons lunaire'
    },
    {
      titre_info_regolithe: 'Un carburant pour <br>\nles fusées',
      texte_info_regolithe: 'Le régolithe extrait servirait aussi à l\'alimentation en carburant des fusées.<br>\nLe but est d\'être auto-suffisant sur le sol lunaire et d\'importer le moins de matière depuis la terre.'
    },
    {
      titre_info_regolithe: 'Un moyen de <br>\nconstruction',
      texte_info_regolithe: 'Etablir une base lunaire pourrait être beaucoup plus simple en utilisant une imprimante 3D afin de la construire à partir des matières premières disponibles sur place.<br>\nLe régolithe est un parfait ingrédient pour réaliser un béton lunaire, l\'urine des colons pourrait même être utilisé pour améliorer la solidité de celui-ci !'
    },
    {
      titre_info_regolithe: 'Plutôt utile ce doigt...',
      texte_info_regolithe: 'Tout porte à penser que le régolithe lunaire à tout pour plaire.<br>\nCependant celui-ci est toxique, des précautions devront être prises afin qu\'il ne devienne pas une problématique pour les habitants.'
    }
  ]
}

// Même forme que l'ancien retour de useWpPage (ref calculée), les composants n'ont pas à changer.
export const usePageContent = () => computed(() => content)
