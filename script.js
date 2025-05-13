function executarCodigo() {
  const codigo = document.getElementById("code").value;
  const consoleOutput = document.getElementById("console-output");
  consoleOutput.innerText = ""; // limpa saída anterior

  // redireciona console.log para a tela
  const consoleLog = console.log;
  console.log = function (...args) {
    consoleOutput.innerText += args.join(" ") + "\n";
    consoleLog.apply(console, args); // opcional: mostra no devtools também
  };

  try {
    eval(codigo);
  } catch (erro) {
    consoleOutput.innerText += "Erro: " + erro.message;
  }

  console.log = consoleLog; // restaura console original
}
