class App {
	contructor(window) {
		this.window = window
	}
	
	static capture_webbox() {
		window.webkit.messageHandlers.capture_webbox.postMessage({"":""});
	}
	static save_answer(value) {
		window.webkit.messageHandlers.save_answer.postMessage({"value":value});
	}
	static save_answer_other(question, value) {
		window.webkit.messageHandlers.save_answer_other.postMessage({"question": question,"value":value});
	}
	
}
