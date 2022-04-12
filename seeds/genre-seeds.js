const { Genre } = require("../models");

const genreData = [
  {
    genre_name: "News",
  },
  {
    genre_name: "True Crime",
  },
  {
    genre_name: "Comedy",
  },
  {
    genre_name: "Technology",
  },
  {
<<<<<<< HEAD
    genre_name: "Documentary",
=======
    genre_name: 'Educational',
>>>>>>> develop
  },
  {
    genre_name: 'Entertainment',
  }
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
