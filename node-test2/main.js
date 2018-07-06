window.jQuery = function(){}
window.jQuery.ajax = function(options) {
    let url = options.url
    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined,request.responseText) //使用 JSON.parse() 方法将josn数据转换为 JavaScript 对象。
            }else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    request.open(method, url)
    request.send(body)
}
 
 myButton.addEventListener('click',(e)=>{
     let obj = {
         url:'/xxx',
         method:'get',
         body:'hi',
         successFn:()=>{},
         failFn:()=>{}
     }
     window.jQuery.ajax(obj)
 })
