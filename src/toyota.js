/**
 * Responsible for only toyota cars
 */
export default class Toyota {

    constructor(){
        this.all = ["Caldina"]
    }

    /**
     * Should both have same signature as
     * as children so that they are interchangeable
     *
     * Liskov Substitution
     */
    getAll(){
        return this.all
    }

    /**
     * Add a new toyota model to ensure this class is closed
     * for modifications but open for extension
     * @param name
     */
    addModel(name){
        this.all.push(name)
    }

    /**
     * Interface Segregation
     * The Interface Segregation Principle states that a client should
     * never be forced to implement an interface that it doesnt use.
     *
     * If coding to an interface, split interfaces upto a point where the classes
     * implementing them wouldn't be forced to have an empty implementation because they
     * don't use the contract(interface functions to be implemented)
     */

    /**
     * Dependency Inversion != Dependency Injection
     * High level modules should not depend upon low level modules, instead they should
     * rely on abstractions and not concretion. In other OOP languages, you'd do this by
     * coding to an interface.
     *
     * This allows us to decouple our code, instead of relying on strong
     * concretion and dependency (Hard coding)
     *
     * Eg house wiring(low level code) and wall outlets(interface) with e-gadgets, say TV (high level code)
     */
}