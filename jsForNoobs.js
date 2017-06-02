function setHtmlOf(id, value) {
    "use strict";
    document.getElementById(id).innerHTML += value;
}

function getHtmlOf(id) {
    "use strict";
    return document.getElementById(id).innerHTML;
}

function setValueOfAttribute(id, attribute, value) {
    "use strict";
    document.getElementById(id).setAttribute(attribute, value);
}

function getValueOfAttribute(id, attribute) {
    "use strict";
    if(document.getElementById(id).getAttribute(attribute)!=null) {
        return document.getElementById(id).getAttribute(attribute);
    }
    return '';
}

function setColorOf(id, color) {
    "use strict";
    document.getElementById(id).style = getValueOfAttribute(id, 'style') + " color: " + color;
}

function setBackGroundColorOf(id, color) {
    "use strict";
    document.getElementById(id).style = getValueOfAttribute(id, 'style') + " background-color: " + color;
}

function setWidthOf(id, width) {
    "use strict";
    document.getElementById(id).style = getValueOfAttribute(id, 'style') + " width: " + width;
}

function setHtmlOfFrom(idOf, idFrom) {
    "use strict";
    document.getElementById(idOf).innerHTML = document.getElementById(idFrom).value;
}

function validateFormBeforeSubmit(id) {
    "use strict";
    var form = document.forms[id], inputs = form.getElementsByTagName('input');
    var selects = form.getElementsByTagName('select');
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == '') {
            alert("all fields must be filled out");
            return false;
        }
    }
    for (var j = 0; j < selects.length; j++) {
        if(selects[j].value == '') {
            alert("all fields must be filled out");
            return false;
        }
    }
}

//There are times when you prefer a given functionality only happen once, similar to the way you'd use an onload event.  This code provides you said functionality:
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

var getAbsoluteUrl = (function() {
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();

// Usage
//getAbsoluteUrl('/something'); // https://davidwalsh.name/something

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function scrollTo(id) 
{
    $('html, body').animate({ scrollTop: $(id).offset().top }, 'slow');
    return false;
}

function getUrlVars() 
{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}
// USAGE var param = getUrlVars()["param"]; // from www.test.com?param=3

function receiveFromPostRequest(backendPageUrl, vars, idOutput)
{
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = backendPageUrl;
    hr.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            document.getElementById(idOutput).innerHTML=return_data;
        }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
}
// usage receiveFromPostRequest("serverpage.com", "var1=33&var2=john, "outputDiv")