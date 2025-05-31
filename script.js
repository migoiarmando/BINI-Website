var players = [];
for (var i = 1; i <= 10; i++) {
  players[i] = new YT.Player("video" + i);
}

var carousel = document.getElementById("videosCarousel");
carousel.addEventListener("slide.bs.carousel", function (e) {
  var activeSlide = e.from + 1;
  if (players[activeSlide]) {
    players[activeSlide].stopVideo();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("biniLogo").onclick = function () {
    location.reload();
  };

  document.getElementById("profileLink").onclick = function () {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("musicLink").onclick = function () {
    document
      .getElementById("discography")
      .scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("videosLink").onclick = function () {
    document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("galleryLink").onclick = function () {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("shopLink").onclick = function () {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("eventsLink").onclick = function () {
    document.getElementById("events").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("subscribeLink").onclick = function () {
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
        simultaneously with the hits "Salamin, Salamin" and "Pantropiko."
        BINI's sound is shaped by homegrown artists and global sensations
        alike. On the heels of their unprecedented growth in socials and in
        streaming listenership (30M +), the girls recently sold out their
        "BINIverse" tour in record-breaking time, and have been heralded as
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
    item.addEventListener("click", function () {
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

  // Get all list items in the about-selector
  const aboutListItems = document.querySelectorAll(
    "#about .about-selector .list-group-item"
  );
  // Get the about carousel element
  const aboutCarousel = document.getElementById("aboutCarousel");
  // Get the member name heading element
  const memberNameHeading = document.querySelector(
    "#about .about-details .member-name"
  );

  // Add click event listener to each list item
  aboutListItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove 'active' class from all list items
      aboutListItems.forEach((li) => li.classList.remove("active"));

      // Add 'active' class to the clicked list item
      this.classList.add("active");

      // Get the slide index from data-bs-slide-to attribute
      const slideIndex = parseInt(this.getAttribute("data-bs-slide-to"));

      // Use Bootstrap carousel method to go to the specific slide
      if (aboutCarousel && aboutCarousel.classList.contains("carousel")) {
        const carouselInstance =
          bootstrap.Carousel.getInstance(aboutCarousel) ||
          new bootstrap.Carousel(aboutCarousel);
        carouselInstance.to(slideIndex);
      }

      // Update the member name heading
      // Check if the clicked item is "ABOUT"
      if (this.textContent.trim() === "ABOUT") {
        memberNameHeading.textContent = ""; // Clear the heading if it's "ABOUT"
      } else {
        memberNameHeading.textContent = this.textContent; // Otherwise, set to the item text
      }
    });
  });

  // Add an event listener to the carousel to update the active list item and heading when the slide changes
  if (aboutCarousel) {
    aboutCarousel.addEventListener("slid.bs.carousel", function (event) {
      // Get the index of the currently active slide
      const activeSlideIndex = event.to;

      // Remove 'active' class from all list items
      aboutListItems.forEach((li) => li.classList.remove("active"));

      // Find the list item corresponding to the active slide index and add 'active' class
      const activeListItem = document.querySelector(
        `#about .about-selector .list-group-item[data-bs-slide-to="${activeSlideIndex}"]`
      );
      if (activeListItem) {
        activeListItem.classList.add("active");
        // Update the member name heading
        // Check if the active item is "ABOUT"
        if (activeListItem.textContent.trim() === "ABOUT") {
          memberNameHeading.textContent = ""; // Clear the heading if it's "ABOUT"
        } else {
          memberNameHeading.textContent = activeListItem.textContent; // Otherwise, set to the item text
        }
      }
    });
  }

  // Data for Discography items (Add more albums as needed)
  const discographyData = [
    {
      title: "Gandang Vitakeratin",
      info: "Single • 2024", // Example info, update as needed
      moreMusicLink:
        "https://open.spotify.com/album/0pmaK0PxEEJyNeJ0Z5lubi?si=-TXwcSaaTSCgMfJ7edc3zA",
    },
    {
      title: "Pantropiko",
      info: "Single • 2024", // Example info, update as needed
      moreMusicLink:
        "https://open.spotify.com/album/3NYOeU6Uwj2FP1Zz1rWVz8?si=rq1CKsVRR7Ck3tKtxBsi1Q",
    },
    {
      title: "Talaarawan",
      info: "EP • 2024 • 6 Songs", // Example info, update as needed
      moreMusicLink:
        "https://open.spotify.com/album/2eT1XApzS0GmkJLMlCBdVv?si=4aTalEMIT6yWnGKYSw1-Cw",
    },
    // Add data for other albums, ensuring the order matches the swiper-slide divs
  ];

  // Get discography details elements
  const albumTitleElement = document.querySelector("#discography .album-title");
  const albumInfoElement = document.querySelector("#discography .album-info");
  const moreMusicBtn = document.querySelector("#discography .more-music-btn");

  // Function to update discography details
  function updateDiscographyDetails(index) {
    if (index >= 0 && index < discographyData.length) {
      const album = discographyData[index];
      albumTitleElement.textContent = album.title;
      albumInfoElement.textContent = album.info;
      moreMusicBtn.href = album.moreMusicLink;
    } else {
      // Clear details if index is out of bounds
      albumTitleElement.textContent = "";
      albumInfoElement.textContent = "";
      moreMusicBtn.href = "#"; // Or a default link
    }
  }

  // Initialize Swiper
  var swiper = new Swiper(".discography-swiper", {
    effect: "coverflow", // Use coverflow effect
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto", // Allow to show multiple slides
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multiplier
      slideShadows: false, // Disable slide shadows to help remove gray
    },
    loop: true, // Enable looping
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      // Update details when the slide changes
      slideChangeTransitionEnd: function () {
        updateDiscographyDetails(this.realIndex);
      },
      // Initial update after Swiper is initialized
      init: function () {
        updateDiscographyDetails(this.realIndex);
      },
    },
  });
});
