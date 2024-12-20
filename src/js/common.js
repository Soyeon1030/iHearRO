document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector(".intro");
  const scrollTopBtn = document.querySelector(".scroll-top-btn");
  const percentText = scrollTopBtn.querySelector(".percent-text");
  let isIntroPlaying = true; // 인트로 재생 상태 플래그

  setTimeout(() => {
    document.querySelector("header .logo").classList.add("active");
  }, 10000);

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

// AOS 
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1500, // 애니메이션 지속 시간
    offset: 100,
    disable: function() {
      return window.innerWidth < 768; // 모바일에서 비활성화하려면
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  // sec 1
  gsap.to(".sec1 .text-img", {
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
    .toArray([".sec1 h2", ".sec1 h3", ".sec1 .tb-wrap", ".sec .device"])
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

  // sec 2 ~ 12
  const sections = gsap.utils.toArray(".sec2, .sec3, .sec4, .sec5, .sec6, .sec7, .sec8, .sec9, .sec10, .sec11, .sec12");

  sections.forEach((section, i) => {
    // 전체 타임라인 생성
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom", 
        end: "bottom top", 
        scrub: 2, 
        markers: false,
      }
    });

    tl.fromTo(section, 
      {
        scale: 0.9,
      },
      {
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }
    ).to(section, {
      scale: 0.9, 
      duration: 1,
      ease: "power2.inOut"
    });
  });
  
  // 성능 최적화
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 40
  });
  
  // 추가: 스크롤 속도에 따른 부드러운 처리
  let velocity = 0;
  let lastScrollTop = 0;
  
  ScrollTrigger.addEventListener("refreshInit", () => {
    velocity = 0;
    lastScrollTop = window.pageYOffset;
  });
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    velocity = Math.abs(currentScroll - lastScrollTop);
    lastScrollTop = currentScroll;
  });

  // sec 3
  gsap.to(".floating-img", {
    keyframes: [
      { x: -10, rotation: -2 },
      { x: 10, rotation: 2 },
      { x: -7, rotation: -1 },
      { x: 7, rotation: 1 },
      { x: 0, rotation: 0 },
    ],
    duration: 1,
    repeat: 5,
    scrollTrigger: {
      trigger: ".sec3",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reset",
    },
  });

  // sec 4
  const sleepTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4",
      start: "top center",
      toggleActions: "play none none reset",
    },
    repeat: -1,
  });

  sleepTimeline
    .set(".zzz-svg path", { opacity: 0 })
    .to(".zzz-svg path:nth-child(3)", {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut",
    })
    .to(
      ".zzz-svg path:nth-child(2)",
      {
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
      },
      "-=0.1"
    )
    .to(
      ".zzz-svg path:nth-child(1)",
      {
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
      },
      "-=0.1"
    )
    .to({}, { duration: 0.8 })

    .to(".zzz-svg path", {
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
    })
    .to({}, { duration: 0.5 });

  const depressionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec4",
      start: "top center",
      toggleActions: "play none none reset",
    },
    repeat: -1,
  });
  depressionTimeline
    .set(".line-svg path", {
      scaleY: 0.3,
      transformOrigin: "top center",
    })
    .to(".line-svg path:nth-child(2)", {
      scaleY: 1,
      duration: 1.2,
      ease: "power2.out",
    })
    .to(
      ".line-svg path:nth-child(1)",
      {
        scaleY: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8"
    )
    .to(
      ".line-svg path:nth-child(3)",
      {
        scaleY: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.8"
    )
    .to({}, { duration: 1 })
    .to(".line-svg path", {
      scaleY: 0.3,
      duration: 1.5,
      ease: "power2.inOut",
      stagger: {
        each: 0.2,
        from: "edges",
      },
    })
    .to({}, { duration: 0.8 });

  // bg
  const pathbg = document.querySelector('.pathbg');
  const pathbgLength = pathbg.getTotalLength();
  
  // 대시선의 길이와 간격 설정
  const dashLength = 10;
  const dashGap = 10;
  const totalDashes = Math.ceil(pathbgLength / (dashLength + dashGap));
  
  for(let i = 0; i < totalDashes; i++) {
      const dash = pathbg.cloneNode();
      const startLength = i * (dashLength + dashGap);
      
      const dashStart = startLength;
      const dashEnd = startLength + dashLength;
      
      gsap.set(dash, {
          strokeDasharray: `${dashLength} ${pathbgLength}`,
          strokeDashoffset: -dashStart,
          opacity: 0
      });
      
      pathbg.parentNode.appendChild(dash);
      
      // 각 대시선에 대한 개별 애니메이션
      gsap.to(dash, {
          opacity: 1,
          scrollTrigger: {
              trigger: '.dash-container',
              start: "top center",
              end: "bottom 80%",
              scrub: true,
              markers: false,
              onUpdate: (self) => {
                  // 진행도에 따라 각 대시선이 순차적으로 나타남
                  if(self.progress > (i / totalDashes)) {
                      dash.style.opacity = 1;
                  } else {
                      dash.style.opacity = 0;
                  }
              }
          }
      });
  }
  // 원본 path는 숨김
  pathbg.style.opacity = 0;
});
