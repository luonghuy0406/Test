class App {
    static save_answer(value) {
        let questionName = window.initQuestion
        window.parent.postMessage({function: 'save_answer',data : value, questionName: questionName }, '*');
    }

    static save_answer_other(question,value,type){
        console.log(">>>>save_answer_other_func",question,value,type)
        window.parent.postMessage({function : 'save_answer_other',data : value, type : type, questionName:question}, '*');
    }

    static capture_webbox(){
		//not support now
	}
}
