// // mobile nav
// const sideNavBtn = document.querySelectorAll(".side-nav-btn");
// const mobileNav = document.querySelector(".mobile-nav");
// const closeBtn = document.querySelector(".close-btn");
// const stickyDate = document.querySelector(".navbar-sticky-date");
// const searchbtn = document.querySelector(".search-icon");
// const searchPannel = document.querySelector(".mobile-search-pannel");
// const serchCloseBtn = document.querySelector(".ser-close-btn");

// sideNavBtn.forEach((btnEl, i) => {
//   btnEl.addEventListener("click", () => {
//     console.log(btnEl, i);
//     mobileNav.classList.toggle("active");
//   });
// });
// console.log(sideNavBtn);
// closeBtn.addEventListener("click", () => {
//   mobileNav.classList.remove("active");
// });

// searchbtn.addEventListener("click", () => {
//   searchPannel.classList.add("active");
// });

// serchCloseBtn.addEventListener("click", () => {
//   searchPannel.classList.remove("active");
// });

// // sticky nav
// const stickyNav = document.querySelector(".nav-sec");
// window.onscroll = () => {
//   if (this.scrollY > 280) {
//     stickyNav.classList.add("sticky");
//     stickyDate.classList.add("active");
//   } else {
//     stickyNav.classList.remove("sticky");
//     stickyDate.classList.remove("active");
//   }
// };

// // latest news
// const latestBtn = document.querySelectorAll(".latest-icon");
// const latestNews = document.querySelector(".header-latest-news-sec");
// const headerCloseBtn = document.querySelector(".header-close-btn");
// const bodyBg = document.querySelector("body");

// latestBtn.forEach((btnEl, i) => {
//   btnEl.addEventListener("click", () => {
//     console.log(btnEl, i);
//     latestNews.classList.add("active");
//     bodyBg.classList.add("body-bg");
//   });
// });

// headerCloseBtn.addEventListener("click", () => {
//   latestNews.classList.remove("active");
//   bodyBg.classList.remove("body-bg");
// });

// // tranding news
// const trandingtBtn = document.querySelectorAll(".tranding-icon");
// const trandingNews = document.querySelector(".header-tranding-news-sec");
// const trandingCloseBtn = document.querySelector(".tranding-close-btn");

// trandingtBtn.forEach((btnEl, i) => {
//   btnEl.addEventListener("click", () => {
//     console.log(btnEl, i);
//     trandingNews.classList.add("active");
//     bodyBg.classList.add("body-bg");
//   });
// });

// trandingCloseBtn.addEventListener("click", () => {
//   trandingNews.classList.remove("active");
//   bodyBg.classList.remove("body-bg");
// });

// // user
// const userBtn = document.querySelectorAll(".user-icon");
// const loginForm = document.querySelector(".login-form");
// const loginCloseBtn = document.querySelector(".login-form-close-btn");

// userBtn.forEach((btnEl, i) => {
//   btnEl.addEventListener("click", () => {
//     console.log(btnEl, i);
//     loginForm.classList.add("active");
//     bodyBg.classList.add("body-bg");
//   });
// });

// loginCloseBtn.addEventListener("click", () => {
//   loginForm.classList.remove("active");
//   bodyBg.classList.remove("body-bg");
// });
