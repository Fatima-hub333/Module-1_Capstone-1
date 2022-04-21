const hamBurger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const exitBtn = document.getElementById('exitbtn');
const menuElements = document.querySelectorAll('#display_menu_Js a');
const logo = document.querySelector('.mob-logo');

hamBurger.addEventListener('click', () => {
  hamBurger.style.display = 'none';
  logo.style.display = 'none';
  menu.style.display = 'block';
});

exitBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  hamBurger.style.display = 'block';
  logo.style.display = 'block';
});

for (let i = 0; i < menuElements.length; i += 1) {
  menuElements[i].addEventListener('click', () => {
    menu.style.display = 'none';
  });
}

// Speakers Cards

const speakers = [
  {
    picture: 'speak-1.jpg',
    alt: 'Speaker-1',
    title: 'Scott Morrison',
    power: 'Prime Minister of Australia',
    description: 'An Australian politician serving as the 30th and current prime minister of Australia. He assumed office in August 2018 upon his election..',
  },

  {
    picture: 'speak-2.jpg',
    alt: 'Speaker-2',
    title: 'Narendra Modi',
    power: 'Prime Minister of India',
    description: "He is the first prime minister to have been born after India's independence in 1947 and the second prime minister. Modi was the chief minister. ",
  },

  {
    picture: 'speak-3.jpg',
    alt: 'Speaker-3',
    title: 'Moon Jae-in',
    power: 'Prime Minister of South Korea',
    description: 'Moon was chosen to be the 2002 South Korean presidential election campaign manager for his longtime mentor Roh Moo-hyun in his successful bid.',
  },

  {
    picture: 'speak-4.jpg',
    alt: 'Speaker-4',
    title: 'Cyril Ramaphosa',
    power: 'Prime Minister of South Africa',
    description: "He has been called a skillful negotiator and strategist who acted as the ANC's Chief Negotiator during South Africa's transition to democracy.",
  },

  {
    picture: 'speak-5.jpg',
    alt: 'Speaker-5',
    title: 'Justin Trudeau',
    power: 'Prime Minister of Canada',
    description: 'Born in Ottawa, Trudeau attended Collège Jean-de-Brébeuf, graduated from McGill University in 1994 with a Bachelor of Arts degree in literature.',
  },

  {
    picture: 'speak-6.jpg',
    alt: 'Speaker-6',
    title: 'Emmanuel Macron',
    power: 'Prime Minister of France',
    description: "Macron was appointed a deputy secretary general by President shortly after his election in May 2012, making Macron one of Hollande's senior advisers.",
  },
];

const imagePath = './images/base/';

const fillValues = (aSpeaker, speaker) => {
  const picture = aSpeaker.querySelector('img');
  picture.src = imagePath + speaker.picture;
  picture.alt = speaker.alt;

  aSpeaker.querySelector('.speaker-title').textContent = speaker.title;
  aSpeaker.querySelector('.speaker-power').textContent = speaker.power;
  aSpeaker.querySelector('.speaker-description').textContent = speaker.description
    .toString()
    .replaceAll(',', ', ');
};

const createSpeakerList = (speakers) => {
  const speakersContainer = document.querySelector('.speakers-container');

  if (speakersContainer != null) {
    const card = speakersContainer.querySelector('.speaker');

    speakers.forEach((speaker) => {
      const aSpeaker = card.cloneNode(true);
      fillValues(aSpeaker, speaker);
      speakersContainer.appendChild(aSpeaker);
    });
    card.remove();
  }
};

createSpeakerList(speakers);