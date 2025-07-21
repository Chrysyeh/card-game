const signs = [
  '牡羊座', '金牛座', '雙子座', '巨蟹座', '獅子座', '處女座',
  '天秤座', '天蠍座', '射手座', '摩羯座', '水瓶座', '雙魚座'
];

function fillSelect(id) {
  const select = document.getElementById(id);
  signs.forEach(sign => {
    const option = document.createElement('option');
    option.value = sign;
    option.textContent = sign;
    select.appendChild(option);
  });
}

['sun-select', 'moon-select', 'rising-select'].forEach(fillSelect);

document.getElementById('generate').addEventListener('click', () => {
  const sun = document.getElementById('sun-select').value;
  const moon = document.getElementById('moon-select').value;
  const rising = document.getElementById('rising-select').value;
  const result = `太陽 ${sun}、月亮 ${moon}、上升 ${rising} 的組合！`;
  document.getElementById('result').textContent = result;
});
