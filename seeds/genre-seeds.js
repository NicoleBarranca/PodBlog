const { Genre } = require('../models');

const genreData = [
  {
    genre_name: 'News',
  },
  {
    genre_name: 'True Crime',
  },
  {
    genre_name: 'Comedy',
  },
  {
    genre_name: 'Technology',
  },
  {
    genre_name: 'Anime',
  },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
