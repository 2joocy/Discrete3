export default class OperationHandler{

    constructor(){

    }

    public membership(a: any, set: any[]): boolean{
        let answer: boolean = false;
        switch(typeof(a)){
            case "number": 
                if(set.indexOf(a) >= 0){
                    answer = true;
                }
                break;
            case "object": 
                // TODO: arrEquals is wrong.
                // a could be an array, in which case we need to check the set if one of the elements is an array
                set.forEach((item, index) => {
                    if(typeof(item) === "object"){
                        answer = true;
                    }
                });
                break;
        }
        return answer;
    }
    
    public intersection(aArr: number[], bArr: number[]): number[]{
        let temp: number[] = [];
        aArr.forEach((a, indexA) => {
            if(bArr.indexOf(a) >= 0){
                temp.push(a);
            }
        });
        return temp;
    }

    public union(aArr: number[], bArr: number[]): number[]{
        let temp: number[] = [];
        temp.concat(aArr, bArr);
        temp = temp.sort(function (a, b) {  return a - b;  });
        return temp;
    }

    public difference(aArr: number[], bArr: number[]): number[]{
        let occurrences = new Map<number, number>(); 
        let result: number[] = [];
        aArr.forEach((itemA, indexA) => {
            if(occurrences.get(itemA) === undefined){
                occurrences.set(itemA, 1);
            }
            // @ts-ignore
            occurrences.set(itemA, occurrences.get(itemA) + 1);
        });
        bArr.forEach((itemB, indexB) => {
            if(occurrences.get(itemB) === undefined){
                occurrences.set(itemB, 1);
            }
            // @ts-ignore
            occurrences.set(itemB, occurrences.get(itemB) + 1);
        });
        occurrences.forEach((item, index) => {
            if(item > 1){
                result.push(item);
            }
        });
        
        return result;
    }

    public complement(arr: any[]): any[]{
        let result: any[] = [];
        arr.forEach((item, index) => {
            result.push("...")
            result.push(item);
        });
        result.push("...");
        return result;

    }

}

