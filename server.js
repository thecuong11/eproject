var express = require('express');
var app = express();
var fs = require('fs');

/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zxc1@345",
  database: ""
});*/
app.use(express.static('eprojectt'));

 /*var d_1 = {"diaries":[{"id":1,"des":"day la mo ta so 1","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":2,"des":"day la mo ta so 2","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":3,"des":"day la mo ta so 3","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":4,"des":"day la mo ta so 4","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":5,"des":"day la mo ta so 5","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":6,"des":"day la mo ta so 6","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":7,"des":"day la mo ta so 7","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":8,"des":"day la mo ta so 8","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":9,"des":"day la mo ta so 9","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},{"id":10,"des":"day la mo ta so 10","image1":"d2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"}],"calendars":[{"id":11,"des":"day la mo ta so 11","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":12,"des":"day la mo ta so 12","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":13,"des":"day la mo ta so 13","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":14,"des":"day la mo ta so 14","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":15,"des":"day la mo ta so 15","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":16,"des":"day la mo ta so 16","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":17,"des":"day la mo ta so 17","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":18,"des":"day la mo ta so 18","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":19,"des":"day la mo ta so 19","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"},{"id":20,"des":"day la mo ta so 20","image1":"c1.jpg","image2":"c1-1.jpg","name":"calendar 1","price":"777"}],"pens":[{"id":21,"des":"day la mo ta so 21","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":22,"des":"day la mo ta so 22","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":23,"des":"day la mo ta so 23","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":24,"des":"day la mo ta so 24","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":25,"des":"day la mo ta so 25","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":26,"des":"day la mo ta so 26","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":27,"des":"day la mo ta so 27","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":28,"des":"day la mo ta so 28","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":29,"des":"day la mo ta so 29","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"},{"id":30,"des":"day la mo ta so 30","image1":"pen1.jpg","image2":"pen1-1.jpg","name":"pen 1","price":"888"}]} */

