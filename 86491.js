function solution(sizes) {
    var max = sizes[0];
    
    sizes.forEach((size, idx) => {
        if (idx != 0){
            var sum_size_w = size[0] - max[0] <= 0 ? 0 : size[0] - max[0];
            var sum_size_h = size[1] - max[1] <= 0 ? 0 : size[1] - max[1];
            
            if (sum_size_w+sum_size_h > 0){
                var reverse_size = [size[1], size[0]];
                var sum_reverse_size_w = reverse_size[0] - max[0] <= 0 ? 0 : reverse_size[0] - max[0];
                var sum_reverse_size_h = reverse_size[1] - max[1] <= 0 ? 0 : reverse_size[1] - max[1];
                
                // console.log(sum_size_w, sum_size_h, sum_reverse_size_w, sum_reverse_size_h)
                if ((sum_size_w + sum_size_h) < (sum_reverse_size_w + sum_reverse_size_h)){
                    // 바꾸기 전이 best
                    if (sum_size_w != 0) max[0] = size[0];
                    if (sum_size_h != 0) max[1] = size[1];
                }
                else {
                    // 바꾼게 best
                    if (sum_reverse_size_w != 0) max[0] = reverse_size[0];
                    if (sum_reverse_size_h != 0) max[1] = reverse_size[1];
                }
                // console.log(max)
            }
            
        }
    })
    
    return (max[0]*max[1]);
}
