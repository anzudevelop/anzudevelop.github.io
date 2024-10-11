const scoreapp = new Vue({
    el: "#scoreapp",
    data: {
        activeWindow: 0,
        windowsEnum: {score: 0, players: 1, settings: 2},
        isGame: false,
        roundsCount: 4,
        players: [
            {name: 'Леша', score: [5, 1, 12, 1]},
            {name: 'Ира', score: [3, 1, 3, 0]},
            {name: 'Андрей', score: [5, 5, 2, 0]},
            {name: 'Дыма', score: [1, 2, 13, 0]},
        ],
        selectedColumn: null,
    },
    methods: {
        newGame() {
            this.players.forEach(player => player.score = [])
            this.roundsCount = 0
            this.selectedColumn = null
        },
        addRound() {
            this.players.forEach(player => player.score.push(0))
            this.roundsCount++
        },
        removeRound() {
            if (this.selectedColumn === null) return
            if (this.selectedColumn > this.roundsCount) return
            this.players.forEach(player => player.score.splice(this.selectedColumn - 1, 1))
            this.roundsCount--
            this.selectedColumn = null
        },
    }

})