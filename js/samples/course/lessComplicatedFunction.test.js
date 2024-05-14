import { findLargestInArray, findLargestNumberInArray, findLargestWordInArray } from './lessComplicatedFunction'


describe('lessComplicatedFunction Unit Test Suites',()=>{

    it('should return the largest Number in array',()=>{
        const intArray = [1,2,3,4,5,6,7,8,9,10];
        expect(findLargestNumberInArray(intArray)).toBe(10);
    });

    it('should return the largest world in array',()=>{
        const StringArray = ['hello','world','hello world'];
        expect(findLargestWordInArray(StringArray)).toBe('hello world');
    });

    it('should return the largest in Array',()=>{

        const StringArray = ['hello','world','hello world'];
        expect(findLargestInArray(StringArray)).toBe('hello world');

    });

})