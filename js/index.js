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
    if (tg) {
      // можно сразу использовать unsafe данные для отображения
      this.tgUser = tg.initDataUnsafe?.user || null;
      // подписанная строка для валидации на сервере
      this.tgInitData = tg.initData;

      // сразу отправляем на сервер для проверки и получения безопасной сессии
      fetch('/telegram/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initData: this.tgInitData })
      })
        .then(r => r.json())
        .then(data => {
          // после проверки сервер вернёт безопасные данные, можно использовать в компоненте
          this.tgUser = data.user;
          console.log('Проверенные данные:', data);
        })
        .catch(err => console.error('Ошибка запроса:', err));
    } else {
      console.log('Не в Telegram WebApp — fallback или виджет логина');
    }
  },
  methods: {
    // любые методы, которые используют this.tgUser
  },
})
