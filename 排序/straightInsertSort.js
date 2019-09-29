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
 * @description 插入排序，升序 
 * @param {Array} data
 */ 
function straightInsertSort(data) {
    let len = data.length;
    let template = null
    for (let i = 1;i < len;i++) {
        let j = i - 1;
        template = data[i]  /* 需要排序的值 */
        // 从后向前比较
        while(j - 1 >= -1 && data[j] /* 在拍好序的值 */ > template){
            data[j+1] = data[j]; // 先交换值 
            j--; // 向后移动
        }
        data[j+1] = template;
    }
    return data;
}
    // 0: 1, 4, 10, 12, 10, 5, 8, 0
    // 1: [1], 4, 10, 12, 10, 5, 8, 0
    // 2: [1, 4], 10, 12, 10, 5, 8, 0
    // 3: [1, 4, 10], 12, 10, 5, 8, 0
    // 4: [1, 4, 10, 12] 10, 5, 8, 0
    // 5: [1, 4, 10, 10, 12], 5, 8, 0
    // 6: [1, 4, 5, 10, 10, 12], 8, 0
    // 7: [0, 1, 4, 5, 8, 10, 10, 12]