$(function () {
  var shopId = 0;
  var areaId = 0;

  function market() {
    $.ajax({

      url: 'http://127.0.0.1:9090/api/getgsshop',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        $('.market1').html(template('shopTpl', info));
      }
    })
  }
  market();

  function location() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getgsshoparea',
      dataType: "json",
      success: function (info) {
        console.log(info);
        $('.market2').html(template('areaTpl', info));
      }
    })
  }
  location();
  function product(shopId, areaId) {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      dataType: 'json',
      data: {
        shopid: shopId,
        areaid: areaId,
      },
      success: function (info) {
        console.log(info);

        $('.product_list ul').html(template('productTpl', info));
      }
    })
  }

  product(shopId, areaId);


  //获取导航li
  var flag = true;
  var tmp = $('.nav_left>ul>li>a');
  //京东
  //  console.log(tmp.eq(0));
  $(tmp).eq(0).on('click', function () {

    console.log($(this).find('ul'));
    //  $(this).find('ul').toggle();
    $(this).next('ul').toggle();
   
    // console.log($(this));
    // console.log($(this).next('ul'));
    if (flag) {
      $(this).next('ul').find('.check').eq(0).show();
    }
    flag = false;
    //让其他盒子隐藏
    // $('.location').hide();
    $('.market2').hide();

    $(this).next('ul').unbind('click').on('click', 'li', function () {
      $(this).find(".check").show();
      $(this).siblings().find(".check").hide();
      shopId = $(this).data("id");
      product(shopId, areaId);
      $(".com").hide();
      var text = $(this).find("a").text();
      $(".jd").text(text);
      console.log(text);

      // $('.market2').show();
      // $('.location').show();
    })
  })

  $(tmp).eq(1).on('click', function () {
    console.log($(this));
    
    $(this).next('ul').toggle();
    console.log($(this).find('ul'));
  
    // console.log($(this));
    // console.log($(this).next('ul'));
    if (flag) {
      $(this).next('ul').find('.check').eq(0).show();
    }
    flag = false;
    //让其他盒子隐藏
    // $('.location').hide();
    $('.market1').hide();
    $(this).next('ul').unbind('click').on('click', 'li', function () {
      //显示隐藏对勾
      $(this).find(".check").show();
      $(this).siblings().find(".check").hide();
      //渲染商品列表
      shopId = $(this).data("id");
      product(shopId, areaId);

      //关闭下拉框
      $(".com").hide();

      var text = $(this).find("a").text().trim();
      console.log(text);
      var str = text.substr(0,2);
      console.log(str);
      $(".loca").text(str);
      // console.log(text);

      // $('.market2').show();
      // $('.location').show();
    })
  })

  $(tmp).eq(2).on('click',function(){
    console.log($(this));
    console.log($(this).eq(2));
    console.log($(this).next('ul'));
    $(this).next("ul").toggle();
    $(this).next("ul").find(".check").show();
    //让其它盒子隐藏
  //  $('.com').hide();
  })
});