$(function(){
  var url = urlSearch();
  console.log(url);
  var id = url.productid;
  var productid = url.productid;
//  console.log(id);
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
console.log(id);
console.log(productid);

$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getcategorybyid',
  data:{
    categoryid:id
  },
  dataType:'json',
  success:function(info){
    console.log(info);
    $('.cate').html(template('one',info));
  }
})

  $.ajax({
    url:'http://127.0.0.1:9090/api/getproduct',
    type:'get',
    dataType:'json',
    data:{
      productid:id,
      // categoryid:id
    },
    success:function( info ){
      console.log(info);
    $('.content').html(template('productTpl',info));
    // $('.list_title').html(template('one',info));
    var proName = info.result[0].productName.split(' ')[0]
    console.log(proName);
    $('.twocate').html(template('two',{list:proName}));
  
    // 京东商城渲染
    $('.price').html(template('price_tmp',info))
    }
  })

  $.ajax({
    url:'http://127.0.0.1:9090/api/getproductcom',
    type:'get',
    dataType:'json',
    data:{
        productid:id,
    },
    success:function( info ){
      console.log(info);
      $('.com').html(template('comment',info));
    }

  })
})