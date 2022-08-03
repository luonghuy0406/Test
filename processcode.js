var code = App.get_arg("code");
displayInterpretation(code, document.getElementById("interpretation"));
interpretScan(code).then(function(result) {
  App.save_answer_other("codeoutput2", JSON.stringify(result));
});