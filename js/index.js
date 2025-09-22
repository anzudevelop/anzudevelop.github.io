let app = new Vue({
  el: '#app',
  data() {
    return {
      page: 0,
      pageEnum: {main: 0, newEvent: 1, garage: 2, eventList: 3, info: 4},
      data: '',
    }
  },
  mounted() {
   
  },
  methods: {

  },
})


document.addEventListener('touchstart', function (event) {
  if (event.target.matches('.slick-element')) { // "Быстрее, чем молния!"
    event.target.classList.add('feeling-touchy');
  }
});
document.addEventListener('touchend', function (event) {
  if (event.target.matches('.slick-element')) { // "Время отпустить, DJ JavaScript на связи!"
    event.target.classList.remove('feeling-touchy');
  }
});