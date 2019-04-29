var divBrowse = document.getElementById('browse');
var divEditscript = document.getElementById('editscript');
var divAddkeywords = document.getElementById('addkeywords');
var divLoading = document.getElementById('loading');

divLoading.style.display = 'none';
divBrowse.onclick = function(){
    divLoading.style.display = 'block';
}
divEditscript.onclick = function () {
    divLoading.style.display = 'block';
}
divAddkeywords.onclick = function () {
    divLoading.style.display = 'block';
}


