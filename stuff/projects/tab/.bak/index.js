document.addEventListener("DOMContentLoaded", function() {
    const titleParam = new URLSearchParams(window.location.search).toString().split('=')[1];
    const titleElement = document.getElementById("tabTitle");

    // Unfocus text input element when enter is pressed, update page title
    titleElement.onkeydown = titleElement.onkeyup = function(key) {
        if(key.keyCode == 13) titleElement.blur();
        document.title = this.value;
    };

    // If a parameter was supplied, use it as the default value of the title input element
    if(titleParam) {
        //titleElement.value = titleParam;
        titleElement.value = titleParam;
        titleElement.blur()
    } else {
        titleElement.select();
    }

    // Update the page's title to the value of the input element
    document.title = titleElement.value;
});
