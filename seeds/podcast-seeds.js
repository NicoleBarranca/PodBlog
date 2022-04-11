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
  },
  {
    title: 'Hardcore History',
    creator: 'Dan Carlin',
    description: 'Carlin’s work weaves historical information with deep questions and Twilight Zone-style twists to help illustrate the power and continuing relevance of the past. Drama, extremes, empathy and vivid examples of both the highs and lows of humanity dominate the narrative. It’s a trademark mix of elements that has been entertaining listeners since 2005.',
    genre_id: 5,
  },
  {
    title: 'The Weekly Planet',
    creator: 'Nick Mason & James Clement',
    description: 'The Weekly Planet covers all things movies, TV shows and comics. Often considered the first and worst podcast on the Planet Broadcasting Network.',
    genre_id: 6,
  },
  {
    title: 'The Official Podcast',
    creator: 'Jackson Clarke, Kaya Orsan, Andrew Wagenheim, Charles White Jr',
    description: 'The Official Podcast is where four international man friends congregate to discuss just about everything. Featuring dumb questions, YouTube celebrities, childish giggling, burger puns, more dumb questions, fatherly advice, bad dating stories, even more dumb questions, and a slew of guest stars, The Official Podcast is a weekly show with a little something for everyone. Jackson, Andrew, Charlie, and Kaya gather to talk about only the most important things in life every Friday at 7pm EST.',
    genre_id: 3,
  },
  {
    title: 'Castle Super Beast',
    creator: ' Pat Bovin, Woolie Madden',
    description: 'Formerly known as the Super Best Friendcast. Every week, the shameless cowards known as Woolie and Pat discuss the latest in video game news, movies, and anime.',
    genre_id: 6,
  },
];

const seedPodcasts = () => Podcast.bulkCreate(podcastData);

module.exports = seedPodcasts;