function solution(answers) {
    var sum = [0,0,0];
    var answer = [];
    
    var st_1 = [1, 2, 3, 4, 5];
    var st_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var st_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    answers.forEach((a, i) => {
        if (a == st_1[i%5]) sum[0] ++;
        if (a == st_2[i%8]) sum[1] ++;
        if (a == st_3[i%10]) sum[2] ++;
    })
    // console.log(Math.max(...answer))
    var max = Math.max(...sum)
    
    sum.forEach((e,i) => {
        if (e == max) answer.push(i+1);
    })
    
    return answer;
}
