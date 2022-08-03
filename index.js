window.addEventListener('message', function(e) {
	if(e.data.function === 'on_init'){
        console.log(">>>>>on_init",e)
		on_init(e.data.data)
        initPlatform(e.data.initPlatform)
        window.initQuestion = e.data.questionName
	}
});

function initPlatform(platform = "Android") {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (platform == "iOS") {
        script.src = "./webbox.ios.js";
    } else if (platform == "webapp") {
        script.src = "./webbox.webapp.js";
    }
    head.append(script);
}

