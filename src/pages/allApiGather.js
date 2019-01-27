/**
 * 此文件是将 整个pages目录下的页面的api进行整合,添加页面,就必须在这里添加引入,并导出
 */
// 正则匹配引入文件时,是匹配第一行的引入 [i m p o t][f r o m] 正则匹配,所以把其写开了一点
import HomeApiGather from './home/api/gather.js'

// 必须导出的是一个数组
export default [ // 'export default [' 这行的格式不要改变,因为脚手架,修改添加导出时,正则匹配的时 是根据这个匹配的
    HomeApiGather
]