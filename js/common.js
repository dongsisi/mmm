
  

  function urlSearch(){
    var str = location.search; // 获取地址栏参数
  // 解码成中文
  str = decodeURI( str );   // "?key=耐克&age=18&desc=帅"
  str = str.slice( 1 );    // "key=耐克&age=18&desc=帅"
  // str.split("&") 将字符串根据&分割成数组
  var arr = str.split('&'); // ["key=耐克", "age=18", "desc=帅"]
  var obj = {};
  // 遍历数组, 取得键和值
  arr.forEach(function( v, i ) {  // v 每一项  "age=18"
    var key = v.split("=")[0];  // age
    var value = v.split("=")[1];  // 18
    obj[ key ] = value;
  })
  console.log( obj );
 return obj;
  }

