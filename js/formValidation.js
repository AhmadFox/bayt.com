function InvalidMsg(textbox) {
      if (textbox.value == '') {
        textbox.setCustomValidity('This field is required, Please fill out this field.');
    }
    else {
        textbox.setCustomValidity('');
    }
	if(textbox.value.length >51){
		textbox.setCustomValidity('Sorry Job Title should NOT be more than 50 character.');
	}
    return true;
}
function InvalidEmil(textbox) {
      if (textbox.value == '') {
        textbox.setCustomValidity('This field is required, Please fill out this field.');
    }
    else {
        textbox.setCustomValidity('');
    }
	if(textbox.validity.typeMismatch){
		textbox.setCustomValidity('This field must include "@" example "Hr@bayt.net"');
	}
    return true;
}
function InvalidSite(textbox) {
      if (textbox.value == '') {
        textbox.setCustomValidity('This field is required, Please fill out this field.');
    }
    else {
        textbox.setCustomValidity('');
    }
	if(textbox.validity.typeMismatch){
		textbox.setCustomValidity('This field must include "http://www." example "http://www.bayt.com"');
	}
    return true;
}
function Invalidskills(textbox) {
      if (textbox.value == '') {
        textbox.setCustomValidity('This field is required, Please fill out this field.');
    }
    else {
        textbox.setCustomValidity('');
    }
	if(textbox.value.length > 4000){
		textbox.setCustomValidity('Sorry this field should NOT be more than 4000 character.');
	}
    return true;
}
  var maxL = 0;
  var limit=3999;
  var bName = navigator.appName;

  function taLimit(taObj) {
    if (taObj.value.length > limit) return false;
    return true;
  }

  function taCount(taObj, Cnt) {
    objCnt = createObject(Cnt);
    objVal = taObj.value;
    if (objVal.length < maxL) objVal = objVal.substring(0, maxL);
    if (objCnt) {
      if (bName == "Netscape") {
        objCnt.textContent = maxL + objVal.length;
      } else {
        objCnt.innerText = maxL + objVal.length;
      }
    }
    return true;
	if (taObj.value.length >= limit) return false;
  }

  function createObject(objId) {
    if (document.getElementById) return document.getElementById(objId);
    else if (document.layers) return eval("document." + objId);
    else if (document.all) return eval("document.all." + objId);
    else return eval("document." + objId);
  }

