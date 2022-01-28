function son(x){
    return x-1;
}
function father(x){
    return son(x-2);
}
function grandfather(x){
    // return x+1;
    return father(x-3);
}
function main(){
    var result = grandfather(100);
    console.log(result);
}
main();