$(function(){
  var url = urlSearch();
  var id = url.brandtitleid;
  console.log(id);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrand',
    dataType:'json',
    data:{
      brandtitleid:id,
    },
    success:function( info ){
      console.log(info);
      $('.sign ul').html(template('brandtitleTpl',info));
    }
  })


  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrandproductlist',
    dataType:'json',
    type:'get',
    data:{
      brandtitleid:id,
      pagesize :4
    },
    success:function( info ){
      console.log( info);
      $('.list_content ul').html(template('tempTpl',info));
    }
  })

  $.ajax({
    url:'http://127.0.0.1:9090/api/getproductcom',
    type:'get',
    dataType:'json',
    data:{
      productid :id,
    },
    success:function( info ){
      console.log(info);
      $('.comment ul').html(template('commentTpl',info));
    }
  })
})