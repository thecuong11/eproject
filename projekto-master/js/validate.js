var flag_name = 0;
var flag_mail = 0;
var flag_mess = 0;

var nameValidate = (function () {
  var name = document.getElementById('name');
  var nameCheck = document.getElementById('nameCheck');
  return function () {
    if (!name.value.length) {
      nameCheck.style.display = 'initial';
      flag_name = 1;
    }
    else {
      nameCheck.style.display = 'none';
      flag_name = 0;
    }
  };
})();
var mailValidate =
(function () {
  var mail = document.getElementById('mail');
  var mailCheck = document.getElementById('mailCheck');
  return function () {
    if (mail.value.search(/.+@.+/i) < 0) {
      mailCheck.style.display = 'initial';
      flag_mail = 1;
    }
    else {
      mailCheck.style.display = 'none';
      flag_mail = 0;
    }
  };
})();
var messValidate =
(function () {
  var mess = document.getElementById('mess');
  var messCheck = document.getElementById('messCheck');
  return function () {
    if (!mess.value.length) {
      messCheck.style.display = 'initial';
      flag_mess = 1;
    }
    else {
      messCheck.style.display = 'none';
      flag_mess = 0;
    }
  }
})();
function secondFormValidate () {
    nameValidate();
    mailValidate();
    messValidate();
    if (flag_mail + flag_name + flag_mess > 0) return false;
    else return true;
};
var firstFormValidate =
(function () {
  var sub = document.getElementById('sub');
  var subCheck = document.getElementById('subCheck');
  return function () {
    if (sub.value.search(/.+@.+/) < 0) {
      subCheck.style.display = 'initial';
      return false;
    }
    else {
      subCheck.style.display = 'none';
      return true;
    }
  };
})();

document.getElementById('form').onsubmit =
 function () {return secondFormValidate();};
document.getElementById('reset').onclick =
function () {
  document.getElementById('nameCheck').style.display = 'none';
  document.getElementById('messCheck').style.display = 'none';
  document.getElementById('mailCheck').style.display = 'none';
};
