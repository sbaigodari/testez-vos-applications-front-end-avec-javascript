import {getAge} from "./unit2"

describe('getAge Unit Tests Suites',()=>{
    it('it should return "Vous avez actuellement 25 ans"',()=>{
        expect(getAge(25)).toBe("Vous avez actuellement 25 ans")
    })
})