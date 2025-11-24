function solution(arr) {
    var answer = [0,0];
    var except = [0,0];
    var len = arr[0].length;
    var n = 0;   
    var visited = Array.from({ length: len }, () => Array(len).fill(false));

    // console.log(visited)

    // n 값 구하기
    for(var i=10; i>0; i--){
        if (2**i < len){ 
            n = i+1;
            break;
        }
    }
    
    //초기 개수 구하기
    arr.forEach(e => {
        answer[0] += e.filter(i=> i=='0').length
        answer[1] += e.filter(i=> i=='1').length
    })
    
    if (answer[0] == 0) return [0,1];
    if (answer[1] == 0) return [1,0];
    // console.log("answer:", answer);
    // console.log("len:", len, ", n:", n);
    
    function isP(xy, width){
        if (visited[xy[0]][xy[1]]) return false;
        var start = arr[xy[0]][xy[1]];
        
        // console.log("xy:", xy,", start:", start,", width:", width);
        for (var i=0; i<width; i++){
            for (var j=0; j<width; j++){
                var next_x = parseInt(xy[0])+i;
                var next_y = parseInt(xy[1])+j;
                if (arr[next_x][next_y] != start) return false;
            }
        }
        
        for (var i=0; i<width; i++){
            for (var j=0; j<width; j++){
                var next_x = parseInt(xy[0])+i;
                var next_y = parseInt(xy[1])+j;
                // console.log(next_x,next_y)
                visited[next_x][next_y] = true
                // console.log("visited",visited)
            }
        }
        
        except[start] += width**2 - 1;
        // console.log("except",except)
        // console.log("visited",visited)
        return true;
    }
        
    for(var i=n-1; i>=1; i--){
        var width = 2**i;
        var col = len / width;

        for (var c=0; c<col; c++){
            for (var r=0; r<col; r++){
                isP([[c*width],[r*width]], width)
            }
        } 
    }
    
    return [answer[0]-except[0],answer[1]-except[1]];
}
