document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display'),
        numbers = document.querySelectorAll('.number'),
        operators = document.querySelectorAll('.operator'),
        equals = document.querySelector('.equals'),
        clear = document.querySelector('.clear');

  let currentInput = '';
  let operatorUsed = false;

  // 数字ボタンのイベントリスナー
  numbers.forEach(button => {
    button.addEventListener('click', () => {
      if (operatorUsed) {
        display.value = '';  //演算子入力後はリセットする
        operatorUsed = false;
      }
      display.value += button.getAttribute('data-number');
      currentInput += button.getAttribute('data-number');
    });
  });

  // 演算子ボタンのイベントリスナー
  operators.forEach(button => {
    button.addEventListener('click', () => {
      if (!operatorUsed) {
        currentInput += ' ' + button.getAttribute('data-operator') + ' ';
        display.value += ' ' + button.getAttribute('data-operator') + ' ';
        operatorUsed = true;
      }
    });
  });

  // イコールボタンのイベントリスナー
  equals.addEventListener('click', () => {
    try {
      const result = eval(currentInput);  // 計算結果
      display.value = result;  // 結果のみを表示
      currentInput = result.toString();  // 結果を次の計算に利用
    } catch (error) {
      display.value = 'Error';
    }
  });

  // クリアボタンのイベントリスナー
  clear.addEventListener('click', () => {
    display.value = '';  //ディスプレイをクリア
    currentInput = '';  //計算式をリセットする
  });
});
