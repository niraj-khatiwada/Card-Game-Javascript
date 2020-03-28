const cardObject = {
    cardNumber : 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    cardName: ["Hearts", "Spades", "Diamonds", "Clubs"],
    deck : [],
    drawnCardList : [],
    initializeDeck() {

        for ( let number of this.cardNumber.split(",")){
            for (let name of this.cardName){
                this.deck.push({name, number})
            }
        }
    },
    
    pickACard() {
        const randNum = Math.ceil(Math.random() * this.deck.length)
        const drawnCard = this.deck.splice(randNum, 1)
        this.drawnCardList.push(...drawnCard) 
        // console.log("new deck", this.deck())
        return this.deck[randNum]

    },

    shuffleCard() {
    for (let i = this.deck.length - 1;i >0 ; i--){
        let j = Math.floor(Math.random() * (i - 1))
        let a = this.deck[i]
        this.deck[i] = this.deck[j]
        this.deck[j] = a
        }
        return this.deck
    }



}

cardObject.initializeDeck()