function solution(s) {
    var answer = new Set();
    var arr= [];
    
    s = s.split('},')
    s.forEach((e,i) => {
        var len = e.length;
        var e_int = '';
        for(var i=0; i<len; i++){
            if(e[i] == '{' || e[i] == '}') continue;
            e_int += e[i]
        }
        e_int = e_int.split(",")
        if (answer.length < e_int.length) answer = e_int;
        arr.push(e_int)
    })
    arr.sort((a,b)=>a.length - b.length)
    
    arr.forEach(e => {
        e.forEach(v => {
            answer.add(parseInt(v))
        })
    })
    
    return [...answer];
}
