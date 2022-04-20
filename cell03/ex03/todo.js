function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

/**
 * 
 */
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

/**
 * 
 */
function eraseCookie(name) {
	createCookie(name,"",-1);
}

function newlist() {
    let newlist = prompt("New ToDo");
    let div = document.createElement("div");
    if (newlist != null) {
        div.innerHTML = newlist;
        div.classList.add("todo")
        div.onclick = function() { rmlist(this) };
        document.getElementById('ft_list').prepend(div);
        createCookie("todo", newlist);
    }
}

function rmlist(el) {
    let isExecuted = confirm("Veux-tu vraiment me supprimer ?");
    if (isExecuted)
        el.remove();
}
