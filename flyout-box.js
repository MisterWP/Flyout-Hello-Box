/* ------------------------------------------------------------------------
	Flyout Hello Box
	
	Developped By: Nicolas Laruelle -> http://www.mister-wp.com
    Version: 1.0
	
	Copyright: Modification, personnal use and commercial use permitted, fork and redistribution prohibited.
------------------------------------------------------------------------- 

Customisation instructions : 

- All occurences of "right" can be changed by "left".

- You can change the variables below :

*/

var paddingTop = 25;
var paddingRight = 20;
var daysCookie = 15; 
var nbrSecWait = 12;

jQuery( document ).ready(function( $ ) {

    $.fn.flyout = function(options) {
        var el = this;
        var edge = options.edge || paddingRight;
        el.css({
            position : "fixed",
            top : paddingTop+"px",
            right : -1 * (el.width() - edge)
        });
    }

        $("#closeFlyout").click(function () { 
            $("#flyout").animate({right : -1 * ($('#flyout').width() + $('#flyout').width() + paddingRight ) }, 400 );
            console.log('Oh, you close ? We don\'t annoy you for x days.');
            setCookie('beQuiet', '1', daysCookie);
        });

    $("#flyout").flyout({"edge" : "0"});

    if(getCookie('beQuiet')=='1')
    {
        console.log('Flyout already closed for x days');
    }
    else
    {
        setTimeout(function()
        { 
            $('#flyout').animate({right : -1 * ($('#flyout').width() - 	        		$('#flyout').width() - paddingRight) }); 

        }, nbrSecWait * 1000);
    }
    
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}