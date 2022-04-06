document.addEventListener("DOMContentLoaded", function() {
    var title = {
        uri_parameter : new URLSearchParams(window.location.search).toString().split('='),
        input_element : document.getElementById("tab-title-input-text-box")
    }

    parseURI(title);
    inputListener(title);

    document.title = title.input_element.value;
});

// If a parameter was supplied, use it as the default value of the title input text box element
function parseURI(title) {
    if(title.uri_parameter.length > 1) {
        //title.input_element.value = title.uri_parameter.replace(/(%20|\s+|\++)/g, ' ').value;
        //title.input_element.value = decodeURIComponent(title.uri_parameter).replace(/(%20|\s+|\++)/g, ' ');
        //title.input_element.value = decodeURIComponent(title.uri_parameter);

        var v1 = new URLSearchParams(window.location.search);
        var v2 = window.location.search.replace(/%20/g, ' ');
        var v3 = v2.split('=');
        var v4 = decodeURIComponent(v3[1]);
        var v5 = v4.replace(/\s+/g, ' ');

        history.replaceState(null, '', [ v3[0], v5 ].join('='));
        document.title = v5;
        document.getElementById("tab-title-input-text-box").value = v5;

        title.input_element.blur();
    } else {
        title.input_element.select();
    }
}

// Update page title to the value of the input element with each keystroke
function inputListener(title) {
    title.input_element.onkeydown = title.input_element.onkeyup = function(key) {
        if(key.keyCode == 13) title.input_element.blur();
        document.title = this.value.replace(/\s+/g, ' ');
        history.replaceState(null, '', '?' + [ title.uri_parameter[0] ? title.uri_parameter[0] : 'n', this.value.replace(/\s+/g, ' ') ].join('='));

		//let key = encodeURIComponent('n');
		//let val = encodeURIComponent(this.value);
		
    	//document.location.search = params;
    };
}



/*
(function() {
    let key = encodeURIComponent('n');
    let value = encodeURIComponent("Test");

    // kvp looks like ['key1=value1', 'key2=value2', ...]
    var kvp = document.location.search.substr(1).split('&');
    let i = 0;

    for(; i < kvp.length; ++i) {
        if(kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if(i >= kvp.length) {
        kvp[kvp.length] = [key,value].join('=');
    }

    // can return this or...
    let params = kvp.join('&');

    // reload page with new params
    document.location.search = params;
})();
*/
