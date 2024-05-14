import {findLargestInArray} from'./complicatedFunction'

describe('ComplicatedFunction Unit Test Suites',()=>{

    it('should return largest in array',()=>{

        const data =  [1,2,3,4,5,6,7,8,9,10];
        expect(findLargestInArray(data)).toBe(10);
    })

    it('should return largest in array',()=>{

        const data =  ['hello','world','hello world'];
        expect(findLargestInArray(data)).toBe('hello world');
    })
})