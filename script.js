async function executarCodigo() {
  const codigo = document.getElementById("code").value;
  const consoleOutput = document.getElementById("console-output");
  consoleOutput.innerText = ""; // limpa saída anterior

  // guarda o console original
  const consoleLog = console.log;

  // redireciona console.log para o painel
  console.log = function (...args) {
    consoleOutput.innerText += args.join(" ") + "\n";
    consoleLog.apply(console, args);
  };

  try {
    // executa código JS de forma assíncrona
    await eval(`(async () => { ${codigo} })()`);
  } catch (erro) {
    consoleOutput.innerText += "⚠️ Erro: " + erro.message + "\n";
  }

  // restaura o console original
  console.log = consoleLog;
}
