$(function(){
  var url = new urlSearch();
  var id = url.productid;
  console.log(id);

$.ajax({
  type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data:{
      productid:id, 
    },
    dataType:'json',
    success:function(info){
    console.log( info );
    $('.main_content').html(template('moneyTpl',info));
  }
})

})