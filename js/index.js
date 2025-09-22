let app = new Vue({
  el: '#app',
  data() {
    return {

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