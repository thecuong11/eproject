$(document).ready(function(){
/*
  function hauver() {
    $(".item-card").hover(function(){
      $(this).find("div").eq(1).stop();
      $(this).find("div").eq(0).stop();
      $(this).find("div").eq(0).fadeOut(200, function(){
        $(this).next().fadeIn(200);});
      },
      function(){
        $(this).find("div").eq(1).stop();
        $(this).find("div").eq(0).stop();
        $(this).find("div").eq(1).fadeOut(200, function(){
          $(this).prev().fadeIn(200);});
      });
  }

    var z = JSON.parse(d_1);
    var keep_check=0;

    console.log(z);
    function change_content(category, dataJson){
      var len = dataJson[category].length;
      var html = '';
      for (var i=0; i<len && keep_check < len; i++, keep_check++) {
        var addition = '<div class="item-card">\
                      <div class="item-img first">\
                        <img src="images/' + dataJson[category][i].image1 + '" /> \
                      </div>\
                      <div class="item-img second">\
                        <img src="images/' + dataJson[category][i].image2 + '" /> \
                      </div>\
                      <p>' + dataJson[category][i].name + '</p>\
                      <p>' + dataJson[category][i].price + '</p>\
                    </div>';
        html += addition;
      }
      return html;
    }
  if (localStorage.currentCategory !== undefined)
    change_category(localStorage.currentCategory);
  $("#shoot").append(change_content('diaries',z));
  hauver();

  $("#more").click(function(){  //thay z bang new json later
    if ($("#diaries").parent().hasClass('active'))
      $("#shoot").append(change_content('diaries',z));
    else if ($("#calendars").parent().hasClass('active'))
      $("#shoot").append(change_content('calendars',z));
    else if ($("#pens").parent().hasClass('active'))
      $("#shoot").append(change_content('pens',z));
    hauver();
  });
  function change_category(category){
    $('.nav-link').each(function(){
      if ($(this).parent().hasClass('active'))
        $(this).parent().removeClass('active');
    });
    $('#'+category).parent().addClass('active');
    //localStorage.currentCategory = category;
    keep_check = 0;
    $("#shoot").html(change_content(category,z));
    hauver();
    keep_check = 0;
  }


  $("#diaries").click(function(){change_category('diaries');});
  $("#calendars").click(function(){change_category('calendars');});
  $("#pens").click(function(){change_category('pens');});
*/
  if (localStorage.myBasket === undefined) {
    localStorage.myBasket = '';
    $("#bag").html(0);
  }
  else {
    var arr = localStorage.myBasket.split(",");
    arr.pop();
    //console.log(arr);
    $("#bag").html( count(occur(arr)[1]) );
  }
  function change_category(category){
    $('.nav-link').each(function(){
      if ($(this).parent().hasClass('active'))
        $(this).parent().removeClass('active');
    });
    $('#'+category).parent().addClass('active');
  }
  function hauver() {
    $(".item-card").hover(function(){
      $(this).find("div").eq(1).stop();
      $(this).find("div").eq(0).stop();
      $(this).find("div").eq(0).fadeOut(200, function(){
        $(this).next().fadeIn(200);});
      },
      function(){
        $(this).find("div").eq(1).stop();
        $(this).find("div").eq(0).stop();
        $(this).find("div").eq(1).fadeOut(200, function(){
          $(this).prev().fadeIn(200);});
      });
  }
  function change_content(category, dataJson){
    var len = dataJson[category].length;
    var html = '';
    for (var i=0; i<len ; i++) {
      var addition = '<div id="g' + dataJson[category][i].id  +  '" class="item-card">\
                    <div class="item-img first">\
                      <a href="/item?item_id=' +
                        dataJson[category][i].id + '&cat=' + category +
                        '"><img src="images/' + dataJson[category][i].image1 + '" /></a> \
                    </div>\
                    <div class="item-img second">\
                      <a href="/item?item_id=' +
                        dataJson[category][i].id + '&cat=' + category +
                        '"><img src="images/' + dataJson[category][i].image2 + '" /></a> \
                    </div>\
                    <p>' + dataJson[category][i].name + '</p>\
                    <p>' + dataJson[category][i].price + '</p>\
                  </div>';
      html += addition;
    }
    return html;
  }
  hauver();
  change_category($("#curCat").html());


  var flag = 0;
  $("#more").click(function(){  //thay z bang new json later
    $.get("/shop.html/more",{"flag": flag},function(data,status){
      var z = JSON.parse(data);
      if ($("#diaries").parent().hasClass('active'))
        $("#shoot").append(change_content('diaries',z));
      else if ($("#calendars").parent().hasClass('active'))
        $("#shoot").append(change_content('calendars',z));
      else if ($("#pens").parent().hasClass('active'))
        $("#shoot").append(change_content('pens',z));
      hauver();
      flag = 1;
    });
  });





});
