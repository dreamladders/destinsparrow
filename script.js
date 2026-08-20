/* =====================================================
   DESTIN SPARROW WEBSITE CONFIGURATION
===================================================== */

const SITE_CONFIG = {

  /*
    Add your YouTube VIDEO IDs here.

    Example:

    youtubeVideos: [
      "dQw4w9WgXcQ",
      "YOUR_SECOND_VIDEO_ID"
    ]
  */

  youtubeVideos: [
    "",
    ""
  ],


  /*
    Add your social profile URLs.
  */

  socialLinks: {

    instagram: "#",

    youtube: "#",

    spotify: "#"

  }

};


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
  document.getElementById("menuButton");

const navigation =
  document.querySelector(".main-nav");


if (menuButton) {

  menuButton.addEventListener(
    "click",
    () => {

      navigation.classList.toggle("open");

    }
  );

}


document
  .querySelectorAll(".main-nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navigation.classList.remove("open");

      }
    );

  });


/* =====================================================
   YOUTUBE VIDEOS
===================================================== */

const videoContainers =
  document.querySelectorAll(
    ".video-container"
  );


videoContainers.forEach(
  (container, index) => {

    const videoID =
      SITE_CONFIG.youtubeVideos[index];

    if (!videoID) {

      return;

    }


    container.innerHTML = `

      <iframe

        src="https://www.youtube.com/embed/${encodeURIComponent(videoID)}"

        title="Destin Sparrow video"

        loading="lazy"

        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share
        "

        allowfullscreen>

      </iframe>

    `;

  }
);


/* =====================================================
   SOCIAL LINKS
===================================================== */

document
  .querySelectorAll(".social-links a")
  .forEach(link => {

    const platform =
      link.textContent
        .trim()
        .toLowerCase();


    const url =
      SITE_CONFIG.socialLinks[platform];


    if (
      url &&
      url !== "#"
    ) {

      link.href = url;

      link.target = "_blank";

      link.rel =
        "noopener noreferrer";

    }

  });


/* =====================================================
   MUSIC PLAYER
===================================================== */

const audio =
  document.getElementById(
    "audioPlayer"
  );

const playButton =
  document.getElementById(
    "playButton"
  );

const trackTime =
  document.getElementById(
    "trackTime"
  );


if (audio && playButton) {

  playButton.addEventListener(
    "click",
    async () => {

      try {

        if (audio.paused) {

          await audio.play();

        } else {

          audio.pause();

        }

      } catch (error) {

        console.log(
          "Add your MP3 file at assets/audio/latest-release.mp3"
        );

      }

    }
  );


  audio.addEventListener(
    "play",
    () => {

      playButton.textContent =
        "Ⅱ";

    }
  );


  audio.addEventListener(
    "pause",
    () => {

      playButton.textContent =
        "▶";

    }
  );


  audio.addEventListener(
    "timeupdate",
    () => {

      const seconds =
        Math.floor(
          audio.currentTime
        );


      const minutes =
        Math.floor(
          seconds / 60
        );


      const remainingSeconds =
        seconds % 60;


      trackTime.textContent =

        String(minutes)
          .padStart(2, "0")

        +

        ":" +

        String(
          remainingSeconds
        ).padStart(2, "0");

    }
  );

}
