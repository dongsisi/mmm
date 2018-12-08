$(function(){
 $.ajax({
   url:'http://127.0.0.1:9090/api/getindexmenu',
   type:'get',
   dataType:'json',
   success:function( info ){
     console.log( info );
     var htmlStr = template('navTpl',info);
    //  console.log(htmlStr);
     $('.row').html(htmlStr);
     //给更多加一个点击事件（事件委托）
 $('.row').on('click','li',function(){
  //获取更多的id
  var id = $(this).data('id');
  console.log(id);
  //让第三行导航切块显示
  var more = $('.row li[data-type="1"]');
   more.toggle();

 })
   }
 })

 //渲染折扣商品列表
 $.ajax({
   url:'http://127.0.0.1:9090/api/getmoneyctrl',
   type:'get',
   dataType:"json",
   success:function( info ){
     console.log(info);
     var htmlStr = template('discountTpl',info);
     $('.row2').html(htmlStr);
   }

 })
 

})