function contar() {
    const startNumber = document.getElementById('start')
    const endNumber   = document.getElementById('end')
    const stepNumber  = document.getElementById('step')
    const result      = document.getElementById('result')
  
    // Verifica se algum campo ficou vazio
    if (!startNumber.value || !endNumber.value || !stepNumber.value) {
      result.innerHTML = 'Impossível contar!'
      return
    }
  
    result.innerHTML = 'Contando:<br>🏠 '
  
    let i = Number(startNumber.value)
    let f = Number(endNumber.value)
    let p = Number(stepNumber.value)
  
    // Passo inválido
    if (p <= 0) {
      window.alert('Passo Invalido. Passo 1 considerado.')
      p = 1
    }
  
    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        result.innerHTML += `${c} ✌🏻 `
      }
    } else {
      // Contagem regressiva
      for (let c = i; c >= f; c -= p) {
        result.innerHTML += `${c} ✌🏻 `
      }
    }
  
    result.innerHTML += '🏁 Fim'
  }
  
