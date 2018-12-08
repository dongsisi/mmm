$(function(){
  // 使用iscroll
  new IScroll('.nav_left', {
    scrollY: false,
    scrollX: true
  })



  $.ajax({
    url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
    dataType:'json',
    success:function( info ){
      console.log(info);
      $('.scroll').html(template('scrollTpl',info));
      
      var id = $('.scroll li').data('id');
      console.log(id);
      render(id);
    }
  })

render();
function render(id){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
    dataType:'json',
    data:{
      titleid :id
    },
    success:function( info ){
      console.log(info);
      $('.bargin_content ul').html(template('tempTpl',info));
    }
  })
}

})