// 传入正常数组时
let arr = [1, 2, 3, , 4];  

/**
 * forEach遇上return不会跳出循环,进入下一个循环
 * 遇上空值时会跳过空缺
 * @param {*} arr 
 */
function forEachFun(arr) {
  let newArr = [];
  arr.forEach(i => {
    console.log(i, arr[i])
    if (i < 2) {
      return;
    }
    newArr.push(i);
  })
  return newArr;
}

/**
 * for in循环不满足当前循环条件会跳出整个循环
 * 注意：for in循环是索引值(键名)，下标都会变化才能字符串，主要是用来遍历对象比较合适，不适合遍历数组
 * @param {*} arr 遍历数组
 */
function forInFun(arr) {
  let newArr = [];
  for (let i in arr) {
    console.log(i, arr[i])
    if (i < 2) {
      return;
    }
    newArr.push(i);
  }
  return newArr;
}

/**
 * for of循环不满足当前循环条件会跳出整个循环
 * @param {*} arr 遍历数组
 */
function forOfFun(arr) {
  let newArr = [];
  for (let i in arr) {
    console.log(i, arr[i])
    if (i < 2) {
      return;
    }
    newArr.push(i);
  }
  return newArr;
}


console.log(forEachFun(arr));
console.log(forInFun(arr));
console.log(forOfFun(arr));
