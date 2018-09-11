$(document).ready(function(){
    /*
  $("#diaries").click(function(){
    change_category('diaries');
    $.get("/shop.html/diaries",function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
      $("#shoot").html(change_content('diaries',JSON.parse(data)));
      hauver();
    });
  });
  $("#calendars").click(function(){
    change_category('calendars');
    $.get("/shop.html/calendars",function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
      $("#shoot").html(change_content('calendars',JSON.parse(data)));
      hauver();
    });
  });
  $("#pens").click(function(){
    change_category('pens');
    $.get("/shop.html/pens",function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
      $("#shoot").html(change_content('pens',JSON.parse(data)));
      hauver();
    });
  });  */

////////
/*
<div class="container">
  <div class="item-flex">
    <div class="item-image">
      <div><img src="images/d2.jpg" /></div>
      <div><img src="images/d2-2.jpg" /></div>
    </div>
    <div class="info">
      <p class="name">Diaries 1</p>
      <p class="price">666</p>
      <p class="des">this is some text 1zz
        zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        zzzzzzzzzzzzzzzzzzzzzz</p>
      <p>Quantity: <span class="qty">1</span><span class="plus">+</span><span class="minus">&#8211;</span></p>
      <button id="buy" type="button" class="btn btn-outline-dark">ADD TO CART</button>
    </div>
  </div>
</div>   */

/*
function change_content(category, item_id, dataJson){
  var len = dataJson[category].length;
  var html = '';
  for (var i=0; i<len ; i++) {
    if (dataJson[category][i].id == item_id) {
      var addition = '<div class="container">\
        <div class="item-flex">\
          <div class="item-image">\
            <div><img src="images/'+ dataJson[category][i].image1 +'" /></div>\
            <div><img src="images/'+ dataJson[category][i].image2 +'" /></div>\
          </div>\
          <div class="info">\
            <p class="name">'+ dataJson[category][i].name +'</p>\
            <p class="price">'+ dataJson[category][i].price +'</p>\
            <p class="des"> '+ dataJson[category][i].des +' </p>\
            <p>Quantity: <span class="qty">1</span><span class="plus">+</span><span class="minus">&#8211;</span></p>\
            <button id="buy" type="button" class="btn btn-outline-dark">ADD TO CART</button>\
          </div>\
        </div>\
      </div>';
      html += addition;
      break;
    }
  }
  return html;
}  */
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
  $("#plus").click(function(){
    $("#qty").html( 'Quantity: ' + (Number($("#qty").html().slice(10)) + 1) );
  });
  $("#minus").click(function(){
    if ($("#qty").html().slice(10) >= 1)
      $("#qty").html( 'Quantity: ' + (Number($("#qty").html().slice(10)) - 1) );
  });
  $("#buy").click(function(){
    var addition =  $("#item_id").html();
    var x = '';
    var times = (Number($("#qty").html().slice(10)));
    for (var i=0; i<times; i++)
      x+= addition +  ',' ;
    localStorage.myBasket += x;


    var arr = localStorage.myBasket.split(",");
    arr.pop();
    //console.log(arr);
    $("#bag").html( count(occur(arr)[1]) );

  });


});
