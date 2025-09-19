function onDeviceReady() {
    document.getElementById('loadDataBtn').addEventListener('click', loadData);
}

function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('output').innerHTML = data.message;
        }
    };
    xhr.open("GET", "data.json", true);
    xhr.send();
}

document.addEventListener('deviceready', onDeviceReady, false);
