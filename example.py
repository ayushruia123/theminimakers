<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Calculator</title>
    <style>
        .calculator {
            max-width: 300px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
        }
        .calculator input[type="text"] {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            font-size: 18px;
        }
        .calculator button {
            width: 45%;
            padding: 10px;
            margin: 5px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            outline: none;
            background-color: #f0f0f0;
        }
        .calculator button:hover {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <br>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="operation('+')">+</button>
        <br>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="operation('-')">-</button>
        <br>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="operation('*')">*</button>
        <br>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="clearDisplay()">C</button>
        <button onclick="calculate()">=</button>
        <button onclick="operation('/')">/</button>
    </div>

    <script>
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function operation(operator) {
            document.getElementById('display').value += operator;
        }

        function calculate() {
            let display = document.getElementById('display').value;
            let result = eval(display);
            document.getElementById('display').value = result;
        }
    </script>
</body>
</html>