var d_1 =
 {"diaries":[
	{"id":1,"des":"Make 2019 your best year ever with this stylish A5 Bonded Leather Daily Diary. In sophisticated charcoal grey, the diary includes daily and monthly views, perfect for those who like to plan in great detail. With stickers for customisation and pages for keeping track of your addresses, expenses, favourite restaurants and more, it has everything you need to start living your best life today. Also comes in blush and dusk blue.","image1":"da1.jpg","image2":"da1-2.jpg","name":"diaries 2","price":"666"},
	{"id":2,"des":"Get the whole family organised in style for 2019 with our much-loved A5 Bonded Leather Weekly Family Diary. Featuring sweet hand-illustrated designs, it’s perfect for managing the family’s schedule, planning meals for the week, storing contacts and other important information, and more. This can also function as the perfect student diary – designate a column for each subject and plan your study, due dates and events with ease. ","image1":"da2.jpg","image2":"d2-2.jpg","name":"diaries 2","price":"666"},
	{"id":3,"des":"day la mo ta so 3","image1":"da3.jpg","image2":"da3-2.jpg","name":"diaries 2","price":"666"},
	{"id":4,"des":"day la mo ta so 4","image1":"da4.jpg","image2":"da4-2.jpg","name":"diaries 2","price":"666"},
	{"id":5,"des":"day la mo ta so 5","image1":"da5.jpg","image2":"da5-2.jpg","name":"diaries 2","price":"666"},
	{"id":6,"des":"day la mo ta so 6","image1":"da6.jpg","image2":"da6-2.jpg","name":"diaries 2","price":"666"},
	{"id":7,"des":"day la mo ta so 7","image1":"da7.jpg","image2":"da7-2.jpg","name":"diaries 2","price":"666"},
	{"id":8,"des":"day la mo ta so 8","image1":"da8.jpg","image2":"da8-2.jpg","name":"diaries 2","price":"666"},
	{"id":9,"des":"day la mo ta so 9","image1":"da9.jpg","image2":"da9-2.jpg","name":"diaries 2","price":"666"},
	{"id":10,"des":"day la mo ta so 10","image1":"da10.jpg","image2":"da10-2.jpg","name":"diaries 2","price":"666"},
	{"id":11,"des":"day la mo ta so 11","image1":"da11.jpg","image2":"da11-2.jpg","name":"diaries 2","price":"666"},
	{"id":12,"des":"day la mo ta so 12","image1":"da12.jpg","image2":"da12-2.jpg","name":"diaries 2","price":"666"},
	{"id":13,"des":"day la mo ta so 13","image1":"da13.jpg","image2":"da13-2.jpg","name":"diaries 2","price":"666"},
	{"id":14,"des":"day la mo ta so 14","image1":"da14.jpg","image2":"da14-2.jpg","name":"diaries 2","price":"666"}
	//{"id":15,"des":"day la mo ta so 15","image1":"da15.jpg","image2":"da15-2.jpg","name":"diaries 2","price":"666"}
	],

"calendars":[
	{"id":16,"des":"day la mo ta so 16","image1":"ca1.jpg","image2":"c11-2.jpg","name":"calendar 1","price":"777"},
	{"id":17,"des":"day la mo ta so 17","image1":"ca2.jpg","image2":"ca2-2.jpg","name":"calendar 1","price":"777"},
	{"id":18,"des":"day la mo ta so 18","image1":"ca3.jpg","image2":"ca3-2.jpg","name":"calendar 1","price":"777"},
	{"id":19,"des":"day la mo ta so 19","image1":"ca4.jpg","image2":"ca4-2.jpg","name":"calendar 1","price":"777"},
	{"id":20,"des":"day la mo ta so 20","image1":"ca5.jpg","image2":"ca5-2.jpg","name":"calendar 1","price":"777"},
	{"id":21,"des":"day la mo ta so 21","image1":"ca6.jpg","image2":"ca6-2.jpg","name":"calendar 1","price":"777"},
	{"id":22,"des":"day la mo ta so 22","image1":"ca7.jpg","image2":"ca7-2.jpg","name":"calendar 1","price":"777"},
	{"id":23,"des":"day la mo ta so 23","image1":"ca8.jpg","image2":"ca8-2.jpg","name":"calendar 1","price":"777"},
	{"id":24,"des":"day la mo ta so 24","image1":"ca9.jpg","image2":"ca9-2.jpg","name":"calendar 1","price":"777"},
	{"id":25,"des":"day la mo ta so 25","image1":"ca10.jpg","image2":"c10-2.jpg","name":"calendar 1","price":"777"},
	{"id":26,"des":"day la mo ta so 26","image1":"ca11.jpg","image2":"c11-2.jpg","name":"calendar 1","price":"777"},
	{"id":27,"des":"day la mo ta so 27","image1":"ca12.jpg","image2":"c12-2.jpg","name":"calendar 1","price":"777"},
	{"id":28,"des":"day la mo ta so 28","image1":"ca13.jpg","image2":"c13-2.jpg","name":"calendar 1","price":"777"},
	{"id":29,"des":"day la mo ta so 29","image1":"ca14.jpg","image2":"c14-2.jpg","name":"calendar 1","price":"777"}
	],
"pens":[
	{"id":30,"des":"day la mo ta so 30","image1":"pa1.jpg","image2":"pa1-2.jpg","name":"pen 1","price":"888"},
	{"id":31,"des":"day la mo ta so 31","image1":"pa2.jpg","image2":"pa2-2.jpg","name":"pen 1","price":"888"},
	{"id":32,"des":"day la mo ta so 32","image1":"pa3.jpg","image2":"pa3-2.jpg","name":"pen 1","price":"888"},
	{"id":33,"des":"day la mo ta so 33","image1":"pa4.jpg","image2":"pa4-2.jpg","name":"pen 1","price":"888"},
	{"id":34,"des":"day la mo ta so 34","image1":"pa5.jpg","image2":"pa5-2.jpg","name":"pen 1","price":"888"},
	{"id":35,"des":"day la mo ta so 35","image1":"pa6.jpg","image2":"pa6-2.jpg","name":"pen 1","price":"888"},
	{"id":36,"des":"day la mo ta so 36","image1":"pa7.jpg","image2":"pa7-2.jpg","name":"pen 1","price":"888"},
	{"id":37,"des":"day la mo ta so 37","image1":"pa8.jpg","image2":"pa8-2.jpg","name":"pen 1","price":"888"},
	{"id":38,"des":"day la mo ta so 38","image1":"pa9.jpg","image2":"pa9-2.jpg","name":"pen 1","price":"888"},
	{"id":39,"des":"day la mo ta so 39","image1":"pa10.jpg","image2":"pa10-2.jpg","name":"pen 1","price":"888"},
	{"id":40,"des":"day la mo ta so 40","image1":"pa11.jpg","image2":"pa11-2.jpg","name":"pen 1","price":"888"},
	{"id":41,"des":"day la mo ta so 41","image1":"pa12.jpg","image2":"pa12-2.jpg","name":"pen 1","price":"888"},
	{"id":42,"des":"day la mo ta so 42","image1":"pa13.jpg","image2":"pa13-2.jpg","name":"pen 1","price":"888"},
	{"id":43,"des":"day la mo ta so 43","image1":"pa14.jpg","image2":"pa14-2.jpg","name":"pen 1","price":"888"},
	{"id":44,"des":"day la mo ta so 44","image1":"pa15.jpg","image2":"pa15-2.jpg","name":"pen 1","price":"888"}
]};






