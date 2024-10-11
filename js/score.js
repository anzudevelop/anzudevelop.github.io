const scoreapp = new Vue({
    el: "#scoreapp",
    data: {
        activeWindow: 0,
        windowsEnum: {score: 0, players: 1, settings: 2},
        isGame: false,
        roundsCount: 4,

        players: ['Леша', 'Ира', 'Андрей', 'Дыма'],
        scores: [[5, 1, 12, 1], [3, 1, 3, 0], [5, 5, 2, 0], [1, 2, 13, 0]],
        selectedColumn: null,
    },
    methods: {
        newGame() {
            this.scores.forEach(score => score = [])
            this.roundsCount = 0
            this.selectedColumn = null
        },
        addRound() {
            this.scores.forEach(score => score.push(0))
            this.roundsCount++
        },
        removeRound() {
            if (this.selectedColumn === null) return
            if (this.selectedColumn > this.roundsCount) return
            this.scores.forEach(score => score.splice(this.selectedColumn - 1, 1))
            this.roundsCount--
            this.selectedColumn = null
        },
    },
})