$(function(){
  var pageid = 0;
  var pages;
  
  render();
    
 function render(){
  $.ajax({
    type: 'get',
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: pageid
      },
      dataType: 'json',
      success: function (info){
        console.log(info);
        //渲染商品信息
        $('.discount').html(template('moneyctrlTpl',info));

        //处理分页
        //获取分页
        pages = Math.ceil(info.totalCount/info.pagesize);
        console.log(pages);
          //渲染分页
        $('#dropDown').html(template('paginatorTpl',{
        pageid:pageid,
        pages:pages
        }));
      }
  })

 }


 //下一页
 $('.page2').on('click',function(){
   if(pages<=pageid){
     return;
   }
   pageid++;
   render();
 })
 //上一页
 $('.page1').on('click',function(){
   if(pages==0){
     return;
   }
   pageid--;
   render();
 })
})