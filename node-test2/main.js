window.jQuery = function(){}
window.jQuery.ajax = function(url,method,body,successFn,failFn) {
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
 
window.$ = window.jQuery
 myButton.addEventListener('click',(e)=>{
    $.ajax('/xxx',
    'POST',
    'PASS',
    (responseText)=>{console.log('1')},
    (request) =>{console.log('2')}
    )
 })
