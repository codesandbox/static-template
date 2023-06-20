let books = [
  {
    title: "Harry Potter à l'école des sorciers",
    author: "J.K. Rowling",
    category: "Fantasy Jeunesse",
    summary:
      "Harry Potter, jeune orphelin, a été élevé par son oncle et sa tante dans des conditions hostiles. À l'âge de onze ans, un demi-géant nommé Rubeus Hagrid lui apprend qu'il possède des pouvoirs magiques. En fréquentant pour la première fois le monde des sorciers, accompagné par Hagrid, Harry découvre qu'il y est très célèbre. Il entame sa première année d'études à l'école de sorcellerie Poudlard, où il apprend à maîtriser la magie aux côtés de ses deux nouveaux amis Ron Weasley et Hermione Granger.",
    cover: "assets/images/hp1.jpg"
  },
  {
    title: "Cartographie des nuages",
    author: "David Mitchell",
    category: "Science-Fiction Adulte",
    summary:
      "Dans les îles Chatham en 1849, Adam Ewing, jeune et naïf homme de loi, voyage vers San Francisco, via Honolulu, sur un voilier dont le clandestin qui fuit l'esclavage est le dernier Moriori libre. À Zedelghem, près de Bruges, en 1931. Robert Frobisher est un jeune musicien vaniteux. Il écrit à son vieil ami et amant Rufus Sixsmith. À Buenas Yerbas en Californie, en 1975. Luisa Rey, une jeune journaliste, enquête sur un rapport défavorable à la construction d'une centrale nucléaire.",
    cover: "assets/images/Cloud_atlas.jpg"
  },
  {
    title: "La Communauté de l'anneau",
    author: "J.R.R. Tolkien",
    category: "Fantasy Adulte",
    summary:
      "Trois Anneaux pour les rois elfes sous le ciel, Sept pour les seigneurs nains dans leurs demeures de pierre, Neuf pour les hommes mortels destinés au trépas, Un Anneau pour les gouverner tous. Un Anneau pour les trouver. Un Anneau pour les amener tous, Et dans les ténèbres les lier. Au pays de Mordor où s'étendent les ombres.",
    cover: "assets/images/lotr.jpg"
  },
  {
    title: "Truth of the divine",
    author: "Lindsay Ellis",
    category: "Science-Fiction Adulte",
    summary:
      "La race humaine est à la croisée des chemins ; nous savons que nous ne sommes pas seuls, mais les détails sur la présence extraterrestre sur Terre sont toujours inconnus du public. Alors que le climat politique devient plus instable, le monde est obligé de considérer les ramifications de accorder des droits de l'homme à des personnes non-humaines.",
    cover: "assets/images/truth-of-the-divine.jpeg"
  },
  {
    title: "La Guerre des Mondes",
    author: "H.G. Wells",
    category: "Science-Fiction Adulte",
    summary:
      "Par-delà le gouffre de l’espace, des esprits qui sont à nos esprits ce que les nôtres sont à ceux des bêtes qui périssent, des intellects vastes, calmes et impitoyables, considéraient cette terre avec des yeux envieux, dressaient lentement et sûrement leurs plans pour la conquête de notre monde.",
    cover: "assets/images/war-of-the-worlds.jpeg"
  },
  {
    title: "Ensemble c'est tout",
    author: "Ana Gavalda",
    category: "Romance Adulte",
    summary:
      "Camille survit en faisant des ménages, ne mange presque plus et refuse de se remettre à sa passion, le dessin. Philibert, jeune aristocrate timide habitant un grand appartement, est passionné d'histoire, souffre de troubles obsessionnels compulsifs et bégaie. Son colocataire, Franck, est un très bon cuisinier, incapable de contrôler ses paroles, et qui ne semble être tendre qu'au contact de sa grand-mère, Paulette. Paulette a 83 ans, se laisse mourir dans une maison de retraite et ne vit que pour le bonheur de son petit-fils en se souvenant de sa vie d'avant.",
    cover: "assets/images/ensemble.jpeg"
  },
  {
    title: "Misery",
    author: "Stephen King",
    category: "Horreur Adulte",
    summary:
      "Misery, c'est le nom de l'héroïne populaire qui a rapporté des millions de dollars au romancier Paul Sheldon. Après quoi il en a eu assez : il a fait mourir Misery pour écrire enfin le « vrai » roman dont il rêvait. Et puis il a suffi de quelques verres de trop et d'une route enneigée, dans un coin perdu... Lorsqu'il reprend conscience, il est allongé sur un lit, les jambes broyées dans l'accident. Sauvé par une femme, Annie. Une admiratrice fervente. Qui ne lui pardonne pas d'avoir tué Misery. Et le supplice va commencer.",
    cover: "assets/images/misery.jpg"
  },
  {
    title: "Pars vite et reviens tard",
    author: "Fred Vargas",
    category: "Polar Adulte",
    summary:
      "On l'a peint soigneusement sur les treize portes d'un immeuble parisien : un grand 4 noir, inversé, à la base élargie. Le commissaire Adamsberg les photographie, et hésite : simple graffiti, ou menace ? A l'autre bout de la ville, Joss, l'ancien marin breton devenu Crieur de nouvelles est perplexe. Depuis trois semaines, une main glisse à la nuit d'incompréhensibles missives dans sa boîte à messages. Un amuseur ? Un cinglé ? Son ancêtre murmure à son oreille : 'Fais gaffe à toi, Joss. Il n'y a pas que du beau dans la tête de l'homme'.",
    cover: "assets/images/pars-vite.jpg"
  },
  {
    title: "Hunger Games part 1",
    author: "Suzanne Collins",
    category: "Science-Fiction Jeunesse",
    summary:
      "Dans un futur sombre, sur les ruines des États-Unis, un jeu télévisé est créé pour contrôler le peuple par la terreur. Douze garçons et douze filles tirés au sort participent à cette sinistre téléréalité, que tout le monde est forcé de regarder en direct. Une seule règle dans l’arène : survivre, à tout prix. Quand sa petite sœur est appelée pour participer aux Hunger Games, Katniss n’hésite pas une seconde. Elle prend sa place, consciente du danger. À seize ans, Katniss a déjà été confrontée plusieurs fois à la mort. Chez elle, survivre est comme une seconde nature…",
    cover: "assets/images/hunger-games.jpg"
  },
  {
    title: "Da Vinci Code",
    author: "Dan Brown",
    category: "Polar Adulte",
    summary:
      "Robert Langdon, un éminent spécialiste de symbologie de Harvard, est convoqué au Louvre pour examiner une série de pictogrammes en rapport avec l'œuvre de Léonard de Vinci. En déchiffrant le code, il met à jour l'un des plus grands mystères de notre temps... et devient un homme traqué.",
    cover: "assets/images/da-vinci-code.jpg"
  },
  {
    title: "La huitième couleur",
    author: "Terry Pratchett",
    category: "Fantasy Adulte",
    summary:
      "Dans une dimension lointaine et passablement farfelue, un monde en forme de disque est juché sur le dos de quatre éléphants, eux-mêmes posés sur une tortue. À Ankh-Morpork, l'une des villes du Disque-Monde, les habitants croyaient avoir tout vu. Et Deuxfleurs avait l'air tellement inoffensif, avec son Bagage de bois magique circulant sur une myriade de petites jambes... Tellement inoffensif que le Praticien a chargé le calamiteux sorcier Rincevent de sa sécurité dans la cité quadrillée par la guilde des voleurs et celle des assassins. Car Deuxfleurs appartient à l'espèce la plus redoutable qui soit : c'est un touriste...",
    cover: "assets/images/8-couleur.jpeg"
  },
  {
    title: "La horde du Contrevent",
    author: "Alain Damasio",
    category: "Science-Fiction Adulte",
    summary:
      "Ils sont vingt-trois, forment la trente-quatrième Horde du Contrevent et ont entre vingt-sept et quarante-trois ans. Dans un monde balayé par les vents, ils ont été formés depuis l'enfance dans un seul but : parcourir le monde, d'ouest en est, de l'Aval vers l'Amont, à contre-courant face au vent, à travers la plaine, l'eau et les pics glacés,  pour atteindre le mythique Extrême-Amont, la source de tous les vents.",
    cover: "assets/images/horde_hd.jpg"
  },
  {
    title: "Les chroniques martiennes",
    author: "Ray Bradbury",
    category: "Science-Fiction Adulte",
    summary:
      "2030 Les Terriens arrivent enfin sur Mars. Ils découvrent une bien curieuse planète dont les habitants ont des yeux d'or, lisent dans les pensées et ont peut-être atteint la suprême sagesse... Le rêve martien vient relayer le rêve américain. Jusqu'au jour où il tourne au cauchemar...",
    cover: "assets/images/chroniques-martiennes.jpeg"
  },
  {
    title: "Le maître du Haut-Chateau",
    author: "Philippe K. Dick",
    category: "Science-Fiction Adulte",
    summary:
      "En 1947 avait lieu la capitulation des Alliés devant les forces de l'Axe. Cependant que Hitler avait imposé la tyrannie nazie à l'Est des Etats Unis, l'Ouest avait été attribué aux Japonais. Quelques années plus tard, la vie avait repris son cours normal dans la zone occupée par les Nippons. Ils avaient apporté avec eux l'usage du Yi-king, le livre des transformations, le célèbre oracle chinois dont l'origine se perd dans la nuit des temps. Pourtant dans cette nouvelle civilisation, une rumeur étrange circulait. Un homme vivant dans un Haut Château, un écrivain de science-fiction, avait écrit un ouvrage qui racontait la victoire des Alliés en 1945.",
    cover: "assets/images/Le-Maitre-du-Haut-Chateau.jpg"
  }
];

export { books };
