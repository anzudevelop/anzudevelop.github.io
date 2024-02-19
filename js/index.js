const app = new Vue({
    el: "#app",
    data: {
        items: itemsObject,
        reviews: reviewsObject,
        buyItem: '',
        buyName: '',
        buyPhone: '',
        buyComment: '',
        headerMobileMenu: 'headerMobileMenuHide',
        isCompleteBuy: false,
    },
    methods: {
        scrollClick: function(target) {
            document.getElementById(target).scrollIntoView({
                behavior: 'smooth'
            });
        },
        scrollMobileClick: function(target) {
            this.headerMobileMenu = 'headerMobileMenuHide'
            document.getElementById('m' + target).scrollIntoView({
                behavior: 'smooth'
            });
        },
        buy: function(name) {
            this.buyItem = name
            document.getElementById('buy').scrollIntoView({
                behavior: 'smooth'
            });
        },
        completeOrder: async function() {
            this.isCompleteBuy = true
            setTimeout(() => {
                this.buyItem = ''
                this.buyName = ''
                this.buyPhone = ''
                this.buyComment = ''
                this.isCompleteBuy = false
            }, 5000)

            let data = {
                "orderName": this.buyItem,
                "personName": this.buyName,
                "phone": this.buyPhone,
                "comment": this.buyComment,
            };
              
            await fetch('http://127.0.0.1:3000/order', {
                method: 'POST',
                mode: 'no-cors',
                cache: "no-cache",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify(data)
            });
        }
    },
})