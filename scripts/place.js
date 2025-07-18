// Função que calcula o wind chill, retorna o resultado (uma linha)
function calculateWindChill(temp, speed, isMetric) {
  if (isMetric) {
    // Fórmula para °C e km/h
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
  } else {
    // Fórmula para °F e mph
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  }
}

// Função para formatar o resultado e exibir ou "N/A"
function displayWindChill() {
  // Pegue os elementos do DOM onde estão temperatura, vento e onde vai mostrar o wind chill
  const tempElem = document.querySelector('#temperature');  // ajustar selector conforme seu HTML
  const speedElem = document.querySelector('#windSpeed');   // ajustar selector conforme seu HTML
  const windChillElem = document.querySelector('#windChill'); // onde mostrar o resultado

  if (!tempElem || !speedElem || !windChillElem) return; // segurança

  // Pega os valores em texto, extrai números e unidades
  const tempText = tempElem.textContent.trim();
  const speedText = speedElem.textContent.trim();

  // Exemplo: tempText = "8°C" ou "45°F", speedText = "10 km/h" ou "5 mph"
  const tempMatch = tempText.match(/(-?\d+\.?\d*)/);
  const speedMatch = speedText.match(/(\d+\.?\d*)/);
  const unitC = tempText.includes('°C');
  const unitF = tempText.includes('°F');
  const unitKmh = speedText.includes('km/h');
  const unitMph = speedText.includes('mph');

  if (!tempMatch || !speedMatch) {
    windChillElem.textContent = "N/A";
    return;
  }

  const temp = parseFloat(tempMatch[1]);
  const speed = parseFloat(speedMatch[1]);

  const isMetric = unitC && unitKmh;
  const isImperial = unitF && unitMph;

  // Condições para cálculo
  if ((isMetric && temp <= 10 && speed > 4.8) || (isImperial && temp <= 50 && speed > 3)) {
    const wc = calculateWindChill(temp, speed, isMetric);
    // Arredondar e formatar com unidade
    windChillElem.textContent = wc.toFixed(1) + (isMetric ? '°C' : '°F');
  } else {
    windChillElem.textContent = "N/A";
  }
}

// Executa ao carregar a página
window.addEventListener('load', displayWindChill);

