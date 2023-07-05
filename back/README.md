# Esperanto Backend

## Installation

Créé une base de donnée `MySQL` :

```sql
CREATE DATABASE `esperanto`;
```

Dans le répertoire `back/`, il faut installer les dépendances :

```bash
npm install
```

Créer un fichier d'environnement `back/.env` et y ajouter ces variables :

```dotenv
# MySQL Database settings
DATABASE_NAME="esperanto"
DATABASE_USER="root"
DATABASE_PASSWORD="password"
DATABASE_HOST="localhost"
DATABASE_PORT="3306"
```

Créer les tables de la base de donnée :

```bash
npm run sync-database
```

Ajouter des données de test, cela peut prendre 2 ou 3 minutes (optionnel) :

```bash
npm run import-fake-data
```

Lancer le serveur Appolo :

- Pour Linux
```bash
npm run dev
```

- Pour Mac
```bash
npm run dev-alt
```

- Pour Windows
```bash
npm run dev-windows
```

## Exécuter les tests

```bash
npm run test
```