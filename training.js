export default function TabModule() {
  const tabJS = document.querySelectorAll(".tabJS");
  const appTab = {
    currentTab: 0,
    timeChange: 7000,
    lengthTab: 0,
    initFunction: function () {
      tabJS.forEach((item, index) => {
        const tabBtn = item.querySelectorAll(".tabBtn");
        const tabPanel = item.querySelectorAll(".tabPanel");
        const lineProgress = item.querySelector(".line-progress");
        this.lengthTab = tabPanel.length;
        // Line
        if (lineProgress) {
          let percent = 100 / (tabBtn.length - 1);
          for (let index = 0; index < this.lengthTab - 1; index++) {
            lineProgress.innerHTML += `<span class="line" style="--transition: ${this.timeChange}ms"></span>`;
          }
        }
        // SwiperModule();
        // ShowHideModule();
        ctcElementSlider();
        reasoncSlider();
      });
    },
    changeTab: function () {
      tabJS.forEach((item, index) => {
        const tabBtn = item.querySelectorAll(".tabBtn");
        const tabPanel = item.querySelectorAll(".tabPanel");
        const lineProgress = item.querySelector(".line-progress");
        if (tabBtn) {
          tabBtn.forEach((item) => {
            item.classList.remove("active");
          });
        }
        if (tabPanel) {
          tabPanel.forEach((item) => {
            item.classList.remove("open");
            $(item).slideUp();
          });
        }
        // Change
        tabPanel[this.currentTab].classList.add("open");
        $(tabPanel[this.currentTab]).slideDown();
        tabBtn[this.currentTab].classList.add("active");

        // Line
        if (lineProgress) {
          const line = lineProgress.querySelectorAll(".line");
          line.forEach((item, index) => {
            if (index <= this.currentTab) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        }
        // SwiperModule();
        // ShowHideModule();
        ctcElementSlider();
        reasoncSlider();
      });
    },
    handleEvent: function () {
      var _this = this;
      tabJS.forEach((item, index) => {
        const tabBtn = item.querySelectorAll(".tabBtn");
        const lineProgress = item.querySelector(".line-progress");
        if (tabBtn) {
          tabBtn.forEach((item, index) => {
            item.addEventListener("click", () => {
              _this.currentTab = index;
              _this.changeTab();
              clearInterval(myInterVal);
              if (lineProgress) {
                lineProgress.classList.add("line-none");
              }
            });
          });
        }
      });
      if (window.innerWidth > 1200) {
        var myInterVal = setInterval(() => {
          if (_this.currentTab < _this.lengthTab - 1) {
            _this.currentTab++;
          } else {
            _this.currentTab = 0;
          }
          if (this.currentTab == _this.lengthTab - 1) {
            setTimeout(() => {
              $(".line-progress .line.active").removeClass("active");
            }, _this.timeChange - 50);
          }
          _this.changeTab();
        }, _this.timeChange);
      }
      window.addEventListener("scroll", (e) => {
        tabJS.forEach((item) => {
          if (window.scrollY > item.offsetTop) {
            if (window.scrollY > item.offsetTop + window.innerHeight / 2) {
              if (item.querySelector(".line-progress")) {
                item.querySelector(".line-progress").classList.add("line-none");
              }
              clearInterval(myInterVal);
            }
          }
        });
      });
    },
    start: function () {
      this.initFunction();
      this.changeTab();
      this.handleEvent();
    },
  };
  appTab.start();
}
