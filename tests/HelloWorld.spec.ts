import {expect} from "chai"
import { HelloWorld } from "../src/HelloWorld"


describe("Test Hello World", ()=> {
    it("test_init_doNothin", ()=> {
        let sut = new HelloWorld()
    })

    it("test_show_returnHelloWorld", () => {
        let sut = new HelloWorld()
        expect(sut.show()).to.be.equal("Hello World")
    })

    it("test_showName_returnHeloName", () => {
        let sut = new HelloWorld
        expect(sut.show("Daryl")).to.be.equal("Hello Daryl") 
    })
})