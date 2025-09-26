Vue.createApp({
  data: () => ({
    page: 0,
    pageEnum: { main: 0, newEvent: 1, garage: 2, eventList: 3, info: 4 },
    tgUser: null,      // сюда пробросим безопасные данные
    tgInitData: null,    // сырые initData для сервера
  }),
  methods: {

  },
  computed: {
    // evenItems() {
    //   return this.items.filter(i => i % 2 === 0)
    // }
  },
  mounted() {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      this.tgUser = tg.initDataUnsafe?.user || null;
      this.tgInitData = tg.initData || null;

      fetch('http://77.221.140.74:3000/telegram/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initData: this.tgInitData }),
        credentials: 'include' // <--- вот это важно!
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
  watch: {

  }
}).mount("#app")