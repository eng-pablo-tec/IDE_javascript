async function executarCodigo() {
  const codigo = document.getElementById("code").value;
  const consoleOutput = document.getElementById("console-output");
  consoleOutput.innerText = ""; // limpa saída anterior

  // guarda o console original
  const consoleLog = console.log;

  // redireciona console.log para a janela personalizada
  console.log = function (...args) {
    consoleOutput.innerText += args.join(" ") + "\n";
    consoleLog.apply(console, args); // opcional: também mostra no devtools
  };

  try {
    // executa o código JS como async para aguardar promises
    await eval(`(async () => { ${codigo} })()`);
  } catch (erro) {
    consoleOutput.innerText += "Erro: " + erro.message + "\n";
  }

  // restaura o console original depois que tudo terminar
  console.log = consoleLog;
}
