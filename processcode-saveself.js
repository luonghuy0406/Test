var code = App.get_arg("code");
displayInterpretation(code, document.getElementById("interpretation"));
interpretScan(code).then(function(result) {
  App.save_answer(JSON.stringify(result));
});