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
  }).then(r => r.json()).then(console.log);
} else {
  console.log('Не в Telegram WebApp — можно использовать Telegram Login Widget.');
}