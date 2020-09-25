class CareBot {
    constructor(data) {
    // this expects the argument to be an object with a 'theObject' property
    // so you can use it any way you want.
    this.email = '';
    this.practice = '';

    if (data.email) {
      this.email = data.email
    }
    
    if (data.practice){
      this.practice = data.practice
    }
    
    this.index =  'https://chats.landbot.io/v2/H-700085-NTWCJYM3ANRTJ41U/index.html?practice='+this.practice+'&email='+this.email
  
    this.loadLibray = function(index) {
      jQuery.ajax({
        url: "https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js",
        dataType: "script",
        async: false,           // <-- This is the key
        success: function () {
            // all good...
            //console.log('Loaded library successfully')
            var myLandbot = new LandbotLivechat({
                 index: index,
            });
            myLandbot.on('landbot-load', function() {
              myLandbot.sendProactive({
                "message": "Please click here to use our COVID Assessment System",
                "author": "CareBot",
                "avatar": "https://carebot-gp.s3-eu-west-1.amazonaws.com/mycorkgp/download.jpeg",
                "extra": {
                "hide_textbox": true
                }
              });
            });
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
      });
    }
    this.loadLibray(this.index)
    }

}