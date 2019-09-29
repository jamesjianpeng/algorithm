/**
 * @description 随机获取自定范围的数字
 * @param {number} num 
 * @param {number} rangMax 
 * @param {number} rangMin 
 */
function getRandomNum(num, rangMax = 1000, rangMin = 100) {
    let list =[];
    for(var i = 0; i < num; i++) {
        list[i] = Math.round(Math.random() * (rangMax - rangMin)) + rangMin
    }
    return list;
}

/**
 * @description 冒泡排序，升序 
 * @param {Array} data
 */ 
function bubbleSort(data) {
   let len = data.length;
   let template = null;
   for (let i = 0; i<len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (data[j] > data[j+1]) {
                template = data[j+1];
                data[j+1] = data[j];
                data[j] = template
            }
        }
   }
   return data
}
    // 0: 1, 4, 10, 12, 10, 5, 8, 0
    // 1: 1, 4, 10, 10, 5, 8, 0, [12]
    // 2: 1, 4, 10, 5, 8, 0, [10, 12]
    // 3: 1, 4, 5, 8, 0, [10, 10, 12]
    // 4: 1, 4, 5, 0, [8, 10, 10, 12]
    // 5: 1, 4, 0, [5, 8, 10, 10, 12]
    // 6: 1, 0, [4, 5, 8, 10, 10, 12]
    // 7: [0, 1, 4, 5, 8, 10, 10, 12]