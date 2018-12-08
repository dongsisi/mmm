$(function(){
  var titleId;
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcategorytitle',
    type:'get',
    dataType:'json',
    success:function( info ){
      console.log(info);
      var htmlStr = template('categoryTpl',info);
      $('.category-title').html(htmlStr);
     
     

      //绑定a的点击事件
      $('.category-title').on('click','a',function(){
        var id = $(this).data('id');
        // console.log(id);
        var content = $(this).next()
        console.log(content);
        $(this).next().toggle();
        $.ajax({
          url:'http://127.0.0.1:9090/api/getcategory',
          type:'get',
          dataType:'json',
          data:{
            titleid:id,
          },
          success:function( info ){
            console.log(info);
            var htmlStr = template('category2Tpl',info);
            content.html(htmlStr);
          }
        })
      })
    }
  })


 
})