"use strict";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, Flip, SplitText, DrawSVGPlugin, ScrollSmoother);
  var body = document.querySelector("body");

  /**
   * Initialize ScrollSmoother
   */
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
    normalizeScroll: true,
    smoothTouch: 0.1
  });

  /**
   * Slide Up
   */
  var slideUp = function slideUp(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    if (!target) return;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  /**
   * Slide Down
   */
  var slideDown = function slideDown(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    if (!target) return;
    target.style.removeProperty("display");
    var display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    var height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  /**
   * Slide Toggle
   */
  var slideToggle = function slideToggle(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    if (!target) return;
    if (target.style === undefined || target.style.display === "none") {
      return slideDown(target, duration);
    }
    return slideUp(target, duration);
  };

  /**
   * Header Crossed
   */
  var scrollTimeout;
  window.addEventListener("scroll", function () {
    if (!body) return;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      var primaryHeader = document.querySelector(".primary-header");
      if (primaryHeader) {
        var primaryHeaderTop = primaryHeader.offsetHeight / 3;
        var scrolled = window.scrollY;
        if (scrolled > primaryHeaderTop) {
          body.classList.add("primary-header-crossed");
        } else {
          body.classList.remove("primary-header-crossed");
        }
      }
    }, 100);
  });

  /**
   * Primary Menu
   */
  var mdScreen = "(max-width: 991px)";
  var primaryHeader = document.querySelector(".primary-header");
  if (primaryHeader) {
    primaryHeader.addEventListener("click", function (e) {
      var target = e.target.closest(".has-sub-menu > a, .has-sub-2nd > a");
      if (!target) return;
      var isMobile = window.matchMedia(mdScreen).matches;
      if (isMobile) {
        e.preventDefault();
        e.stopPropagation();
        target.classList.toggle("active");
        var menuSub = target.nextElementSibling;
        if (menuSub) {
          slideToggle(menuSub, 500);
        }
      } else {
        if (!target.getAttribute("href") || target.getAttribute("href") === "#") {
          e.preventDefault();
        }
      }
    });
    window.matchMedia(mdScreen).addEventListener("change", function (e) {
      var subMenus = primaryHeader.querySelectorAll(".navigation-0__menu, .navigation-1__menu, .navigation-1__sub-menu");
      if (!subMenus.length) return;
      for (var i = 0; i < subMenus.length; i++) {
        var menu = subMenus[i];
        if (menu.style.display !== "none") {
          slideUp(menu, 0);
          var parentLink = menu.previousElementSibling;
          if (parentLink) {
            parentLink.classList.remove("active");
          }
        }
      }
    });
  }

  /**
   * Theme Settings (Dark / Light)
   */
  var themeDropdown = document.querySelector(".theme-settings");
  var themeDropdownIcon = document.getElementById("themeDropdownIcon");
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    updateThemeIcon("dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
    updateThemeIcon("light");
  }
  if (themeDropdown) {
    themeDropdown.addEventListener("click", function (e) {
      var target = e.target.closest("#lightTheme, #darkTheme");
      if (!target) return;
      var theme = target.id === "lightTheme" ? "light" : "dark";
      document.documentElement.setAttribute("data-bs-theme", theme);
      localStorage.setItem("theme", theme);
      updateThemeIcon(theme);
    });
  }
  function updateThemeIcon(theme) {
    if (!themeDropdownIcon) return;
    themeDropdownIcon.setAttribute("icon", theme === "light" ? "bi:sun" : "bi:moon-stars");
  }

  /**
   * Iterate through each tab group
   */
  document.addEventListener("click", function (e) {
    var button = e.target.closest(".tab-group .tab__links");
    if (!button) return;
    var group = button.closest(".tab-group");
    if (!group) return;
    var tabButtons = group.querySelectorAll(".tab__links");
    var tabContents = group.querySelectorAll(".tab__content");
    var index = Array.prototype.indexOf.call(tabButtons, button);
    tabButtons.forEach(function (btn) {
      return btn.classList.remove("active");
    });
    tabContents.forEach(function (content) {
      return content.classList.remove("active");
    });
    button.classList.add("active");
    if (tabContents[index]) {
      tabContents[index].classList.add("active");
    }
  });

  // Initialize first tab in each group
  document.querySelectorAll(".tab-group").forEach(function (group) {
    var firstTab = group.querySelector(".tab__links");
    if (firstTab) firstTab.click();
  });

  /**
   * Code Snippets Expand
   */
  document.addEventListener("click", function (e) {
    var button = e.target.closest(".code-snippet-expand");
    if (!button) return;
    var codeExpandNav = button.closest(".tab__header");
    var codeSnippetsBody = codeExpandNav.nextElementSibling;
    if (codeSnippetsBody) {
      codeSnippetsBody.classList.toggle("code-snippet--expanded");
    }
  });

  /**
   * Tooltip Init
   */
  var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerList.length) {
    var tooltipList = [];
    for (var i = 0; i < tooltipTriggerList.length; i++) {
      tooltipList.push(new bootstrap.Tooltip(tooltipTriggerList[i]));
    }
  }

  /**
   * Dropdown Activate
   */
  var dropdownElementList = document.querySelectorAll('[data-bs-toggle="dropdown"]');
  if (dropdownElementList.length) {
    var dropdownList = [];
    for (var _i = 0; _i < dropdownElementList.length; _i++) {
      dropdownList.push(new bootstrap.Dropdown(dropdownElementList[_i]));
    }
  }

  /**
   * Testimonial Slider 1
   */
  var testimonialSliderOne = document.querySelector(".testimonial-slider-1");
  if (testimonialSliderOne) {
    new Swiper(testimonialSliderOne, {
      loop: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        },
        1920: {
          slidesPerView: 5
        }
      }
    });
  }

  /**
   * Testimonial Slider 2
   */
  var testimonialSliderTwo = document.querySelector(".testimonial-slider-2");
  if (testimonialSliderTwo) {
    new Swiper(testimonialSliderTwo, {
      loop: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: true
      },
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        },
        1920: {
          slidesPerView: 5
        }
      }
    });
  }

  /**
   * Testimonial Slider 3
   */
  var testimonialSliderThree = document.querySelector(".testimonial-slider-3__is");
  if (testimonialSliderThree) {
    new Swiper(testimonialSliderThree, {
      loop: true,
      autoplay: {
        delay: 3000
      },
      slidesPerView: 1,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      }
    });
  }

  /**
   * Testimonial Slider 4
   */
  var testimonialSliderFour = document.querySelector(".testimonial-slider-4");
  var testimonialSliderFourThumb = document.querySelector(".testimonial-slider-4__thumb");
  if (testimonialSliderFourThumb && testimonialSliderFour) {
    var testimonialSliderFourThumbIs = new Swiper(testimonialSliderFourThumb, {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      centerInsufficientSlides: true,
      breakpoints: {
        576: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        }
      }
    });
    var testimonialSliderFourIs = new Swiper(testimonialSliderFour, {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: testimonialSliderFourThumbIs
      }
    });
  }

  /**
   * Team Member 2 Slider
   */
  var teamMemberTwoSlider = document.querySelector(".team-member-2-slider");
  if (teamMemberTwoSlider) {
    new Swiper(teamMemberTwoSlider, {
      loop: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      speed: 1000,
      spaceBetween: 16,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        },
        1920: {
          slidesPerView: 5
        }
      }
    });
  }

  /**
   * Duplicate Scroller-X Item
   */
  var scrollerX = document.querySelectorAll(".scroller-x");
  function scrollerXDuplication(scroller) {
    if (scroller.dataset.duplicated === "true") return;
    var scrollerInner = scroller.querySelector(".scroller-x__list");
    if (!scrollerInner) return;
    var scrollerContent = Array.from(scrollerInner.children);
    if (!scrollerContent.length) return;
    var fragment = document.createDocumentFragment();
    scrollerContent.forEach(function (item) {
      var duplicateItem = item.cloneNode(true);
      fragment.appendChild(duplicateItem);
    });
    scrollerInner.appendChild(fragment);
    scroller.dataset.duplicated = "true";
  }
  scrollerX.forEach(function (scroller) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          scrollerXDuplication(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0
    });
    observer.observe(scroller);
  });

  /**
   * Duplicate Scroller-Y Item
   */
  var scrollerY = document.querySelectorAll(".scroller-y");
  function scrollerYDuplication(scroller) {
    if (scroller.dataset.duplicated === "true") return;
    var scrollerInner = scroller.querySelector(".scroller-y__list");
    if (!scrollerInner) return;
    var scrollerContent = Array.from(scrollerInner.children);
    if (!scrollerContent.length) return;
    var fragment = document.createDocumentFragment();
    scrollerContent.forEach(function (item) {
      var duplicateItem = item.cloneNode(true);
      fragment.appendChild(duplicateItem);
    });
    scrollerInner.appendChild(fragment);
    scroller.dataset.duplicated = "true";
  }
  scrollerY.forEach(function (scroller) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          scrollerYDuplication(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0
    });
    observer.observe(scroller);
  });

  /**
   * Case Study Slider
   */
  var caseStudySlider = document.querySelector(".case-study-slider");
  if (caseStudySlider) {
    new Swiper(caseStudySlider, {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".case-study-slider__next",
        prevEl: ".case-study-slider__prev"
      },
      breakpoints: {
        1200: {
          slidesPerView: 2
        }
      }
    });
  }

  /**
   * Orbit Animation
   */
  function createOrbitAnimation(orbitContainer) {
    var planetCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "50%";
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30000;
    if (!orbitContainer || !orbitContainer.querySelector(".orbit__planet")) return;
    var orbit = orbitContainer;
    var radiusInPixels;
    var calculateRadius = function calculateRadius() {
      if (typeof radius === "string" && radius.includes("%")) {
        var percentage = parseFloat(radius) / 100;
        radiusInPixels = orbit.offsetWidth * percentage;
      } else {
        radiusInPixels = parseFloat(radius);
      }
    };
    calculateRadius();
    orbit.innerHTML = "";
    for (var _i2 = 0; _i2 < planetCount; _i2++) {
      var planet = document.createElement("span");
      planet.classList.add("orbit__planet");
      orbit.appendChild(planet);
    }
    var updatePlanetPositions = function updatePlanetPositions(progress) {
      var children = orbit.children;
      for (var _i3 = 0; _i3 < children.length; _i3++) {
        var _planet = children[_i3];
        var angle = _i3 * 360 / planetCount + progress * 360;
        var x = radiusInPixels * Math.cos(angle * Math.PI / 180);
        var y = radiusInPixels * Math.sin(angle * Math.PI / 180);
        _planet.style.transform = "translate(".concat(x, "px, ").concat(y, "px) translate(-50%, -50%)");
      }
    };
    var tl = gsap.timeline({
      repeat: -1
    });
    tl.to(orbit, {
      rotation: 360,
      duration: duration / 1000,
      ease: "linear",
      onUpdate: function onUpdate() {
        updatePlanetPositions(this.progress());
      }
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.pause();
        }
      });
    }, {
      threshold: 0
    });
    observer.observe(orbit);
    return {
      calculateRadius: calculateRadius,
      updatePlanetPositions: updatePlanetPositions
    };
  }
  var orbits = document.querySelectorAll(".orbit");
  var orbitAnimations = [];
  for (var _i4 = 0; _i4 < orbits.length; _i4++) {
    orbitAnimations.push(createOrbitAnimation(orbits[_i4], 6, "50%", 30000));
  }
  window.addEventListener("resize", function () {
    for (var _i5 = 0; _i5 < orbitAnimations.length; _i5++) {
      var animation = orbitAnimations[_i5];
      if (animation) {
        animation.calculateRadius();
        animation.updatePlanetPositions(0);
      }
    }
  });

  /**
   * Preloader
   */
  var preloader = document.querySelector(".preloader");

  // Sync with the page loading process
  window.addEventListener("load", function () {
    if (preloader) {
      setTimeout(function () {
        preloader.style.display = "none";
      }, 300);
    }
  });

  /**
   * Animation
   */
  var mm = gsap.matchMedia();
  mm.add("(min-width: 1200px)", function () {
    function hero2() {
      var gsapFadeIn = gsap.utils.toArray(".gsap-fadeIn");
      var gsapReveal = gsap.utils.toArray(".gsap-reveal");
      var hero2Images = gsap.utils.toArray(".hero-2__images");
      var hero2Line1 = document.querySelector(".hero-2__line-1");
      var hero2Line2 = document.querySelector(".hero-2__line-2");
      var hero2Line3 = document.querySelector(".hero-2__line-3");
      var hero2Line4 = document.querySelector(".hero-2__line-4");
      if (!hero2Images || !hero2Line1 || !hero2Line2 || !hero2Line3 || !hero2Line4) return;
      var tl = gsap.timeline();
      for (var _i6 = 0; _i6 < gsapFadeIn.length; _i6++) {
        tl.from(gsapFadeIn[_i6], {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.5
        });
      }
      for (var _i7 = 0; _i7 < gsapReveal.length; _i7++) {
        tl.from(gsapReveal[_i7], {
          opacity: 0,
          duration: 1,
          stagger: 0.5
        });
      }
      for (var _i8 = 0; _i8 < hero2Images.length; _i8++) {
        var item = hero2Images[_i8];
        var hero2FlipState = Flip.getState(item);
        var hero2FlipAnimation = Flip.to(hero2FlipState, {
          duration: 2,
          opacity: 0,
          ease: "power2.out",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          scale: true
        });
        tl.add(hero2FlipAnimation, "group");
      }
      tl.from(hero2Line1, {
        opacity: 0,
        duration: 0.25,
        stagger: 0.25
      }, "initLineTop").from(hero2Line2, {
        opacity: 0,
        duration: 0.25,
        stagger: 0.25
      }, "initLineBottom").from(hero2Line3, {
        opacity: 0,
        duration: 0.25,
        stagger: 0.25
      }, "initLineTop").from(hero2Line4, {
        opacity: 0,
        duration: 0.25,
        stagger: 0.25
      });
    }
    function hero3() {
      var hero3 = document.querySelector(".hero-3");
      var hero3Alert = document.querySelector(".hero-3__alert");
      var hero3Title = gsap.utils.toArray(".hero-3__title");
      var hero3Description = gsap.utils.toArray(".hero-3__description");
      var hero3Btns = gsap.utils.toArray(".hero-3__btns");
      var hero3ImgOne = document.querySelector(".hero-3__img-1");
      var hero3ImgTwo = document.querySelector(".hero-3__img-2");
      var hero3ElementOne = document.querySelector(".hero-3__element-1");
      var hero3ElementTwo = document.querySelector(".hero-3__element-2");
      var hero3ElementThree = document.querySelector(".hero-3__element-3");
      var hero3ElementFour = document.querySelector(".hero-3__element-4");
      var hero3ElementFive = document.querySelector(".hero-3__element-5");
      var hero3ElementSix = document.querySelector(".hero-3__element-6");
      var hero3ElementSeven = document.querySelector(".hero-3__element-7");
      if (!hero3 || !hero3Alert || !hero3Title.length || !hero3Description.length || !hero3Btns.length || !hero3ImgOne || !hero3ImgTwo || !hero3ElementOne || !hero3ElementTwo || !hero3ElementThree || !hero3ElementFour || !hero3ElementFive || !hero3ElementSix || !hero3ElementSeven) return;
      var tl = gsap.timeline();
      tl.from(hero3Alert, {
        opacity: 0,
        y: 24,
        duration: 1,
        delay: 1
      });
      var _loop = function _loop() {
        var item = hero3Title[_i9];
        var hero3TitleSplit = new SplitText(item, {
          type: "words"
        });
        tl.from(hero3TitleSplit.words, {
          opacity: 0,
          yPercent: 50,
          duration: 1,
          stagger: 0.05,
          ease: "back.out",
          onComplete: function onComplete() {
            hero3TitleSplit.revert();
          }
        });
      };
      for (var _i9 = 0; _i9 < hero3Title.length; _i9++) {
        _loop();
      }
      var _loop2 = function _loop2() {
        var item = hero3Description[_i10];
        var hero3DescriptionSplit = new SplitText(item, {
          type: "words"
        });
        tl.from(hero3DescriptionSplit.words, {
          opacity: 0,
          yPercent: 50,
          duration: 1,
          stagger: 0.05,
          ease: "back.out",
          onComplete: function onComplete() {
            hero3DescriptionSplit.revert();
          }
        }, "-=0.25");
      };
      for (var _i10 = 0; _i10 < hero3Description.length; _i10++) {
        _loop2();
      }
      for (var _i11 = 0; _i11 < hero3Btns.length; _i11++) {
        tl.from(hero3Btns[_i11], {
          opacity: 0,
          yPercent: 25,
          stagger: 0.05
        }, "-=0.25");
      }
      tl.from(hero3ImgOne, {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        ease: "back.out"
      }, "-=0.25").from(hero3ImgTwo, {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        ease: "back.out"
      }, "-=0.25").from(hero3ElementOne, {
        opacity: 0,
        duration: 1,
        ease: "back.out"
      }, "-=0.5").from(hero3ElementTwo, {
        opacity: 0,
        duration: 1,
        ease: "back.out"
      }, "-=0.5").from(hero3ElementThree, {
        opacity: 0,
        duration: 1,
        ease: "back.out"
      }, "-=0.5").from(hero3ElementFour, {
        opacity: 0,
        duration: 1,
        ease: "back.out"
      }, "-=0.5").from(hero3ElementFive, {
        opacity: 0,
        duration: 1,
        ease: "back.out"
      }, "circleRing").from(hero3ElementSix, {
        opacity: 0,
        duration: 1,
        ease: "back.out"
      }, "circleRing").from(hero3ElementSeven, {
        opacity: 0,
        duration: 1,
        ease: "back.out"
      }, "-=0.5");
    }
    function pathAnimationOn() {
      var paths = gsap.utils.toArray(".path-2");
      if (!paths.length) return;
      for (var _i12 = 0; _i12 < paths.length; _i12++) {
        var path = paths[_i12];
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: path,
            start: "clamp(top 90%)",
            end: "clamp(bottom 25%)",
            once: true
          }
        });
        tl.from(path, {
          drawSVG: 0,
          duration: 2
        });
      }
    }
    function pathAnimationTwo() {
      var paths = gsap.utils.toArray(".path-1");
      if (!paths.length) return;
      for (var _i13 = 0; _i13 < paths.length; _i13++) {
        var path = paths[_i13];
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: path,
            start: "clamp(top 90%)",
            end: "clamp(bottom 25%)",
            once: true
          }
        });
        tl.from(path, {
          drawSVG: "100% 100%",
          duration: 2
        });
      }
    }
    function textAnimation() {
      var items = gsap.utils.toArray(".gsap-text-animation");
      if (!items.length) return;
      var _loop3 = function _loop3() {
          var item = items[_i14];
          var scrollTriggerSupport = item.dataset.scrollTrigger;
          var animationStart = item.dataset.start || "90%";
          var animationEnd = item.dataset.end || "25%";
          var animationStagger = item.dataset.stagger || "0.05";
          var animationDuration = item.dataset.duration || "1";
          var animationDelay = item.dataset.delay || "0";
          var animationY = item.dataset.y || "50";
          var animationOpacity = item.dataset.opacity || "0";
          var splitType = item.dataset.splitType || "chars";
          var scrollMarker = item.dataset.marker || false;
          var textSplit = new SplitText(item, {
            type: splitType
          });
          var itemsToAnimate;
          if (splitType === "chars") {
            itemsToAnimate = textSplit.chars;
          } else if (splitType === "words") {
            itemsToAnimate = textSplit.words;
          } else if (splitType === "lines") {
            itemsToAnimate = textSplit.lines;
          } else {
            console.error("Invalid split type:", splitType);
            return 0; // continue
          }
          if (!itemsToAnimate.length) {
            textSplit.revert();
            return 0; // continue
          }
          var tl = scrollTriggerSupport ? gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "clamp(top ".concat(animationStart, ")"),
              end: "clamp(bottom ".concat(animationEnd, ")"),
              markers: scrollMarker,
              once: true
            }
          }) : gsap.timeline();
          tl.from(itemsToAnimate, {
            opacity: parseFloat(animationOpacity),
            delay: parseFloat(animationDelay),
            yPercent: parseFloat(animationY),
            duration: parseFloat(animationDuration),
            stagger: parseFloat(animationStagger),
            ease: "back.out",
            onComplete: function onComplete() {
              textSplit.revert();
            }
          });
        },
        _ret;
      for (var _i14 = 0; _i14 < items.length; _i14++) {
        _ret = _loop3();
        if (_ret === 0) continue;
      }
    }
    function imageRevealAnimation() {
      var imageContainers = gsap.utils.toArray(".gsap-image-reveal");
      if (!imageContainers.length) return;
      for (var _i15 = 0; _i15 < imageContainers.length; _i15++) {
        var image = imageContainers[_i15];
        var revealImage = image.querySelector("img");
        if (!revealImage) continue;
        var scrollTriggerSupport = image.dataset.scrollTrigger;
        var animationStart = image.dataset.start || "90%";
        var animationEnd = image.dataset.end || "25%";
        var scrollMarker = image.dataset.marker || false;
        var tl = scrollTriggerSupport ? gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "clamp(top ".concat(animationStart, ")"),
            end: "clamp(bottom ".concat(animationEnd, ")"),
            markers: scrollMarker,
            once: true
          }
        }) : gsap.timeline();
        tl.set(image, {
          autoAlpha: 1
        });
        tl.from(image, {
          xPercent: -100,
          duration: 1.5,
          ease: "power2.out"
        });
        tl.from(revealImage, {
          xPercent: 100,
          ease: "power2.out",
          scale: 1.5,
          duration: 1.5,
          delay: -1.5
        });
      }
    }
    function fadeInAnimation() {
      var fadeIn = gsap.utils.toArray(".gsap-fade-in");
      if (!fadeIn.length) return;
      for (var _i16 = 0; _i16 < fadeIn.length; _i16++) {
        var item = fadeIn[_i16];
        var scrollTriggerSupport = item.dataset.scrollTrigger;
        var animationStart = item.dataset.start || "90%";
        var animationEnd = item.dataset.end || "25%";
        var animationStagger = item.dataset.stagger || "0";
        var animationDuration = item.dataset.duration || "1";
        var animationDelay = item.dataset.delay || "0";
        var animationY = item.dataset.y || "0";
        var animationX = item.dataset.x || "0";
        var animationOpacity = item.dataset.opacity || "0";
        var scrollMarker = item.dataset.marker || false;
        var tl = scrollTriggerSupport ? gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "clamp(top ".concat(animationStart, ")"),
            end: "clamp(bottom ".concat(animationEnd, ")"),
            markers: scrollMarker,
            once: true
          }
        }) : gsap.timeline();
        tl.from(item, {
          opacity: parseFloat(animationOpacity),
          yPercent: parseFloat(animationY),
          xPercent: parseFloat(animationX),
          delay: parseFloat(animationDelay),
          stagger: parseFloat(animationStagger),
          duration: parseFloat(animationDuration),
          ease: "back.out"
        });
      }
    }
    function zoomAnimation() {
      var zoomAnimation = gsap.utils.toArray(".gsap-zoom");
      if (!zoomAnimation.length) return;
      for (var _i17 = 0; _i17 < zoomAnimation.length; _i17++) {
        var item = zoomAnimation[_i17];
        var scrollTriggerSupport = item.dataset.scrollTrigger;
        var animationStart = item.dataset.start || "90%";
        var animationEnd = item.dataset.end || "25%";
        var animationOpacity = item.dataset.opacity || "1";
        var animationScale = item.dataset.scale || "1";
        var animationScrub = item.dataset.scrub || false;
        var tl = scrollTriggerSupport ? gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "clamp(top ".concat(animationStart, ")"),
            end: "clamp(bottom ".concat(animationEnd, ")"),
            scrub: parseFloat(animationScrub),
            once: true
          }
        }) : gsap.timeline();
        tl.from(item, {
          opacity: parseFloat(animationOpacity),
          scale: parseFloat(animationScale)
        });
      }
    }
    function imgFlip() {
      var imgFlip = gsap.utils.toArray(".gsap-img-flip");
      if (!imgFlip.length) return;
      for (var _i18 = 0; _i18 < imgFlip.length; _i18++) {
        var item = imgFlip[_i18];
        var imgFlipState = Flip.getState(item);
        var scrollTriggerSupport = item.dataset.scrollTrigger;
        var animationStart = item.dataset.start || "90%";
        var animationEnd = item.dataset.end || "25%";
        var animationScrub = item.dataset.scrub || false;
        var flipAnimation = Flip.to(imgFlipState, {
          duration: 2,
          opacity: 0,
          ease: "power2.out",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          scale: true
        });
        var tl = scrollTriggerSupport ? gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "clamp(top ".concat(animationStart, ")"),
            end: "clamp(bottom ".concat(animationEnd, ")"),
            scrub: parseFloat(animationScrub),
            once: true
          }
        }) : gsap.timeline();
        tl.add(flipAnimation, "group");
      }
    }
    pathAnimationOn();
    pathAnimationTwo();
    imageRevealAnimation();
    fadeInAnimation();
    zoomAnimation();
    imgFlip();
    document.fonts.ready.then(function () {
      hero2();
      hero3();
      textAnimation();
    })["catch"](function (error) {
      console.error("Font loading failed:", error);
      hero2();
      hero3();
      textAnimation();
    });
  });
});