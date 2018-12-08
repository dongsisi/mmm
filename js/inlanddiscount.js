$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getinlanddiscount',
    type:'get',
    dataType:'json',
    success:function( info ){
      console.log(info );
      $('.clearfix').html(template('temTpl',info));
    }
  })
})