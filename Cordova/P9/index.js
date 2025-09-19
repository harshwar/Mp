var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    console.log('cordova running');
    alert('Hello World Harshwardhan KCTYBSCIT06');
  }
};
app.initialize();
