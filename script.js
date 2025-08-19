// Xử lý đổi section khi scroll
const handleScroll = () => {
  const scrollPosition = window.scrollY;

  const section1 = document.querySelector(".section1");
  const section2 = document.querySelector(".section2");
  const section3 = document.querySelector(".section3");
  const section4 = document.querySelector(".section4");

  if (scrollPosition === 0) {
    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
  } else if (scrollPosition > 700 && scrollPosition < 1500) {
    section2.style.display = "block";
    section1.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
  } else if (scrollPosition >= 1500 && scrollPosition < 2300) {
    section3.style.display = "block";
    section1.style.display = "none";
    section2.style.display = "none";
    section4.style.display = "none";
  } else if (scrollPosition >= 2300) {
    section4.style.display = "block";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
  }
};

window.addEventListener("scroll", handleScroll);

// Xử lý màn hình start
const startScreen = document.getElementById("start-screen");
const music = document.getElementById("bgMusic");

if (startScreen) {
  startScreen.addEventListener("click", function () {
    // Bắt đầu phát nhạc
    music.currentTime = 0;
    music.volume = 0.5;
    music.play();

    // Ẩn màn hình chờ
    startScreen.style.display = "none";

    // Loop nhạc
    music.addEventListener("ended", function () {
      music.currentTime = 0;
      music.play();
    });
  });
}
