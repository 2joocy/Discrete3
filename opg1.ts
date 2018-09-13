const a = [1,2,3,4,5,6];
const b = [3,6,8,9,10];

function membership(){
    return a.concat(b);
}

function interception(){
    const temp = [];
    for(var i = 0; i<a.length; i++){
        for(var j = 0; j<a.length; j++){
            if(a[i] === b[j]){
                temp.push(b[j]);
            }
        }
    }
    return temp;
}

function union(){
    const temp = membership();
    temp.sort(function(a, b){return a - b});
    return temp;
}

function difference(){
    const temp = [];
    for(var i = 0; i<a.length; i++){
        for(var j = 0; j<a.length; j++){
            if(a[i] != b[j]){
                temp.push(a[i]);
            }
        }
    }
    return temp;
}

function complement(){
    const temp = [];
    for(var i = 0; i<a.length; i++){
        for(var j = 0; j<a.length; j++){
            if(a[i] != b[j]){
                temp.push(b[j]);
            }
        }
    }
    return temp;
}
