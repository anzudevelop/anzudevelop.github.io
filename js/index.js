let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

const app = new Vue({
    el: "#app",
    data: {
        user: null,
    },
    beforeMount() {
        //this.user = tg.initDataUnsafe.user
        this.user = null //----------------
    },
    methods: {
        toggleMainButton: function() {
            if(tg.MainButton.isVisible) {
                tg.MainButton.hide()
            } else {
                tg.MainButton.show()
            }
        },
        changeMainButtonActive: function() {
            if(tg.MainButton.isActive) {
                tg.MainButton.setParams({"color": "#E0FFFF"});
                tg.MainButton.disable() 
            }
            else {
                tg.MainButton.setParams({"color": "#143F6B"});
                tg.MainButton.enable()
            }
        },
    }

})

// tg.expand(); //расширяем на все окно  

// tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
// tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
// tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
// tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
// tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 

// Telegram.WebApp.onEvent('mainButtonClicked', function(){
// 	tg.sendData("some string that we need to send"); 
// 	//при клике на основную кнопку отправляем данные в строковом виде
// });


