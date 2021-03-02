// Your code here

function saturdayFun(event = "roller-skate") {
	return `This Saturday, I want to ${event}!`
};
saturdayFun("party");

function mondayWork(event = "go to the office") {
	return `This Monday, I will ${event}.`
};

function wrapAdjective(wrap="*") {
    let wrapped = (adj = "special") => `You are ${wrap}${adj}${wrap}!`
    return wrapped;
};


let Calculator = {

    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
	
};


function actionApplyer(integer, newArray) {
	let a = integer
	for (let i = 0; i < newArray.length; i++){
		a = newArray[i](a)
	};
	return a;
};

