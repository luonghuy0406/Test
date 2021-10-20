class App {
    static onInit() {
       window.addEventListener('message', function(e) {
            if(e.data.function === 'on_init'){
                on_init(e.data.data)
             }
         });
    }

    static save_answer(value) {
        window.parent.postMessage({
            function: 'save_answer',
            data : value
        }, '*');
    }

    static save_answer_other(question,value,type){
        window.parent.postMessage({
            function : 'save_answer_other',
            data : value, 
            type : type,
            questionName:question
        }, '*');
    }

    static capture_webbox(){
        //function capture webbox
    }

  }

  App.onInit();