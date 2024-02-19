const app = new Vue({
    el: "#app",
    data: {
        items: itemsObject,
        reviews: reviewsObject,
        buyItem: '',
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
        completeOrder: function() {
            this.isCompleteBuy = true
            setTimeout(() => {
                this.isCompleteBuy = false
            }, 5000)
        }
    },
})