const { Podcast } = require('../models');

const podcastData = [
  {
    title: 'SOMETHING WAS WRONG',
    creator: 'audiochuck',
    description: 'Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.',
    genre_id: 2,
  },
  {
    title: 'Lex Fridman Podcast',
    creator: 'Lex Fridman',
    description: 'Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power. Lex is an AI researcher at MIT and beyond.',
    genre_id: 4,
  }
];

const seedPodcasts = () => Podcast.bulkCreate(podcastData);

module.exports = seedPodcasts;