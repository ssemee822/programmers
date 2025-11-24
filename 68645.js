function solution(n) {
    var answer = [];
    var change = [];
    var len = 0;
    var cur_x = 0;
    var cur_y = 0;
    
//  d,r,u
    var status = 'd'; 
    
    for(var i=1; i<=n; i++){
        len += i;
        answer.push(Array(i).fill(0))
    }
        
    var c = n; 
    for (var i = n-1; i>0; i--){
        change.push(c);
        c += i
    }
    
    // console.log(change)
    // console.log(len)
    // console.log(answer);
    
    for(var i=1; i<=len; i++){
        // console.log(cur_x, cur_y, ":", i);
        answer[cur_x][cur_y] = i;
        
        if(status == "d"){
            cur_x++;
            
            if (change.filter(e => e==i+1).length) {
                // console.log("change",change,i);
                status = "r";
            }
        }
        else if(status == "r"){
            cur_y++;
            if (change.filter(e => e==i+1).length) {
                // console.log("change",change,i);
                status = "u";
            }
        }
        else if(status == "u"){
            cur_x--;
            cur_y--;
            if (change.filter(e => e==i+1).length) {
                // console.log("change",change,i);
                status = "d";
            }
        }
    }
    // console.log(answer);
    
    var res =[]
    answer.forEach(e => {
        e.forEach(a => {res.push(a)})
    })
    return res;
}
