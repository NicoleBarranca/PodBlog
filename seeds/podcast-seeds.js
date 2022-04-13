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
  {
    title: 'Hardcore History',
    creator: 'Dan Carlin',
    description: 'Carlins work weaves historical information with deep questions and Twilight Zone-style twists to help illustrate the power and continuing relevance of the past. Drama, extremes, empathy and vivid examples of both the highs and lows of humanity dominate the narrative. It’s a trademark mix of elements that has been entertaining listeners since 2005.',
    genre_id: 5,
  },
  {
    title: "The Weekly Planet",
    creator: "Nick Mason & James Clement",
    description:
      "The Weekly Planet covers all things movies, TV shows and comics. Often considered the first and worst podcast on the Planet Broadcasting Network.",
    genre_id: 6,
  },
  {
    title: "The Official Podcast",
    creator: "Jackson Clarke, Kaya Orsan, Andrew Wagenheim, Charles White Jr",
    description:
      "The Official Podcast is where four international man friends congregate to discuss just about everything. Featuring dumb questions, YouTube celebrities, childish giggling, burger puns, more dumb questions, fatherly advice, bad dating stories, even more dumb questions, and a slew of guest stars, The Official Podcast is a weekly show with a little something for everyone. Jackson, Andrew, Charlie, and Kaya gather to talk about only the most important things in life every Friday at 7pm EST.",
    genre_id: 3,
  },
  {
    title: "Castle Super Beast",
    creator: " Pat Bovin, Woolie Madden",
    description:
      "Formerly known as the Super Best Friendcast. Every week, the shameless cowards known as Woolie and Pat discuss the latest in video game news, movies, and anime.",
    genre_id: 6,
  },
  {
    title: "Breaking Points with Krystal and Saagar",
    creator: "Krystal Ball and Saagar Enjeti",
    description:
      "Breaking Points is a fearless anti-establishment multi-week Youtube and Podcast which holds the powerful to account hosted by Krystal Ball and Saagar Enjeti",
    genre_id: 1,
  },
  {
    title: "Your Moms House",
    creator: "Christina Pazsitzky & Tom Segura",
    description:
      "Christina Pazsitzky and Tom Segura are comedians who are also married. They are the Mommies and they welcome you to join them. Dental updates! Dudes! Stories! Wiping!",
    genre_id: 3,
  },
  {
    title: "Flagrant 2",
    creator: "Andrew Schulz and Akaash Singh",
    description:
      "Flagrant 2 is a comedy podcast that delivers unfiltered, unapologetic, and unruly hot takes directly to your dome piece. In an era dictated by political correctness, hosts Andrew Schulz and Akaash Singh, along with AlexxMedia and Mark Gagnon, could care less about sensitivities. If it’s funny and flagrant it flies. If you are sensitive this podcast is not for you. But if you miss the days of comedians actually being funny instead of preaching to a choir then welcome to The Flagrancy.",
    genre_id: 3,
  },
  {
    title: "Twin Flames",
    creator: "Stephanie Beatriz",
    description:
      "We all want love, that happily-ever-after feeling of finding your soulmate. What if someone not only claimed they could help you find that perfect partner, they guaranteed it? Jeff and Shaleia, a young couple famous on YouTube, teach about Twin Flames a deep, romantic connection with your perfect partner in their videos. It’s divine love, you’re designed for no one else, and they’re designed for no one else. But the path to finding your Twin Flame isn’t so simple. Some followers claim they were encouraged to cut ties with friends and family that are holding them back, and to claim their Twin Flame by any means necessary. From Wondery, Twin Flames is a podcast about what happens when the quest for love turns into a dangerous obsession.",
    genre_id: 5,
  },
  {
    title: "Escaping NXIVM",
    creator: "CBC Podcasts",
    description:
      'NXIVM (pronounced "Nexium") calls itself a humanitarian community. Experts call it a cult. Uncover: Escaping NXIVM is an investigative podcast series about the group, its leader Keith Raniere and one womans journey to get out. From CBC Podcasts and CBC News.',
    genre_id: 2,
  },
  {
    title: "This is Actually Happening",
    creator: "Whit Missildine",
    description:
      "What if your mother left to follow a cult… or you woke up in a morgue… or if your boat got caught in a storm and began to sink -- what would you do?   This is Actually Happening brings you extraordinary true stories of life-changing events told by the people who lived them. From a man who finds out a celebrity crush isn’t who she seems to a woman stranded in a Mexican desert fighting to survive, these stories will have you on the edge of your seat waiting to hear what happens next.",
    genre_id: 2,
  },
  {
    title: "This is Important",
    creator: "Adam Devine, Anders Holm, Blake Anderson, and Kyle Newacheck",
    description:
      "Adam Devine, Anders Holm, Blake Anderson, and Kyle Newacheck seriously discuss some very important topics.",
    genre_id: 3,
  },
  {
    title: "The Brilliant Idiots",
    creator: "Charlamange Tha God and Andrew Schulz",
    description:
      "Charlamagne Tha God and Andrew Schulz are The Brilliant Idiots. Join them each week as they explore the issues of the day in a style thats often idiotic, sometimes brilliant and always hysterical.",
    genre_id: 3,
  },
  {
    title: "Rooster Teeth Podcast",
    creator: "Barbara Dunkelman: Burnie Burns; Gavin Free",
    description:
      "On a weekly basis the Rooster Teeth crew discuss gaming, films, popular culture, the internet, and projects that theyre currently working on.",
    genre_id: 6,
  },
];

const seedPodcasts = () => Podcast.bulkCreate(podcastData);

module.exports = seedPodcasts;
