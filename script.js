const colorPicker = document.getElementById('color-picker');
const hexResultText = document.getElementById('hex-result');
const rgbResultText = document.getElementById('rgb-result');

colorPicker.addEventListener('input', () => {
  colorPickerValue = colorPicker.value;
  hexResultText.innerHTML = `HEX: ${colorPickerValue}`;
  rgbValue = hexToRgb(colorPickerValue);
  rgbResultText.innerHTML = `RGB: ${rgbValue}`;
});

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length == 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 16), 16);
  return `rgb(${r},${g},${b})`;
}
