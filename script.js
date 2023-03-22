//  GetButton.io widget
    
(function () {
    var options = {
        linkedin: "https://www.linkedin.com/in/yash-jindal-bb03051ab/", // LinkedIn
        whatsapp: "+919034468553", // WhatsApp number
        call_to_action: "Hi, How Can I Help You ?", // Call to action
        button_color: "#E74339", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "whatsapp,linkedin", // Order of buttons
    };
    var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

// GetButton.io widget 