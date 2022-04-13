const { Podcast } = require("../models");

const podcastData = [
  {
    title: "This Is Important",
    creator: "Adam Devine, Anders Holm, Blake Anderson, and Kyle Newacheck",
    description:
      "Adam Devine, Anders Holm, Blake Anderson, and Kyle Newacheck seriously discuss some very important topics",
    genre_id: 3,
    pod_img: "this-is-important-pod.jpg",
  },
  {
    title: "Lex Fridman Podcast",
    creator: "Lex Fridman",
    description:
      "Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power. Lex is an AI researcher at MIT and beyond.",
    genre_id: 4,
    pod_img: "lex-fridman-pod",
  },
  {
    title: "Hardcore History",
    creator: "Dan Carlin",
    description:
      "Carlins work weaves historical information with deep questions and Twilight Zone-style twists to help illustrate the power and continuing relevance of the past. Drama, extremes, empathy and vivid examples of both the highs and lows of humanity dominate the narrative. It’s a trademark mix of elements that has been entertaining listeners since 2005.",
    genre_id: 5,
    pod_img: "hardcore-history-pod",
  },
  {
    title: "The Weekly Planet",
    creator: "Nick Mason & James Clement",
    description:
      "The Weekly Planet covers all things movies, TV shows and comics. Often considered the first and worst podcast on the Planet Broadcasting Network.",
    genre_id: 6,
    pod_img: "the-weekly-planet-pod",
  },
  {
    title: "The Official Podcast",
    creator: "Jackson Clarke, Kaya Orsan, Andrew Wagenheim, Charles White Jr",
    description:
      "The Official Podcast is where four international man friends congregate to discuss just about everything. Featuring dumb questions, YouTube celebrities, childish giggling, burger puns, more dumb questions, fatherly advice, bad dating stories, even more dumb questions, and a slew of guest stars, The Official Podcast is a weekly show with a little something for everyone. Jackson, Andrew, Charlie, and Kaya gather to talk about only the most important things in life every Friday at 7pm EST.",
    genre_id: 3,
    pod_img: "the-official-pod",
  },
  {
    title: "Castle Super Beast",
    creator: " Pat Bovin, Woolie Madden",
    description:
      "Formerly known as the Super Best Friendcast. Every week, the shameless cowards known as Woolie and Pat discuss the latest in video game news, movies, and anime.",
    genre_id: 6,
    pod_img: "castle-super-beast-pod",
  },
  {
    title: "Breaking Points with Krysta; and Saagar",
    creator: "Krystal Ball and Saagar Enjeti",
    description:
      "Breaking Points is a fearless anti-establishment multi-week Youtube and Podcast which holds the powerful to account hosted by Krystal Ball and Saagar Enjeti",
    genre_id: 1,
    pod_img: "breaking-points-pod",
  },
  {
    title: "Your Moms House",
    creator: "Christina Pazsitzky & Tom Segura",
    description:
      "Christina Pazsitzky and Tom Segura are comedians who are also married. They are the Mommies and they welcome you to join them. Dental updates! Dudes! Stories! Wiping!",
    genre_id: 3,
    pod_img: "your-mom's-house-pod",
  },
  {
    title: "Flagrant 2",
    creator: "Andrew Schulz and Akaash Singh",
    description:
      "Flagrant 2 is a comedy podcast that delivers unfiltered, unapologetic, and unruly hot takes directly to your dome piece. In an era dictated by political correctness, hosts Andrew Schulz and Akaash Singh, along with AlexxMedia and Mark Gagnon, could care less about sensitivities. If it’s funny and flagrant it flies. If you are sensitive this podcast is not for you. But if you miss the days of comedians actually being funny instead of preaching to a choir then welcome to The Flagrancy.",
    genre_id: 3,
    pod_img: "flagrant-2-pod",
  },
  {
    title: "Twin Flames",
    creator: "Stephanie Beatriz",
    description:
      "We all want love, that happily-ever-after feeling of finding your soulmate. What if someone not only claimed they could help you find that perfect partner, they guaranteed it? Jeff and Shaleia, a young couple famous on YouTube, teach about Twin Flames a deep, romantic connection with your perfect partner in their videos. It’s divine love, you’re designed for no one else, and they’re designed for no one else. But the path to finding your Twin Flame isn’t so simple. Some followers claim they were encouraged to cut ties with friends and family that are holding them back, and to claim their Twin Flame by any means necessary. From Wondery, Twin Flames is a podcast about what happens when the quest for love turns into a dangerous obsession.",
    genre_id: 2,
    pod_img: "twin-flames-pod"
  },
  {
    title: "Escaping NXIVM",
    creator: "CBC Podcasts",
    description:
      'NXIVM (pronounced "Nexium") calls itself a humanitarian community. Experts call it a cult. Uncover: Escaping NXIVM is an investigative podcast series about the group, its leader Keith Raniere and one womans journey to get out. From CBC Podcasts and CBC News.',
    genre_id: 2,
    pod_img: "escaping-nxivm-pod"
  },
  {
    title: "This is Actually Happening",
    creator: "Whit Missildine",
    description:
      "What if your mother left to follow a cult… or you woke up in a morgue… or if your boat got caught in a storm and began to sink -- what would you do?   This is Actually Happening brings you extraordinary true stories of life-changing events told by the people who lived them. From a man who finds out a celebrity crush isn’t who she seems to a woman stranded in a Mexican desert fighting to survive, these stories will have you on the edge of your seat waiting to hear what happens next.",
    genre_id: 2,
    pod_img: "this-is-actually-happening-pod",
  },
  {
    title: "The Brilliant Idiots",
    creator: "Charlamange Tha God and Andrew Schulz",
    description:
      "Charlamagne Tha God and Andrew Schulz are The Brilliant Idiots. Join them each week as they explore the issues of the day in a style thats often idiotic, sometimes brilliant and always hysterical.",
    genre_id: 3,
    pod_img: "the-brilliant-idiots",
  },
  {
    title: "Rooster Teeth Podcast",
    creator: "Barbara Dunkelman: Burnie Burns; Gavin Free",
    description:
      "On a weekly basis the Rooster Teeth crew discuss gaming, films, popular culture, the internet, and projects that theyre currently working on.",
    genre_id: 6,
    pod_img: "RT-pod",
  },
  {
    title: "Therapy Gecko",
    creator: "Lyle Drescher",
    description:"An unlicensed lizard psychologist travels the universe talking to strangers about absolutely nothing. Call the gecko every Monday/Wednesday/Friday at 9pm EST on twitch.tv/lyleforever",
    genre_id: 6,
    pod_img: "",
  },
  {
    title: "How I Built This",
    creator: "Guy Raz",
    description:"Guy Raz dives into the stories behind some of the world's best known companies. How I Built This weaves a narrative journey about innovators, entrepreneurs and idealists—and the movements they built.",
    genre_id: 4,
    pod_img: "",
  },
  {
    title: "Internet Today",
    creator: "Ricky & Eliot",
    description: "Welcome to Internet Today with Ricky & Eliot an Opinion Based Comedy News and Podcast Channel for all things Entertainment, Tech, Culture, Gaming, and stuff that's just plain weird. All served up with a healthy dose of sarcasm.",
    genre_id: 1,
    pod_img: "",
  },
  {
    title: "NPR News Now",
    creator: "NPR",
    description: "The latest news in five minutes. updated hourly",
    genre_id: 1,
    pod_img: "",
  },
  {
    title: "Tech News Briefing By WSJ",
    creator: "Zoe Thomas",
    description: "Tech News Briefing is your guide to what people in tech are talking about. Every weekday, we’ll bring you breaking tech news and scoops from the pros at the Wall Street Journal, insight into new innovations and policy debates, tips from our personal tech team, and exclusive interviews with movers and shakers in the industry.",
    genre_id: 1,
    pod_img: "",
  },
  {
    title: "H3 podcast",
    creator: "Ethen Klein, Hila Klein",
    description: "h3h3Productions is a YouTube channel hosted by Ethan Klein and Hila Klein, an Israeli-American husband and wife duo. The majority of their content consists of reaction videos and sketch comedy in which they satirize internet culture. The H3 Podcast is their podcast channel that has been running since 2017.",
    genre_id: 6,
    pod_img: "",
  },
  {
    title: "Youre Wrong About",
    creator: "Sarah Marshall, Michael Hobbes",
    description: "Sarah is a journalist obsessed with the past. Every week she reconsiders a person or event that's been miscast in the public imagination.",
    genre_id: 5,
    pod_img: "",
  },
  {
    title: "Song Exploder",
    creator: "Hrishikesh Hirway",
    description: "Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made.",
    genre_id: 5,
    pod_img: "",
  },
  {
    title: "Overheard at National Geographic",
    creator: "Peter Gwin, Amy Briggs",
    description: "Come dive into one of the curiously delightful conversations overheard at National Geographic’s headquarters, as we follow explorers, photographers, and scientists to the edges of our big, weird, beautiful world",
    genre_id: 5,
    pod_img: "",
  },
  {
    title: "99% Invisible",
    creator: "Roman Mars",
    description: "Design is everywhere in our lives, perhaps most importantly in the places where we've just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture.",
    genre_id: 5,
    pod_img: "",
  },
  {
    title: "WAN Show",
    creator: "Linus and Luke",
    description: "Every week Linus and Luke discuss the most current happenings in the technology universe",
    genre_id: 4,
    pod_img: "",
  },
  {
    title: "Waveform",
    creator: "Marques 'MKBHD' Brownlee",
    description: "A tech podcast for the gadget lovers and tech heads among us from the mind of Marques Brownlee, better known as MKBHD. MKBHD has made a name for himself on YouTube reviewing everything from the newest smartphones to cameras to electric cars. Pulling from over 10 years of experience covering the tech industry, MKBHD and co-host Andrew Manganelli will keep you informed and entertained as they take a deep dive into the latest and greatest in tech and what deserves your hard earned cash. New episodes every week. Waveform is part of the Vox Media Podcast Network.",
    genre_id: 4,
    pod_img: "",
  },
  {
    title:  "Darknet Diaries",
    creator: "Jack Rhysider",
    description: "Explore true stories of the dark side of the Internet with host Jack Rhysider as he takes you on a journey through the chilling world of hacking, data breaches, and cyber crim",
    genre_id: 2,
    pod_img: "",
  },
  {
    title: "Accidental Tech Podcast",
    creator: "Marco Arment, Casey Liss, John Siracusa",
    description: "Three nerds discussing tech, Apple, programming, and loosely related matters.",
    genre_id: 4,
    pod_img: "",
  },
 
];

const seedPodcasts = () => Podcast.bulkCreate(podcastData);

module.exports = seedPodcasts;
