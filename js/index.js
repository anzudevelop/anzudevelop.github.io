let app = new Vue({
  el: '#app',
  data() {
    return {
      page: 0,
      pageEnum: { main: 0, newEvent: 1, garage: 2, eventList: 3, info: 4 },
      tgUser: null,      // сюда пробросим безопасные данные
      tgInitData: '',    // сырые initData для сервера
    }
  },
  mounted() {
    const tg = window.Telegram?.WebApp;
    const appContainer = document.querySelector('#app');

    if (tg && appContainer) {
      const updateHeight = () => {
        appContainer.style.height = tg.viewportHeight + 'px';
        appContainer.style.overflowX = 'hidden'; // жёстко отключаем скролл
      };

      updateHeight();
      tg.onEvent('viewportChanged', updateHeight);
    }

    if (tg) {
      this.tgUser = tg.initDataUnsafe?.user || null;
      this.tgInitData = tg.initData;

      fetch('77.221.140.74:3000/telegram/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initData: this.tgInitData })
      })
        .then(r => r.json())
        .then(data => {
          this.tgUser = data.user;
          console.log('Проверенные данные:', data);
        })
        .catch(err => console.error(err));
    } else {
      console.log('Не в Telegram WebApp — fallback');
    }
  },
  methods: {
    // любые методы, которые используют this.tgUser
  },
})
