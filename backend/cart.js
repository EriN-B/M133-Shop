export class cart {

    cart = []
    index = 0

    constructor() {}

    add(product) {
        if (this.cart.find(product => product) == undefined) {
            this.cart.push({index: this.index, product: product});
            this.index++;
        }
        
    }

    remove(product) {
        if(this.cart.find(product => product) != undefined) {
            const respectiveProduct = this.cart.find(product => product);
            this.cart.splice(respectiveProduct.index, 1)
        }
    }

    getCart() {
        return this.cart;
    }

}