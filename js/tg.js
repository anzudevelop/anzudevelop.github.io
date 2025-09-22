// доступен только внутри Telegram Web App
const tg = window.Telegram?.WebApp;

if (tg) {
  // необработанные данные (удобны для чтения)
  const unsafe = tg.initDataUnsafe;
  console.log('unsafe user:', unsafe?.user);    // объект user: id, first_name, last_name, username, language_code

  app.data = JSON.stringify(unsafe)
  // подписанная строка для проверки на сервере
  const initData = tg.initData;
  // отправим на сервер для валидации и связывания с сессией
  fetch('/telegram/init', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ initData })
  })
    .then(r => r.json()) // преобразуем ответ в JSON
    .then(data => {
      app.data2 = data;  // вот тут уже объект
      console.log('Ответ сервера:', data);
    })
    .catch(err => console.error('Ошибка запроса:', err));
} else {
  console.log('Не в Telegram WebApp — можно использовать Telegram Login Widget.');
}

// unsafe = {
//   "user": {
//      "id": 796828719, 
//      "first_name": "Алексей", 
//      "last_name": "Косогор", 
//      "username": "alexkosogor", 
//      "language_code": "ru", 
//      "allows_write_to_pm": true, 
//      "photo_url": "https://t.me/i/userpic/320/jxcaFOuCsEFgeFIHIMQIYUNbJ4EkJngv7f0pWuLIbxI.svg" 
//   }, 
//   "chat_instance": "-1871541842890597766", 
//   "chat_type": "sender", 
//   "auth_date": "1758526563", 
//   "signature": "mtC7d5TUvwmQJPRqXggIVN4weKvtSEGqpwhh5-j5VBVFfkAW0dfI7_KpxygiPSdEjw0-iuHbGLoUsTV7cdOHDQ", 
//   "hash": "ae09a815d1f857265e8f219494c6b9087087624bf83962c30eea66669c6cba88" 
// }