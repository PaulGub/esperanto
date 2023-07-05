# Esperanto

L'objectif du projet est de créer une plateforme web de mise en relation entre les professionnels de la santé et les chercheurs. Ses principales fonctionnalités comprennent:

- Création de profil
- Mise en relation
- Proposition
- Recherche

L'idée est de faciliter la collaboration, l'échange de connaissances et le développement de projet dans le secteur de la santé.

## Technologies et frameworks
Voici les principales dépendances et langages que vous devez connaître pour contribuer à ce projet.

##### Backend :
- [Typescript](https://www.typescriptlang.org/docs/)
- [NodeJS](https://nodejs.org/en/docs)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- [SQL - Sequelize ORM](https://sequelize.org/docs/v6/getting-started/)

##### Frontend :
- [Typescript](https://www.typescriptlang.org/docs/)
- [React](https://legacy.reactjs.org/docs/getting-started.html)
- [React Router](https://reactrouter.com/en/main)
- [Apollo Client](https://www.apollographql.com/docs/react/)

## Prérequis
Tout d'abord, vous devez installer globalement les dépendances suivantes :

- [Docker](https://www.docker.com/products/docker-desktop/) (latest)
- [Node.js](https://nodejs.org/en/) (v18.x.x)

## Exécution de l'application avec Docker
La façon d'exécuter le projet dépendra de votre système d'exploitation.

Pour Linux:
```bash
docker-compose -f docker-compose.yml up
```

Pour MacOS:
```bash
docker-compose -f docker-compose.alt.yml up
```

Pour Windows:
```bash
docker-compose -f docker-compose.windows.yml up
```


## Installation en local avec Node.js

Veuillez vous référer au fichier `README.md` dans les répertoires `front/` et `back/`.

## Équipe
- **Theo Jamard** (backend)
- **Paul Gubbiotti** (backend)
- **Lucas Faget** (frontend)
- **Romain Thibaud** (frontend)
- **Samuel Rappy** (backend et frontend)

## Répartition des tâches
| Tâches          | Lucas | Samuel | Romain | Théo | Paul |
| --------------- | ----- | ------ | ------ | ---- | ---- |
| Gestion projet  | 20%   | 20%    | 20%    | 20%  | 20%  |
| Maquette        | 40%   | 20%    | 40%    | 0%   | 0%   |
| Modèle de données| 0%   | 20%    | 0%     | 40%  | 40%  |
| Back            | 0%    | 20%    | 0%     | 40%  | 40%  |
| Front           | 40%   | 20%    | 40%    | 0%   | 0%   |
| Moyenne globale | 20%   | 20%    | 20%    | 20%  | 20%  |
