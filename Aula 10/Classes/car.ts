import { Models } from "../model"

const modelsPrice: {[key in Models]: number} = {
    "Jeep Renegade": 125000,
    "Fiat Uno": 15000,
    "Jumpy":160000,
    "Tiggo 5": 120000
}

const carAttachments: {[key: number]: {name:string, price:number}} = {
    0: {name: 'Som', price: 250},
    1: {name: 'camRe', price: 400},
    2: {name: 'retroEletric', price: 1400}
}


export default class Car{
    price: number
    model: Models
    optionsAttchments: [boolean, boolean, boolean]
    sound :boolean = false

    constructor(
        model: Models, 
        optionsAttchments:[boolean, boolean, boolean] = [false,false,false]
    ){
        this.model = model;
        this.optionsAttchments = optionsAttchments;
        this.price = modelsPrice[model];
    }

    getAttachments(): string{
        let iterator: string[] = []

        for(let attachment in this.optionsAttchments ){
            if(this.optionsAttchments[attachment]){
                iterator.push(carAttachments[attachment].name)
            }
        }

        return iterator.join(', ')
    }

    getPrice(): number{
        let attachmentPrices = 0

        for(let attachment in this.optionsAttchments ){
            if(this.optionsAttchments[attachment]){
                attachmentPrices += carAttachments[attachment].price
            }
        }

        return this.price + attachmentPrices
    }

    turnOnSound(){
        if(!this.optionsAttchments[0]){
            console.log("Esse carro não tem som pia");
        }else if(!this.sound){
            console.log("Ligando...");
            this.sound = true
        }else{
            console.log("Radio Ligado")
        }
    }

    turnOffSound(){
        if(!this.optionsAttchments[0]){
            console.log("Esse carro não tem som pia");
        }else if(this.sound){
            console.log("Desligando...");
            this.sound = false
        }else{
            console.log("Radio Desligado");
        }
    }
}