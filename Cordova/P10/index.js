var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        console.log('Cordova is running');
        var btn = document.getElementById("loadBtn");
        if (btn) {
            btn.addEventListener("click", this.loadData);
        }
    },
    loadData: function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "data.json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("Raw response:", xhr.responseText);
                var res = JSON.parse(xhr.responseText);
                console.log("Parsed object:", res);
                document.getElementById("output").innerHTML = res.message;
            }
        };
        xhr.send();
    }
};
app.initialize();
