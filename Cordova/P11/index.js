var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        console.log('Cordova is running');
        var btn = document.getElementById("addBtn");
        if (btn) {
            btn.addEventListener("click", this.businessLogic);
        }
    },
    businessLogic: function() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers!");
            return;
        }
        var sum = num1 + num2;
        document.getElementById("output").innerHTML = "Result: " + sum;
    }
};
app.initialize();
