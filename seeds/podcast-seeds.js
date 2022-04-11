const { Podcast } = require("../models");

const podcastData = [
  {
    title: "This Is Important",
    creator: "Adam Devine, Anders Holm, Blake Anderson, and Kyle Newacheck",
    description:
      "Adam Devine, Anders Holm, Blake Anderson, and Kyle Newacheck seriously discuss some very important topics",
    genre_id: 3,
  },
  {
    title: "Lex Fridman Podcast",
    creator: "Lex Fridman",
    description:
      "Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power. Lex is an AI researcher at MIT and beyond.",
    genre_id: 4,
  },
];

const seedPodcasts = () => Podcast.bulkCreate(podcastData);

module.exports = seedPodcasts;
