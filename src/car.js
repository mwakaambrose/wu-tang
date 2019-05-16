import Toyota from './toyota'

export class Car {
    constructor(){
        this.corolla = new Toyota()
    }

    /**
     * Should both have same signature as
     * as children so that they are interchangeable
     */
    getAll(){
        console.log(this.corolla.getAll())
    }
}