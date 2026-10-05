// data.js - Curated Book Information Dataset

const booksData = [
  {
    id: "the-great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    rating: 4.8,
    reviewCount: 3820,
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#1e3a5f",
    year: 1925,
    pages: 180,
    publisher: "Charles Scribner's Sons",
    isbn: "978-0743273565",
    language: "English",
    tagline: "A portrait of the Jazz Age in all its decadence and excess.",
    synopsis: `Set in the summer of 1922 on prosperous Long Island, The Great Gatsby follows Nick Carraway, a young Yale graduate from the Midwest who rents a modest bungalow adjacent to the lavish estate of the mysterious Jay Gatsby. Gatsby is notorious for throwing ostentatious weekend parties attended by hundreds, yet he remains an enigmatic figure rarely seen enjoying his own revelry.

Nick soon discovers that Gatsby's fortune and extravagant lifestyle have been cultivated for a single purpose: to recapture the love of Daisy Buchanan, Nick's cousin and the wife of the arrogant Tom Buchanan. As the tragic story unfurls against the backdrop of the Roaring Twenties, Fitzgerald crafts an enduring exploration of obsession, wealth, social division, and the disillusionment of the American Dream.`,
    authorBio: "Francis Scott Key Fitzgerald (1896–1940) was an American novelist and short story writer widely considered one of the greatest writers of the 20th century. His works vividly illustrate the flamboyance and excess of the Jazz Age.",
    quotes: [
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
      "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life."
    ],
    reviews: [
      {
        user: "Eleanor Vance",
        rating: 5,
        date: "October 12, 2025",
        comment: "Fitzgerald's prose is poetry in disguise. The atmosphere of 1920s New York is painted so vividly that you can almost hear the jazz horns echoing."
      },
      {
        user: "Marcus Chen",
        rating: 4.5,
        date: "January 4, 2026",
        comment: "A devastatingly poignant critique of ambition and superficiality. Shorter than many modern classics, yet carries monumental emotional weight."
      }
    ]
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Improvement",
    rating: 4.9,
    reviewCount: 9410,
    coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#c2410c",
    year: 2018,
    pages: 320,
    publisher: "Avery / Penguin Random House",
    isbn: "978-0735211292",
    language: "English",
    tagline: "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
    synopsis: `No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the world's foremost experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.

Clear distills complex concepts from biology, psychology, and neuroscience into an easy-to-understand guide for making good habits inevitable and bad habits impossible. Through inspiring stories of Olympic gold medalists, award-winning artists, and business leaders, you'll learn how small changes of just 1% can compound into life-altering achievements over time.`,
    authorBio: "James Clear is a writer and speaker focused on habits, decision making, and continuous improvement. His work has appeared in The New York Times, Entrepreneur, and Time, and his weekly '3-2-1' newsletter reaches millions worldwide.",
    quotes: [
      "You do not rise to the level of your goals. You fall to the level of your systems.",
      "Every action you take is a vote for the type of person you wish to become."
    ],
    reviews: [
      {
        user: "Sarah Jenkins",
        rating: 5,
        date: "September 18, 2025",
        comment: "Hands down the most actionable book on habit formation I have ever read. The four laws of behavior change are immediately applicable."
      },
      {
        user: "David Ross",
        rating: 5,
        date: "November 29, 2025",
        comment: "Clear cuts through fluff and theory. Changed my morning workflow and fitness routines completely within three weeks."
      }
    ]
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    rating: 4.8,
    reviewCount: 6150,
    coverUrl: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#b45309",
    year: 1965,
    pages: 688,
    publisher: "Chilton Books",
    isbn: "978-0441172719",
    language: "English",
    tagline: "Set on the desert planet Arrakis, a masterwork of science fiction.",
    synopsis: `Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides, whose family accepts the stewardship of the dangerous desert planet Arrakis. Arrakis is the only known source of the spice melange—the most valuable substance in the universe, capable of extending human life and facilitating interstellar space travel.

When House Atreides is betrayed by the sinister Baron Harkonnen and the galactic Padishah Emperor, Paul and his mother Jessica flee into the deep desert among the Fremen, Arrakis' fierce native inhabitants. As Paul's prophetic powers awaken, he embarks on an epic journey that will reshape the destiny of humanity across the cosmos.`,
    authorBio: "Frank Herbert (1920–1986) was an acclaimed American science fiction author best known for the novel Dune and its five sequels. Herbert's saga remains one of the foundational cornerstones of modern speculative literature.",
    quotes: [
      "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.",
      "The mystery of life isn't a problem to solve, but a reality to experience."
    ],
    reviews: [
      {
        user: "Aria Thorne",
        rating: 5,
        date: "July 14, 2025",
        comment: "An unmatched masterpiece of worldbuilding. Ecology, religion, politics, and destiny are interwoven with staggering intricacy."
      },
      {
        user: "Liam O'Connor",
        rating: 4.5,
        date: "August 30, 2025",
        comment: "Slow burn in the first hundred pages, but once the pieces move, it is an unstoppable thrill. Paul's journey is unforgettable."
      }
    ]
  },
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy",
    rating: 4.9,
    reviewCount: 4210,
    coverUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#334155",
    year: 180,
    pages: 256,
    publisher: "Penguin Classics",
    isbn: "978-0140449334",
    language: "English (Translated)",
    tagline: "Private notes and reflections of the Roman Emperor on Stoic philosophy.",
    synopsis: `Written in Greek by the only Roman emperor who was also a philosopher, Meditations is a collection of personal writings by Marcus Aurelius recording his private thoughts, reminders, and aphorisms on Stoic philosophy. Composed during military campaigns between 170 and 180 AD, these reflections were never intended for publication.

Instead, they form an intimate, profoundly honest diary of a ruler striving to maintain his integrity, composure, empathy, and sense of duty in the face of immense burden, political betrayal, and constant warfare. Aurelius urges himself to embrace nature's flow, conquer anxiety, and treat every fellow human being with quiet benevolence.`,
    authorBio: "Marcus Aurelius Antoninus (121–180 AD) was Roman Emperor from 161 to 180 AD and the last of the rulers known as the Five Good Emperors. He is revered as one of the quintessential figures of ancient Stoicism.",
    quotes: [
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
      "The happiness of your life depends upon the quality of your thoughts."
    ],
    reviews: [
      {
        user: "Julian K.",
        rating: 5,
        date: "December 05, 2025",
        comment: "A handbook for emotional resilience that has stood the test of nearly two millennia. Reading even a page brings immediate peace."
      },
      {
        user: "Siddharth Rao",
        rating: 5,
        date: "January 14, 2026",
        comment: "Remarkable how the most powerful man in the ancient world sat in his tent writing reminders to be humble and patient."
      }
    ]
  },
  {
    id: "the-silent-patient",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Mystery",
    rating: 4.7,
    reviewCount: 5290,
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#7f1d1d",
    year: 2019,
    pages: 336,
    publisher: "Celadon Books",
    isbn: "978-1250301696",
    language: "English",
    tagline: "A shocking psychological thriller of murder, silence, and obsession.",
    synopsis: `Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening, her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face—and then never speaks another word.

Alicia's refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with her. His determination to get her to talk leads him down a twisting path into his own motivations.`,
    authorBio: "Alex Michaelides is a British-Cypriot author and screenwriter. He studied English literature at Cambridge University and received an MA in screenwriting from the American Film Institute in Los Angeles.",
    quotes: [
      "One of the hardest things to admit is that we weren't loved... We carry that wound forever.",
      "We often mistake love for fireworks, for drama and dysfunction. But real love is very quiet."
    ],
    reviews: [
      {
        user: "Chloe Bennett",
        rating: 4.5,
        date: "October 02, 2025",
        comment: "That plot twist hit me like a freight train. I genuinely gasped out loud. Kept me turning pages late into the night."
      },
      {
        user: "Nathan Drake",
        rating: 4.5,
        date: "November 11, 2025",
        comment: "Cleverly crafted narrative blending Greek mythology and psychological tension. The pacing is crisp and unrelenting."
      }
    ]
  },
  {
    id: "sapiens",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    rating: 4.8,
    reviewCount: 8840,
    coverUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#047857",
    year: 2014,
    pages: 464,
    publisher: "Harper",
    isbn: "978-0062316097",
    language: "English",
    tagline: "From an insignificant ape to the master of planet Earth.",
    synopsis: `One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one: Homo sapiens. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations, and human rights?

In Sapiens, Dr. Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical, and sometimes devastating, breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions. Drawing on insights from biology, anthropology, and economics, Harari challenges everything we thought we knew about being human.`,
    authorBio: "Yuval Noah Harari is an Israeli historian, philosopher, and professor in the Department of History at the Hebrew University of Jerusalem. He is the bestselling author of Sapiens, Homo Deus, and 21 Lessons for the 21st Century.",
    quotes: [
      "You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven.",
      "We study history not to know the future but to widen our horizons, to understand that our present situation is neither natural nor inevitable."
    ],
    reviews: [
      {
        user: "Hannah Scott",
        rating: 5,
        date: "January 22, 2026",
        comment: "Mind-expanding on every single page. It fundamentally changed how I view human culture, religion, and currency."
      },
      {
        user: "Kenji Sato",
        rating: 4.8,
        date: "February 04, 2026",
        comment: "A magnificent macroscopic view of humankind. Harari writes with clarity, wit, and fearless intellectual curiosity."
      }
    ]
  },
  {
    id: "the-name-of-the-wind",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    rating: 4.9,
    reviewCount: 7120,
    coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#4338ca",
    year: 2007,
    pages: 662,
    publisher: "DAW Books",
    isbn: "978-0756404741",
    language: "English",
    tagline: "The heroic tale of Kvothe, told in his own voice.",
    synopsis: `Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-riddled city, his daringly brazen attempt to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story.

Rothfuss crafts a world of breathtaking prose, rich folklore, lyrical magic systems, and authentic music that transports the reader into an unforgettable fantasy realm.`,
    authorBio: "Patrick Rothfuss is an American author of epic fantasy. His debut novel, The Name of the Wind, garnered widespread critical acclaim and won the Quill Award for Best Science Fiction/Fantasy.",
    quotes: [
      "It is the questions we can't answer that teach us the most. They teach us how to think.",
      "Words can light fires in the minds of men. Words can wring tears from the hardest hearts."
    ],
    reviews: [
      {
        user: "Dylan Pierce",
        rating: 5,
        date: "August 19, 2025",
        comment: "Rothfuss writes like a musician. The rhythm and prose elevate this far above typical fantasy. An absolute triumph."
      },
      {
        user: "Seraphina Lin",
        rating: 5,
        date: "September 08, 2025",
        comment: "I lost entire days reading this book. Kvothe's struggles and the university setting are thoroughly captivating."
      }
    ]
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Improvement",
    rating: 4.7,
    reviewCount: 3950,
    coverUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    coverAccent: "#0f766e",
    year: 2016,
    pages: 304,
    publisher: "Grand Central Publishing",
    isbn: "978-1455586691",
    language: "English",
    tagline: "Rules for Focused Success in a Distracted World.",
    synopsis: `Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. Deep work will make you better at what you do and provide the sense of true fulfillment that comes from craftsmanship.

In short, deep work is like a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go deep—spending their days instead in a frantic blur of e-mail and social media, not even realizing there's a better way. Cal Newport presents a rigorous training regimen for reclaiming cognitive mastery.`,
    authorBio: "Cal Newport is an Associate Professor of Computer Science at Georgetown University and the author of seven books, including Digital Minimalism and So Good They Can't Ignore You.",
    quotes: [
      "If you don't produce, you won't thrive—no matter how skilled or talented you are.",
      "Clarity about what matters provides clarity about what does not."
    ],
    reviews: [
      {
        user: "Timothy Ward",
        rating: 5,
        date: "November 03, 2025",
        comment: "This book cured my doomscrolling habit and boosted my software engineering output noticeably. Essential modern reading."
      },
      {
        user: "Priya Sharma",
        rating: 4.5,
        date: "January 07, 2026",
        comment: "Practical, rigorous, and completely devoid of empty corporate buzzwords. Changed how I schedule my calendar."
      }
    ]
  }
];
