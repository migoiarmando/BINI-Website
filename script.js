var players = [];
for (var i = 1; i <= 10; i++) {
  players[i] = new YT.Player("video" + i);
}

var carousel = document.getElementById("videosCarousel");
carousel.addEventListener("slide.bs.carousel", function(e) {
  var activeSlide = e.from + 1;
  if (players[activeSlide]) {
    players[activeSlide].stopVideo();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("biniLogo").onclick = function() {
    location.reload();
  };

  document.getElementById("profileLink").onclick = function() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("musicLink").onclick = function() {
    document
      .getElementById("discography")
      .scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("videosLink").onclick = function() {
    document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("galleryLink").onclick = function() {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("shopLink").onclick = function() {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("eventsLink").onclick = function() {
    document.getElementById("events").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("subscribeLink").onclick = function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const memberDetails = {
    ABOUT: {
      name: "ABOUT",
      fullName: "",
      dob: "",
      img: "assets/group.jpg",
      details: `
        Filipino pop phenomenon BINI features 8 multi-talented members,
        Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena. The
        girls have quickly become the biggest female Filipino artist in
        history, and second biggest artist overall in the Philippines,
        holding both the #1 & #2 spots on the top Filipino music charts
        simultaneously with the hits “Salamin, Salamin” and “Pantropiko.”
        BINI's sound is shaped by homegrown artists and global sensations
        alike. On the heels of their unprecedented growth in socials and in
        streaming listenership (30M +), the girls recently sold out their
        “BINIverse” tour in record-breaking time, and have been heralded as
        one of Teen Vogue's 2024 Girl Groups to watch!
      `,
    },
    AIAH: {
      name: "AIAH",
      fullName: "Maraiah Queen Arceta",
      dob: "January 27, 2001",
      img: "assets/Aiah.jpg",
      details: "",
    },
    COLET: {
      name: "COLET",
      fullName: "Ma. Nicolette Vergara",
      dob: "September 14, 2001",
      img: "assets/Colet.jpg",
      details: "",
    },
    GWEN: {
      name: "GWEN",
      fullName: "Gweneth L. Apuli",
      dob: "June 19, 2003",
      img: "assets/Gwen.jpg",
      details: "",
    },
    MALOI: {
      name: "MALOI",
      fullName: "Mary Loi Yves Ricalde",
      dob: "May 27, 2002",
      img: "assets/Maloi.jpg",
      details: "",
    },
    JHOANNA: {
      name: "JHOANNA",
      fullName: "Jhoanna Christine Robles",
      dob: "January 26, 2004",
      img: "assets/Jhoanna.jpg",
      details: "",
    },
    MIKHA: {
      name: "MIKHA",
      fullName: "Mikhaela Janna Lim",
      dob: "November 8, 2003",
      img: "assets/Mikha.jpg",
      details: "",
    },
    SHEENA: {
      name: "SHEENA",
      fullName: "Sheena Mae Catacutan",
      dob: "May 9, 2004",
      img: "assets/Sheena.jpg",
      details: "",
    },
    STACEY: {
      name: "STACEY",
      fullName: "Stacey Aubrey Sevilleja",
      dob: "July 13, 2003",
      img: "assets/Stacey.jpg",
      details: "",
    },
  };

  const memberItems = document.querySelectorAll(
    ".about-selector .list-group-item"
  );
  memberItems.forEach((item) => {
    item.addEventListener("click", function() {
      const member = memberDetails[item.textContent];
      if (member) {
        document.querySelector(
          ".about-details .member-name"
        ).innerHTML = `BINI <span class="member-highlight">${member.name}</span>`;
        document.querySelector(".about-details p:nth-child(2)").innerHTML =
          member.details
            ? member.details
            : `<strong>Full Name:</strong> ${member.fullName}`;
        document.querySelector(".about-details p:nth-child(3)").innerHTML =
          member.details ? "" : `<strong>Date of Birth:</strong> ${member.dob}`;
        document.querySelector(".carousel-item.active img").src = member.img;

        document
          .querySelector(".carousel-item.active")
          .classList.remove("active");
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems.forEach((carouselItem) => {
          if (carouselItem.querySelector("img").src.includes(member.img)) {
            carouselItem.classList.add("active");
          }
        });
      }

      memberItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
});
