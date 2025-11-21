function solution(k, dungeons) {
    var answer = -1;
    var len = dungeons.length;
    var visited = Array(len).fill(false)
    
    console.log(len, visited)
    
    function dfs(hp, count){
        if(count > answer) answer = count;
        
        for (var i=0; i<len; i++){
            if (visited[i]) continue;
            
            var cur = dungeons[i];
            
            if (hp >= cur[0]){
                visited[i] = true;
                dfs(hp-cur[1], count+1)   
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0)
    
    return answer;
}
