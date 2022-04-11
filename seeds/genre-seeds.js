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
    genre_name: 'Educational',
  },
  {
    genre_name: 'Entertainment',
  }
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
