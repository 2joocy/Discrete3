import ComplimentSet from './sets/ComplimentSet'
import DifferenceSet from './sets/DifferenceSet'
import IntersectionSet from './sets/IntersectionSet'
import UnionSet from './sets/UnionSet'

export default class OperationHandler{

    public membership(a: number, set: number[]): boolean{
        return set.indexOf(a) !== -1;
    }
    
    public intersection(aArr: number[], bArr: number[]): IntersectionSet{
        let temp: number[] = [];
        aArr.forEach((a, indexA) => {
            if(bArr.indexOf(a) >= 0){
                temp.push(a);
            }
        });
        let intersectionSet = new IntersectionSet(aArr, bArr, temp);
        return intersectionSet;
    }

    public union(aArr: number[], bArr: number[]): UnionSet{
        let temp: number[] = [];
        temp.concat(aArr, bArr);
        temp = temp.sort(function (a, b) {  return a - b;  });
        let unionSet = new UnionSet(aArr, bArr, temp);
        return unionSet;
    }

    public difference(aArr: number[], bArr: number[]): DifferenceSet{
        let occurrences = new Map<number, number>(); 
        let result: number[] = [];
        aArr.forEach((itemA, indexA) => {
            occurrences.set(itemA, 1);
        });
        bArr.forEach((itemB, indexB) => {
            let occurrenceB = occurrences.get(itemB);
            if(occurrenceB === undefined){
                occurrences.set(itemB, 1);
            }else{
                occurrences.set(itemB, occurrenceB + 1);
            }
        });
        occurrences.forEach((item: number, key: number, ) => {
            if(item === 1){
                result.push(key);
            }
        });

        let differenceSet = new DifferenceSet(aArr, bArr, result);
        return differenceSet;
    }

    public complement(arr: number[]): ComplimentSet{
        let result: any[] = [];
        arr.forEach((item, index) => {
            result.push("...")
            result.push(item);
        });
        // @ts-ignore
        result.push("...");
        let complimentSet = new ComplimentSet(arr, result);
        return complimentSet;

    }

}

