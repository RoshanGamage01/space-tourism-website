const SLIDERS = document.querySelectorAll(".slider");
const ROLE = document.querySelectorAll("#role");
const NAME = document.querySelectorAll("#name");
const DESCRIPTION = document.querySelectorAll("#desc");
const IMG = document.querySelectorAll("#img");

const DATA = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function sliderAnimation(x) {

  ROLE[0].innerHTML = DATA[x].role;
  ROLE[1].innerHTML = DATA[x].role;
  ROLE[2].innerHTML = DATA[x].role;

  NAME[0].innerHTML = DATA[x].name;
  NAME[1].innerHTML = DATA[x].name;
  NAME[2].innerHTML = DATA[x].name;

  DESCRIPTION[0].innerHTML = DATA[x].bio;
  DESCRIPTION[1].innerHTML = DATA[x].bio;
  DESCRIPTION[2].innerHTML = DATA[x].bio;

  IMG[0].src = DATA[x].images.png;
  IMG[1].src = DATA[x].images.png;
  IMG[2].src = DATA[x].images.png;
  setTimeout(() => {
    if (x < DATA.length - 1) {
      x = x + 1;
    } else {
      x = 0;
    }
    sliderAnimation(x);
  }, 4000);
}

sliderAnimation(0);

SLIDERS.forEach((e) => {
  e.addEventListener("click", function () {
    const ACTIVE = document.querySelectorAll(".slider-active");
    if (!(e.className == "slider slider-active")) {
      ACTIVE.forEach((el) => {
        el.className = "slider";
      });
      e.className = "slider slider-active";
      
      for (let i = 0; i < SLIDERS.length; i++) {
        if (e.id == SLIDERS[i].id) {
          ROLE[0].innerHTML = DATA[i].role;
          ROLE[1].innerHTML = DATA[i].role;
          ROLE[2].innerHTML = DATA[i].role;

          NAME[0].innerHTML = DATA[i].name;
          NAME[1].innerHTML = DATA[i].name;
          NAME[2].innerHTML = DATA[i].name;

          DESCRIPTION[0].innerHTML = DATA[i].bio;
          DESCRIPTION[1].innerHTML = DATA[i].bio;
          DESCRIPTION[2].innerHTML = DATA[i].bio;

          IMG[0].src = DATA[i].images.png;
          IMG[1].src = DATA[i].images.png;
          IMG[2].src = DATA[i].images.png;
        }
      }
    }
  });
});
