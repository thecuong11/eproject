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
function count(arr){
  var len = arr.length;
  var qty = 0;
  for (var i=0; i<len; i++){
    qty += arr[i];
  }
  return qty;
}
function occur(arr) {
  var a = [], b = [], prev;

  arr.sort(function(a,b){return a-b});
  for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
          a.push(arr[i]);
          b.push(1);
      } else {
          b[b.length-1]++;
      }
      prev = arr[i];
  }

  return [a, b];
}
