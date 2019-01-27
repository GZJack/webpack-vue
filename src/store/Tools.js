 
 /**
  * Tools.js v1.0.1 是一个工具类,可以将分散的模块打包成一个对象,并校验是否存在,相同的变量,或者方法,并打出log
  * gatherModuleExportsDefaultFn() 集合模块导出函数 Tools.gatherModuleExportsDefaultFn({模块},{模块},{模块})
  */
 var Tools = function Tools () {

 }


function toObject (arg) {
    let obj = {};
    console.log(arg);
    // 循环所有参数
    arg.forEach(function (item) {
        if(typeof item !== 'object'){console.log(`${item} 传入的 item 不是一个对象`);}
        // 参数里的每个元素都是对象,
        Object.keys(item).forEach( function (key) {
             if(key in obj){console.log(`${key} 属性值重复了`);};
             obj[key] = item[key];
        });
    });
    return obj;
}
function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
}


/**
 * gatherModuleExportsDefaultFn() 函数名比较长,不要紧 
 * gather 集合
 * Module 模块
 * Exports 导出
 * Default 默认导出
 * Fn 函数
 * 用来集合 export default {key:vulue} 这样子的模块的
 * import homeState from '../pages/home/store/state.js';
 * let state = Tools.gatherModuleExportsDefaultFn(homeState,xxxState,xxxState);
 */
Tools.prototype.gatherModuleExportsDefaultFn = function gatherModuleExportsDefaultFn () {
    return toObject(toArray(arguments));
}

/**
 * gatherTypes() 和上面这个函数是一样的性值的,
 * 为了区分使用方式,定义一个
 * 第一种导出 和 导入
 * export default {key:vulue}  
 * import xxx from './xxx-type.js';
 * let types = Tools.gatherTypes(xxx,xxx,xxx);
 * 第二种 一个文件有多个导出的 和 一个变量导入多个模块
 * export let ABC = 'ABC'
 * export let EDF = 'EDF'
 * import * xxx from './xxx-type.js'
 * let types = Tools.gatherTypes(xxx,xxx,xxx);
 */
Tools.prototype.gatherTypes = function gatherTypes () {
    return toObject(toArray(arguments));
}



function addObject (oldObject,newObject) {
    oldObject = oldObject || {};
    // 把新的添加到旧的对象中去
    Object.keys(newObject).forEach(function(key){
          if(key in oldObject){console.log(`${key} 属性值重复了`);}
          oldObject[key] = newObject[key];
    })
    return oldObject;
}

/**
 * gatherOneStore() 集合单个页面的store
 * import homeGather from '../pages/home/store/gather.js'
 * let homeStore = Tools.gatherOneStore(homeGather,xxxGather,...)
 * let AllStore = Tools.gatherStore(homeStore,xxxStore,...)
 */
Tools.prototype.gatherOneStore = function gatherOneStore () {
    // [{state:{},mutations:{},getters:{},actions:{}},{state:{},mutations:{},getters:{},actions:{}}]
    var arr = toArray(arguments);
    var store = new Object();
    // 循环当页的
    arr.forEach(function(item){
        Object.keys(item).forEach(function(key){
            store[key] = addObject(store[key],toObject(item[key]));
        })
        
    })
    return store;
}

/**
 * gatherAllStore(arr) 集合pages目录下的 allGather.js  
 * export default [ // 导出的必须是数组
 *      homeGather,
 *      xxxGather,
 *      ...
 * ]
 * 使用
 * import allGather from '../pages/allGather.js';
 * let {state,mutations,getters,actions,mTypes,aTypes} = Tools.gatherAllStore(allGather)
 * state:状态集合
 * mutations:更改状态的方法集合
 * getters:计算状态的方法集合
 * actions:异步操作API方法集合
 * mTypes:更改状态方法的 宏函数名
 * aTypes:异步操作API方法的 宏函数名
 */
Tools.prototype.gatherAllStore = function gatherAllStore (arr) {
    if(Object.prototype.toString.call(arr).slice(8, -1) !== 'Array'){console.error(`${arr} 不是一个数组`);return {};}
    var store = new Object();
    // 循环当页的
    arr.forEach(function(item){
        Object.keys(item).forEach(function(key){
            store[key] = addObject(store[key],item[key]);
        })
        
    })
    console.log(store);
    return store;
}


export default Tools;