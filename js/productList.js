$(function(){
  var url = urlSearch();
  console.log(url);
  var id = url.categoryId;
  var pageid = 1;
  var pages;

//  console.log(id);
  function urlSearch(){
    var str = location.search; // 获取地址栏参数

  // 解码成中文
  str = decodeURI( str );   // "?key=耐克&age=18&desc=帅"

  // 去掉问号
  // str.slice( start, end )
  // (1) 包括start, 不包括end
  // (2) 如果end不写, 可以截取到最后
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
 
  console.log(id)
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcategorybyid',
    type:'get',
    dataType:'json',
    data:{
      categoryid:id,
    },
    success:function( info ){
      console.log(info);
      var htmlStr = template('categoryidTpl',info);
      $('.content_title').html(htmlStr);
      var htmlStr3 = template('navTpl',info);
      $('.list_title').html(htmlStr3);
    }
  })
  //根据商品id渲染商品列表
function render(page){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getproductlist',
    type:'get',
    dataType:'json',
    data:{
      categoryid:id,
      pageid:pageid,
    },
    success:function( info ){
      console.log( info );
      var htmlStr = template('categoryidTpl',info);
      $('.content_title').html(htmlStr);
    
      pages = Math.ceil(info.totalCount / info.pagesize);
      console.log(pages);
      var htmlStr2 = template('pageTpl',{
        pageid:pageid,
        pages:pages
      });
      $('#dropDown').html(htmlStr2);
    }
  })
}
  render();

//点击下一页
  $('.page2').on('click',function(){
    if(pageid>pages){
      return;
    }
    pageid++;
    render();
  })
//点击上一页
$('.page1').on('click',function(){
  if(pageid==1){
    return;
  }
  pageid--;
  render();
})
//下拉页码
  $('#dropDown').on('change',function(){
     pageid = $(this).val();
     render();
  })

})