$(function(){
  var url = urlSearch();
  var id = url.couponid;
  console.log(id);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    dataType:'json',
    data:{
      couponid:id,
    },
    success:function( info ){
      console.log(info);
      $('.kfc_info').html(template('tmpTpl',info));

      //获取返回结果的长度
      var infoLength = info.result.length;
      console.log(infoLength);

      //点击列表菜单，显示模态框
      $('.kfc_info').on('click','li',function(){
        console.log($(this));
        //获取当前点击的下标
        var index = $(this).index();
        console.log(index);
        //获取当前点击的图片
        var currentImg = info.result[index].couponProductImg;
        console.log(currentImg);

        //显示模态框
        $('.mm_mask').css('display','block');
        //  把当前获取的图片赋值给模态框
        $('.mm_mask .pic').html(currentImg);
        //点击事件

        //下一图片
        $('.mm_mask .arrow_right').on('click',function(){
          //判段
          //console.log(infoLength-1);
         if(index<infoLength-1){
           index++;
           currentImg = info.result[index].couponProductImg;
           $('.mm_mask .pic').html(currentImg);
         }
        })

        //上一图片
        $('.mm_mask .arrow_left').on('click',function(){
          if(index>0){
            index--;
            currentImg = info.result[index].couponProductImg;
            $('.mm_mask .pic').html(currentImg);
          }
        })
      })
    }

  })
})