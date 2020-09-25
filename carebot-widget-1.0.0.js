
//require("https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js");
class CareBot{
    constructor(data) {
        // this expects the argument to be an object with a 'theObject' property
        // so you can use it any way you want.
        console.log(data.email) // log it
        this.obj = someArg.theObject   // or save it to a property
        this.email = data.email
        this.practice = data.practice


    }
}

// pass in an object to the constructor
let myCareBot = new CareBot({email: "shaneos29@gmail.com"})

// see the property we saved:
console.log(myCareBot.email)

/*
function require(script) {
    $.ajax({
        url: script,
        dataType: "script",
        async: false,           // <-- This is the key
        success: function () {
            // all good...
          var carebot = new LandbotFrameWidget({
            container: '#carebot',
            index: 'https://chats.landbot.io/v2/H-693794-OMGFTGN1MHEVKEG9/index.html',
          });
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

//
<script src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"></script>
<script>
  var myLandbot = new LandbotLivechat({
    index: 'https://landbot.io/u/XXXX/index.html?name='+containerNameVariable+'&email='+containerEmailVariable,
  });
</script>
*/