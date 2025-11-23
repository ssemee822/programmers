function solution(s) {
  var len = s.length;
  var answer = len + 1;
  // s = s.split("")

  function getArr(unit) {
    var arr = [];

    for (var i = 0; i < len; i = i + unit) {
      arr.push(s.slice(i, i + unit));
    }
    return arr;
  }

  for (var i = 0; i < len / 2; i++) {
    var unit = i + 1;
    var res = "";
    var arr = getArr(unit);
    // console.log(unit, arr);

    var count = 0;

    arr.forEach((e, index) => {
      if (e == arr[index + 1]) count++;
      else {
        if (count) res += count + 1;
        res += e;
        count = 0;
      }
    });
    // console.log(res)
    answer = Math.min(res.length, answer);
  }
  return answer;
}
