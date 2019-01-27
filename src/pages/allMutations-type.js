/**
 * mutations-type.js
 * 导出本页面里所用到的n个mutation方法名称
 * 规则: 命名全部大写,一个函数导出一个名称,名字最好带上页面名称,避免和其他页面的重复
 *       尽量名称的最后一个下划线的值,要和state上的对应,前面的名称是一个描述,也可以简写,只要能方便开发者看明白
 * 例子:
 * // 更改State状态上的name的对应方法名称
 * export const HOME_MUTATION_CHANGE_STATE_NAME = 'HOME_MUTATION_CHANGE_STATE_NAME';
 */
// 修改State状态上的count的对应方法名称 count
export const HOME_MUTATION_CHANGE_STATE_COUNT = 'HOME_MUTATION_CHANGE_STATE_COUNT';
