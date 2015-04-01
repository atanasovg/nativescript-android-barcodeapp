var application = require("application");
application.mainModule = "main-page";

application.onLaunch = function(intent) {
	if(application.android){
		application.android.onActivityResult = function(requestCode, resultCode, intent){
			// the scan result will be received here
			console.log("onActivityResult callback");
		}
	}
}

application.start();