app.get('/', function (req, res) {
  //console.log(__dirname);
  res.sendFile( __dirname + "/" + "index.html");
  res.end();
});
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
function change_item(category, item_id, dataJson){
  var len = dataJson[category].length;
  var html = '';
  for (var i=0; i<len ; i++) {
    if (dataJson[category][i].id == item_id) {
      var addition = '<div class="cover container">\
      <div class="navig">\
      <a href="/item?item_id='+ (dataJson[category][i].id-1) + '&cat=' + category +'">prev</a>\
      <a href="/item?item_id='+ (dataJson[category][i].id+1) + '&cat=' + category +'">next</a>\
      </div>\
        <div class="item-flex">\
          <div class="item-image">\
            <div><img src="images/'+ dataJson[category][i].image1 +'" /></div>\
            <div><img src="images/'+ dataJson[category][i].image2 +'" /></div>\
          </div>\
          <div class="info">\
            <p class="name">'+ dataJson[category][i].name +'</p>\
            <p class="price">'+ dataJson[category][i].price +'</p>\
            <p class="des"> '+ dataJson[category][i].des +' </p>\
            <p><span id="qty" class="badge badge badge-secondary">Quantity: 1</span>\
            <button id="plus" type="button" class="btn btn-outline-dark">+</button>\
            <button id="minus" type="button" class="btn btn-outline-dark">&#8211;</button></p>\
            <button id="buy" type="button" class="btn btn-outline-dark">ADD TO CART</button>\
          </div>\
        </div>\
      </div>';
      html += addition;
      break;
    }
  }
  return html;
}
/*app.get('/shop.html', function (req, res) {
  console.log("ok");
  var sen = {
    "main": d_1,
    "sub": req.body.cat
  };
  console.log(sen);
  res.jsonp(JSON.stringify(sen));
});  */
/*
app.get('/shop.html/calendars', function (req, res) {
  console.log("ok");
  res.jsonp(JSON.stringify(d_1));
});
app.get('/shop.html/pens', function (req, res) {
  console.log("ok");
  res.jsonp(JSON.stringify(d_1));
}); */
app.get('/shop.html/more', function (req, res) { //thay d_1 vang data khac
  console.log("ok");
  if (req.query.flag == 0)
    res.jsonp(JSON.stringify(d_1));
});



// category page
app.get('/shop', function (req, res) {  //shop?cat=diaries
  console.log(req.query.cat);
  var cat = req.query.cat;

  var text = '';
  var addition = change_content(req.query.cat, d_1);
  var ending = '</div>\
              </div>\
              <div style="text-align:center; margin: 20px 0;">\
                <button id="more" type="button" class="btn btn-outline-dark">Load More</button>\
              </div>\
            </main>\
            <footer class="">\
              <div class="container">\
                <div class="link-container">\
                  <div><a href="#">FAQs</a></div>\
                  <div><a href="#">About</a></div>\
                  <div><a href="#">Contact</a></div>\
                  <div><a href="#">Stores List</a></div>\
                </div>\
                <div class="social">\
                  <a href="#" class="fa fa-facebook"></a>\
                  <a href="#" class="fa fa-twitter"></a>\
                </div>\
              </div>\
              RYANA CALENDARS\
            </footer>\
            <div id="curCat" style="display:none;">'+req.query.cat+'</div>\
            </body>\
            <script src="js/shop.js"></script>\
            </html>';



  fs.readFile(__dirname  + "/" + "eprojectt/shop2.html" , function(err, data) {
    if (err) throw err;
    text = data;
    //console.log('11111');


    text = text + addition + ending;
    fs.writeFileSync(__dirname  + "/" + "eprojectt/shop.html", text,  function (err) {
      if (err) throw err;
      //console.log('Saved!');

    });

     res.sendFile( __dirname  + "/" + "eprojectt/shop.html" );

  });
});


//item page
app.get('/item', function (req, res) {  //shop?cat=diaries
  console.log('haha ' + req.query.item_id + "  " + req.query.cat);

  var text = '';
  var addition = change_item(req.query.cat, req.query.item_id, d_1);
  var ending =
'</main>\
<footer class="">\
  <div class="container">\
    <div class="link-container">\
      <div><a href="faqs.html">FAQs</a></div>\
      <div><a href="aboutUs.html">About</a></div>\
      <div><a href="contact-us.html">Contact</a></div>\
      <div><a href="#">Stores List</a></div>\
    </div>\
    <div class="social">\
      <a href="#" class="fa fa-facebook"></a>\
      <a href="#" class="fa fa-twitter"></a>\
    </div>\
  </div>\
  RYANA CALENDARS\
</footer>\
<div id="curCat" style="display:none;">'+req.query.cat+'</div>\
<div id="item_id" style="display:none;">'+req.query.item_id+'</div>\
</body>\
<script src="js/item.js"></script>\
</html>';



  fs.readFile(__dirname  + "/" + "eprojectt/item2.html" , function(err, data) {
    if (err) throw err;
    text = data;
    //console.log('11111');


    text = text + addition + ending;
    fs.writeFileSync(__dirname  + "/" + "eprojectt/item.html", text,  function (err) {
      if (err) throw err;
      //console.log('Saved!');

    });

     res.sendFile( __dirname  + "/" + "eprojectt/item.html" );

  });
});
app.get('/viewbag/data', function (req, res) { //thay d_1 vang data khac
  console.log(req.query.item_list);

    res.jsonp(JSON.stringify(d_1));
});






//////////////////////////////////////////////////////
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("listening at http://%s:%s", host, port)

});
