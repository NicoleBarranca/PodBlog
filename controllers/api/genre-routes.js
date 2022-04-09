const router = require("express").Router();
const { Genre, Podcast } = require("../../models/");

// Find all genres
router.get('/', (req, res) => {
    Genre.findAll({
      include: [
        {
          model: Podcast,
          attributes: ['title']
        }
      ]
    })
      .then(GenreInfo => res.json(GenreInfo))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Find one genre
router.get('/:id', (req, res) => {
    Genre.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'genre_name'],
      include: [
        {
            model: Podcast,
            attributes: ['id', 'title', 'creator', 'description', 'genre_id']
        }
      ]
    })
      .then(GenreInfo => {
        if (!GenreInfo) {
          res.status(400).json({ message: 'No category with this id found!' });
          return;
        }
        res.json(GenreInfo);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Create a new genre
router.post('/', (req, res) => {
    Genre.create({
      genre_name: req.body.genre_name
    })
      .then(GenreInfo => res.json(GenreInfo))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Update a genre 
router.put('/:id', (req, res) => {
    Genre.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(GenreInfo => {
        if (!GenreInfo[0]) {
          res.status(404).json({ message: 'Cannot find genre with this id.' });
          return;
        }
        res.json(GenreInfo);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Delete a genre 
router.delete('/:id', (req, res) => {
    Genre.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(GenreInfo => {
        if (!GenreInfo) {
          res.status(404).json({ message: 'Cannot find genre with this id.' });
          return;
        }
        res.json(GenreInfo);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;