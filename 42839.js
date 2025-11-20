function solution(numbers) {
    var answer = 0;
    var arr = new Set;
    var len = numbers.length;
    var visited;
    numbers = numbers.split("")
    
    function dfs(cur) {
        if (cur.length > 0) {
            arr.add(parseInt(cur));
            // console.log("arr:",arr)
        }
        // console.log("cur:",cur)
        // console.log("visited:",visited)
        
        for(var i=0; i<len; i++){
            if(visited[i]) continue;
            
            visited[i] = true;
            dfs(cur+numbers[i]);
            visited[i] = false;
        }
    }
    
    numbers.forEach((e,i) => {
        visited = Array(len).fill(false);
        visited[i] = true
        dfs(e);
    })
    
    arr.forEach(e => {
        if(isNumber(e) == true){ 
            // console.log(e, isNumber(e))
            answer++
        }
    })
    
    return answer;
}

function isNumber(n) {
    if (n<2) return false;
    var isN = true
    
    var limit = Math.sqrt(n);
    for(var i=2; i<=limit; i++){
        if((n%i) == 0) return false;
    }
    return true;
}
