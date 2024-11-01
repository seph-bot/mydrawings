new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "images/first1.jpg",
            img2: "images/first2.jpg",
            img3: "images/first3.jpg",
            title: "First Drawing",
            isOpen: false,
          },
          {
            img1: "images/first4.jpg",
            img2: "images/first5.jpg",
            img3: "images/first6.jpg",
            title: "First Drawing",
            isOpen: false,
          },
          {
            img1: "images/Current1.jpg",
            img2: "images/Current2.jpg",
            img3: "images/Current3.jpg",
            title: "Current Drawing",
            isOpen: false,
          },
          {
            img1: "images/Current4.jpg",
            img2: "images/Current5.jpg",
            img3: "images/Current6.png",
            title: "Current Drawing",
            isOpen: false,
          },
          {
            img1: "images/Current7.jpg",
            img2: "images/Current8.png",
            img3: "images/Current9.png",
            title: "Current Drawing",
            isOpen: false,
          },
          {
            img1: "images/portrait1.jpg",
            img2: "images/Portrait2.png",
            img3: "images/portrait3.png",
            title: "Portrait",
            isOpen: false,
          },
          {
            img1: "images/Special1.png",
            img2: "images/Special2.png",
            img3: "images/Special3.png",
            title: "Special",
            isOpen: false,
          },
          {
            img1: "images/Special4.png",
            img2: "images/Special5.png",
            img3: "images/Special6.png",
            title: "Special",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });