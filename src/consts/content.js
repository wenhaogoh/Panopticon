export const intro = {
  title: "Panapticon",
  text:
    "The year is 2050. " +
    "To efficiently maintain law and order, the government has adopted a dystopian-esque surveillance programme. " +
    "Petty crimes and dissent are automatically flagged by the system and the individuals involved will be issued a warning. " +
    "Upon receiving 3 warnings, an individual will be brought in by the authorities to stand trial for their crimes.",
};

export const rules = {
  title: "Rules",
  text:
    "You are a citizen of Panapticon. " +
    "Your goal is to avoid receiving 3 warnings throughout the day. " +
    "Take note that the system is indiscriminate and does not even if you trigger its algoritmn unintentionally. " +
    "Beware, no one has heard back from those who have been arrested thus far...",
};

export const questions = [
  {
    title: "6.00am",
    text: "You wake up to your smartphone's alarm. As it is still early, do you go online to read the news or browse trending videos?",
    options: [
      {
        text: "Read the news",
        log: "Accessed link: www.bbc.com",
        source: "Network tracker",
      },
      {
        text: "Browse trending videos",
        log: "Accessed link: www.youtube.com",
        source: "Network tracker",
      },
    ],
  },
  {
    title: "6.30am",
    text: "You stumble upon a forum where several anonymous users are criticising the government. You agree with their opinions and feel strongly about the issue. Do you participate in the discussion as an anonymous user?",
    options: [
      {
        text: "Yes",
        warningMessage:
          "Your online activities have been detected to be a threat to the stability of the nation. Website: www.reddit.com",
        log: "Accessed link: www.reddit.com",
        source: "Network tracker",
      },
      {
        text: "No",
      },
    ],
  },
  {
    title: "7.00am",
    text: "Feeling hungry but lazy, which type of breakfast do you order through the delivery app?",
    options: [
      {
        text: "Porridge",
        log: "Ordered 1x plain porridge: www.grab.com",
        source: "Network tracker",
      },
      {
        text: "Pastries",
        log: "Ordered 3x choclate danish: www.grab.com",
        source: "Network tracker",
      },
      {
        text: "Sandwich",
        log: "Ordered 1x turkey sandwich: www.grab.com",
        source: "Network tracker",
      },
    ],
  },
  {
    title: "8.00am",
    text: "You leave home for work. To reach the bus stop, you need to cross a road. The traffic lights are red but there are no vehicles around. Do you wait for the traffic lights to turn green before crossing?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
        warningMessage:
          "Your actions have been detected to be a violation of traffic laws. Location: 6th Avenue",
        log: "Identified at 6th Avenue",
        source: "CCTV + facial recognition",
      },
    ],
  },
  {
    title: "12.00pm",
    text: "Lunch break has begun so you head downstairs to the company's cafeteria. What do you order?",
    options: [
      {
        text: "Sushi",
        log: "Ordered 1x Salmon Nigiri: The Sushi Bar [Stall ID: A2KD93KD]",
        source: "Bank transfer",
      },
      {
        text: "Burger",
        log: "Ordered 1x Cheeseburger: Astons [Stall ID: L60P23OE]",
        source: "Bank transfer",
      },
      {
        text: "Fried Rice",
        log: "Ordered 1x Fried Rice: Fried Delights [Stall ID: BC83BZHW]",
        source: "Bank transfer",
      },
    ],
  },
  {
    title: "2.00pm",
    text: "You find an online image that is exactly what you need for an upcoming presentation but it is behind a paywall. Do you use a screenshot of it or continue searching for a free image?",
    options: [
      {
        text: "Use a screenshot",
        warningMessage:
          "Your online activities have been detected to be a violation of copyright laws. Website: www.images.com/FDKEIDU",
        log: "Screenshot captured: www.images.com/FDKEIDU",
        source: "Company laptop software",
      },
      {
        text: "Continue searching",
      },
    ],
  },
  {
    title: "5.30pm",
    text: "It is almost the end of work. You have completed everything you need to do for the day. Do you play mobile games, take a nap discreetly or chat with your colleagues to pass time?",
    options: [
      {
        text: "Play mobile games",
        warningMessage:
          "You have been detected engaging in non-work related activities during work hours.",
        log: "Launched application: Mobile Legends",
        source: "Network tracker",
      },
      {
        text: "Take a nap",
      },
      {
        text: "Chat with colleagues",
      },
    ],
  },
  {
    title: "6.00pm",
    text: "Work has ended. You leave the office feeling exhausted. How do you plan to go home?",
    options: [
      {
        text: "Book a ride",
        log: "Booked a ride [From: 10 King's Street, To: 20 Queen's Street]",
        source: "Third-party services",
      },
      {
        text: "Take public transport",
        log: "Boarded bus 15: [From: Bus Stop 39372, To: Bus Stop 93834]",
        source: "Third-party services",
      },
    ],
  },
  {
    title: "7.00pm",
    text: "You reach home after a long day of work. Which dinner do you order through the delivery app?",
    options: [
      {
        text: "Ramen",
        log: "Ordered 1x Spicy Tonkotsu Ramen: www.grab.com",
        source: "Network tracker",
      },
      {
        text: "Ricebowl",
        log: "Ordered 1x Sashimi Ricebowl: www.grab.com",
        source: "Network tracker",
      },
      {
        text: "Pizza",
        log: "Ordered 1x 11-inch Pepperoni Thin Crust Pizza: www.dominos.com",
        source: "Network tracker",
      },
    ],
  },
  {
    title: "9.00pm",
    text: "While surfing the web, you find a site that streams a pirated copy of a movie that you always wanted to watch. Do you click on its link?",
    options: [
      {
        text: "Yes",
        warningMessage:
          "Your online activities have been detected to be a violation of copyrights.",
        log: "Accessed link: www.freemovie123.com",
        source: "Network tracker",
      },
      {
        text: "No",
      },
    ],
  },
  {
    title: "11.00pm",
    text: "It is getting late so you decide to retire for the night.",
    options: [
      {
        text: "Turn off the lights",
      },
    ],
  },
];
