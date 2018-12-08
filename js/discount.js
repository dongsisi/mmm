$(function(){

  var url = urlSearch();
  var id = url.productid;
  console.log(id);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getdiscountproduct',
    type:'get',
    dataType:'json',
    data:{
      productid:id
    },
    success:function( info ){
      console.log(info);
      $('.dts_content').html(template('dis_tmp',info));
    }
  })
})