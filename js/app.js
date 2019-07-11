


//Code tutorial from: https://freshman.tech/calculator/
	// I followed this tutorial. However, I know I could explain
	// everything we did either through having researched it or 
	// knowing it. 
	// Kept my old code to compare the thought process between the
	// two. 








const calculator = {
  displayValue: '0',
  firstNum: null,
  waitingForSecondOperand: false,
  operator: null,
};


//Updating the calculator screen
function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();


//'listening for keys if it's an operator'
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
	const {target} = event; //same as const target = event.target
	if(!target.matches('button')){
		return;
	
	}else if(target.classList.contains('operator')){
		handleOperator(target.value);
		updateDisplay();	
	
	}else if(target.classList.contains('decimal')) {
		inputDecimal(target.value);
		updateDisplay();
	return;
	
	}else if(target.classList.contains('all-clear')){
		resetCalculator()
		updateDisplay()

	}//if not an operator, its a number. 
	
	else{
		inputDigit(target.value)
		updateDisplay()
}
})
//STOPPED HERE AND CONFUSED ON BELOW
//displaying numbers in the screen
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}


//Decimal
function inputDecimal(dot){
	if(calculator.waitingForSecondOperand === true){
	 return;
	}
	else if(!calculator.displayValue.includes(dot)){ //includes checks to see if there is already a decimal
		calculator.displayValue += dot;
	}
}




function handleOperator(nextOperator) {
  const { firstNum, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (firstNum == null) {
    calculator.firstNum = inputValue;
  } else if (operator) {
    const result = performCalculation[operator](firstNum, inputValue);

    calculator.displayValue = String(result);
    calculator.firstNum = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}
	//if else above...if operator exists, check these to see what to do
const performCalculation = {
	'/': (firstNum, secondNum) => firstNum / secondNum,
	'*': (firstNum, secondNum) => firstNum * secondNum,
	'+': (firstNum, secondNum) => firstNum + secondNum,
	'-': (firstNum, secondNum) => firstNum - secondNum,
	'=': (firstNum, secondNum) => secondNum
}

function resetCalculator(){
	calculator.displayValue = '0';
	calculator.firstNum = null;
	calculator.waitingForSecondOperand = false;
	calculator.operator = null;
	console.log(calculator);
}



















// let numberInput = [];
// let total = 0;
// //operator buttons
// $('#submit').click(function submit(){
// 	for(let i = 3; i <= numberInput.length; i++){
// 		if([i] === '+'){
// 			total = numberInput[0] + numberInput[1];
// 			parseInt(total);
// 		} console.log(total) //total;
// 		// total = parseInt(numberInput[i]);
// 		// $('body').append(total)
// 		// console.log(total)
// 	} 
// });

// $('#clear').click(function empty(){
// 			$('div').innerText;
// 			numberInput= []
// 		});

// $('#add').click(function add(){
// 	numberInput.push('+');
// 	console.log(numberInput);
// 	$('#screen').append('+')
// });

// $('#subtract').click(function subtract(){
// 	numberInput.push(num1 - num2);
// 	$('#screen').append('-')
// 	console.log(numberInput);
// });

// $('#divide').click(function divide(){
// 	numberInput.push(num1 % num2);
// 	$('#screen').append('%')
// 	console.log(numberInput);
// });

// $('#multiply').click(function multiply(){
// 	numberInput.push(num1 * num2);
// 	$('#screen').append('*')
// 	console.log(numberInput);
// });
// $('#decimal').click(function decimal(){
// 	numberInput.push(num1 || num2 % 10);
// 	$('#screen').append('.')
// 	console.log(numberInput);
// })

// //every button pushes to the number input array


// $("#1").click(function(){
// $('#screen').append('1');
// numberInput.push('1');
// 	console.log(numberInput);
// });
// $("#2").click(function(){
// $('#screen').append('2');
// numberInput.push('2');
// 	console.log(numberInput);
// });
// $("#3").click(function(){
// $('#screen').append('3');
// numberInput.push('3');
// 	console.log(numberInput);
// });
// $("#4").click(function(){
// $('screen').append('4');
// numberInput.push('4');
// 	console.log(numberInput);
// });
// $("#5").click(function(){
// $('#screen').append('5');
// numberInput.push('5');
// 	console.log(numberInput);
// });
// $("#6").click(function(){
// $('#screen').append('6');
// numberInput.push('6');
// 	console.log(numberInput);
// });
// $("#7").click(function(){
// $('#screen').append('7');
// numberInput.push('7');
// 	console.log(numberInput);
// });
// $("#8").click(function(){
// $('#screen').append('8');
// numberInput.push('8');
// 	console.log(numberInput);
// });
// $("#9").click(function(){
// $('#screen').append('9');
// numberInput.push('9');
// 	console.log(numberInput);
// });
// $("#0").click(function(){
// $('#screen').append('0');
// numberInput.push('0');
// 	console.log(numberInput);
// });