function calculateWindChill(temp, speed, isMetric) {
  if (isMetric) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
  } else {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  }
}

function displayWindChill() {
  const tempElem = document.querySelector('#temperature');
  const speedElem = document.querySelector('#windSpeed');
  const windChillElem = document.querySelector('#windChill');

  if (!tempElem || !speedElem || !windChillElem) return;

    const tempText = tempElem.textContent.trim();
  const speedText = speedElem.textContent.trim();

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

  if ((isMetric && temp <= 10 && speed > 4.8) || (isImperial && temp <= 50 && speed > 3)) {
    const wc = calculateWindChill(temp, speed, isMetric);
    windChillElem.textContent = wc.toFixed(1) + (isMetric ? '°C' : '°F');
  } else {
    windChillElem.textContent = "N/A";
  }
}

window.addEventListener('load', displayWindChill);

