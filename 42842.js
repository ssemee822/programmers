function solution(brown, yellow) {
    var answer = [];
    
    var wh = brown + yellow;
    var wPh = (brown + 4) / 2;
    
    // console.log(wh, wPh)
    
    for (var i=1; i <= wPh/2; i++){
        var h = i;
        var w = wPh - h;
        
        // console.log(w,h)
        if (w*h == wh){
            answer.push(w)
            answer.push(h)
            break
        }
    }
    
    return answer;
}
