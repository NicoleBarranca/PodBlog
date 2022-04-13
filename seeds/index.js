const seedGenres = require('./genre-seeds');
const seedPodcasts = require('./podcast-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGenres();
  console.log('\n----- GENRES SEEDED -----\n');

  await seedPodcasts();
  console.log('\n----- PODCASTS SEEDED -----\n');

  process.exit(0);
};

seedAll();