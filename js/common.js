document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector(".intro");
  const scrollTopBtn = document.querySelector(".scroll-top-btn");
  const percentText = scrollTopBtn.querySelector(".percent-text");
  let isIntroPlaying = true; // 인트로 재생 상태 플래그

  // 스크롤 비활성화 함수
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.body.style.width = "100%";

    // 탑 버튼 숨기기
    if (scrollTopBtn) {
      scrollTopBtn.style.opacity = "0";
      scrollTopBtn.style.visibility = "hidden";
    }
  }

  // 스크롤 활성화 함수
  function enableScroll() {
    document.body.style.overflowY = "auto";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.width = "";
    isIntroPlaying = false; // 인트로 재생 완료 표시
  }

  // 스크롤 퍼센트 업데이트 함수
  function updateScrollPercent() {
    if (isIntroPlaying) return; // 인트로 중에는 업데이트 하지 않음

    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercent = Math.round((scrollPosition / windowHeight) * 100);

    if (percentText) {
      percentText.textContent = `${scrollPercent}%`;
    }
  }

  // 초기 스크롤 비활성화
  disableScroll();

  // 인트로 애니메이션 종료 감지
  intro.addEventListener("animationend", (event) => {
    if (event.animationName === "introFadeOut") {
      enableScroll();
      updateScrollPercent(); // 스크롤 퍼센트 초기화
    }
  });

  // 스크롤 이벤트 리스너
  window.addEventListener("scroll", () => {
    if (isIntroPlaying) return; // 인트로 중에는 스크롤 이벤트 무시

    updateScrollPercent();

    // 스크롤 위치에 따른 버튼 표시/숨김
    if (window.scrollY > 200) {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.visibility = "visible";
    } else {
      scrollTopBtn.style.opacity = "0";
      scrollTopBtn.style.visibility = "hidden";
    }
  });

  // 탑 버튼 클릭 이벤트
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      if (isIntroPlaying) return; // 인트로 중에는 클릭 무시

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Lenis 및 GSAP 관련 코드는 그대로 유지
document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);

  const horizontal = document.querySelector("#horizontal");
  const sections = gsap.utils.toArray("#horizontal > section");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: horizontal,
      start: "top top",
      end: () => "+=" + horizontal.scrollWidth,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      markers: false,
      invalidateOnRefresh: true,
      snap: {
        snapTo: 1 / (sections.length - 1),
        inertia: true,
        duration: { min: 0.2, max: 0.5 },
        ease: "power1.inOut",
      },
    },
  });

  gsap.to(".sec1 .img", {
    scale: 3,
    filter: "blur(10px)",
    y: -200,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".sec2",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });

  gsap.utils
    .toArray([".sec1 .line-txt", ".sec1 h2", ".sec1 .tb-wrap"])
    .forEach((element) => {
      gsap.to(element, {
        scale: 0.5,
        y: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".sec2",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      });
    });
});
