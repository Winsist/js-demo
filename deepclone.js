function deepClone(obj={}){
    if(typeof obj !=='object' || obj==null){
        //obj是null，或者不是对象和数组，直接返回
        return obj
    }
    //初始化返回结果
    let result;
    if(obj instanceof Array){
        result = []
    }else{
        result ={}
    }
    for(let key in obj){
        //保证key不是原型的属性
        if(obj.hasOwnProperty(key)){
            //递归
            result[key] = deepClone(obj[key])
        }
    }
    //返回结果
    return result
}

const obj1={
    age:20,
    name:'张三',
    address:{
        city:'北京'
    },
    arr:[1,2,3]
}

const obj2=deepClone(obj1);

obj2.address.city='杭州';
obj2.arr=[555];
console.log(obj1);//此时obj1还是原来的值，并没有被改变
