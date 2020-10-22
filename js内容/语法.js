/**
 * ecmascript
 * dom 文档
 * bom 浏览器
 * 
 * 变量命名的规则
 * 1，只能由数字，字母，下划线，$组成
 * 2,不能由数字开头
 * 3，不能是保留字和关键字
 * 4，大小写敏感
 * 
 * 
 * 
 * 运算符
 * 
 * 1算术  
 *  +、-、*、/
 * 
 * 2关系
 * >、<,
 * 
 * 
 * 3 逻辑
 * &&、||、！
 * 
 * 4赋值
 * =，+=，-=，++，--
 * 
 * 
 * 只有控制符转布尔值为false,其他都为true
 * nan != nan
 */


 console.log(typeof(100));

 function a1(){
     console.log(arguments)
 }


//  递归
/**
 * 
 *1，找临界值，不需要计算就得出的
  2，找这一次和上一次的关系
  3，假设当前函数可用，调用自身计算上一次
 */


//  1+2+3+4+5+6+7+.....n;
//  n=1;
//  a2(2)= a(1)+2

function a2(n){
    if(n==1){
        return 1;
    }
    return a2(n-1)+n;
}

function a3(n){
  if(n<4){
      return 1;
  }
  return a3(n-1)+a3(n-3)
}

var x = new Array();
x.push(1);
x.shift();
x.pop();
x.unshift(2) 
