const scoreapp = new Vue({
    el: "#scoreapp",
    data: {
        activeWindow: 0,
        windowsEnum: {score: 0, players: 1, settings: 3},
        isGame: false,
        players: [
            {name: 'Леша', score: [5, 1, 12]},
            {name: 'Ира', score: [3, 1, 3]},
            {name: 'Андрей', score: [5, 5, 2]},
            {name: 'Дыма', score: [1, 2, 13]},
        ]
    },
    methods: {
        
    }

})