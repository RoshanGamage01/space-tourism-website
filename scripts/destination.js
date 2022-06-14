const MOON = document.getElementById("moon");
const MARS = document.getElementById("mars");
const EUROPA = document.getElementById("europa");
const TITAN = document.getElementById("titan");

const NAME = document.getElementById("name");
const DESCRIPTION = document.getElementById("desc");
const DISTANCE = document.getElementById("avg-distance");
const TRAVEL = document.getElementById("trvl-time");
const IMG = document.getElementById("planet-image");

const PLANET_DATA = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

MOON.onclick = () => {
  NAME.innerHTML = PLANET_DATA[0].name;
  DESCRIPTION.innerHTML = PLANET_DATA[0].description;
  IMG.src = PLANET_DATA[0].images.png;
  DISTANCE.innerHTML = PLANET_DATA[0].distance;
  TRAVEL.innerHTML = PLANET_DATA[0].travel;
  MOON.className = "des-active";
  MARS.className = "";
  EUROPA.className = "";
  TITAN.className = "";
};

MARS.onclick = () => {
  NAME.innerHTML = PLANET_DATA[1].name;
  DESCRIPTION.innerHTML = PLANET_DATA[1].description;
  IMG.src = PLANET_DATA[1].images.png;
  DISTANCE.innerHTML = PLANET_DATA[1].distance;
  TRAVEL.innerHTML = PLANET_DATA[1].travel;
  MOON.className = "";
  MARS.className = "des-active";
  EUROPA.className = "";
  TITAN.className = "";
};

EUROPA.onclick = () => {
  NAME.innerHTML = PLANET_DATA[2].name;
  DESCRIPTION.innerHTML = PLANET_DATA[2].description;
  IMG.src = PLANET_DATA[2].images.png;
  DISTANCE.innerHTML = PLANET_DATA[2].distance;
  TRAVEL.innerHTML = PLANET_DATA[2].travel;
  MOON.className = "";
  MARS.className = "";
  EUROPA.className = "des-active";
  TITAN.className = "";
};

TITAN.onclick = () => {
  NAME.innerHTML = PLANET_DATA[3].name;
  DESCRIPTION.innerHTML = PLANET_DATA[3].description;
  IMG.src = PLANET_DATA[3].images.png;
  DISTANCE.innerHTML = PLANET_DATA[3].distance;
  TRAVEL.innerHTML = PLANET_DATA[3].travel;
  MOON.className = "";
  MARS.className = "";
  EUROPA.className = "";
  TITAN.className = "des-active";
};
