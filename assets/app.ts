import './styles/style.scss';

const elementHtmlResult: HTMLInputElement = document.getElementById('champ') as HTMLInputElement;
const elementHtmlZero: HTMLParagraphElement = document.getElementById('zero') as HTMLParagraphElement;
const elementHtmlOne: HTMLParagraphElement = document.getElementById('one') as HTMLParagraphElement;
const elementHtmlTwo: HTMLParagraphElement = document.getElementById('two') as HTMLParagraphElement;
const elementHtmlThree: HTMLParagraphElement = document.getElementById('three') as HTMLParagraphElement;
const elementHtmlFour: HTMLParagraphElement = document.getElementById('four') as HTMLParagraphElement;
const elementHtmlFive: HTMLParagraphElement = document.getElementById('five') as HTMLParagraphElement;
const elementHtmlSix: HTMLParagraphElement = document.getElementById('six') as HTMLParagraphElement;
const elementHtmlSeven: HTMLParagraphElement = document.getElementById('seven') as HTMLParagraphElement;
const elementHtmlEight: HTMLParagraphElement = document.getElementById('eight') as HTMLParagraphElement;
const elementHtmlNine: HTMLParagraphElement = document.getElementById('nine') as HTMLParagraphElement;

const elementHtmlClear: HTMLParagraphElement = document.getElementById('clear') as HTMLParagraphElement;
const elementHtmlEqual: HTMLParagraphElement = document.getElementById('equal') as HTMLParagraphElement;
const elementHtmlOperation : HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName('button-operation') as HTMLCollectionOf<HTMLDivElement>;

let currentOperator = '=';
let numberOne: number;
let numberTwo : number;

function written(number: string) {
    elementHtmlResult.value += number;
}

if (elementHtmlZero) {
    elementHtmlZero.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlZero.innerHTML);
    });
}

if (elementHtmlOne) {
    elementHtmlOne.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlOne.innerHTML);
    });
}

if (elementHtmlTwo) {
    elementHtmlTwo.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlTwo.innerHTML);
    });
}

if (elementHtmlThree) {
    elementHtmlThree.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlThree.innerHTML);
    });
}

if (elementHtmlFour) {
    elementHtmlFour.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlFour.innerHTML);
    });
}

if (elementHtmlFive) {
    elementHtmlFive.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlFive.innerHTML);
    });
}

if (elementHtmlSix) {
    elementHtmlSix.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlSix.innerHTML);
    });
}

if (elementHtmlSeven) {
    elementHtmlSeven.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlSeven.innerHTML);
    });
}

if (elementHtmlEight) {
    elementHtmlEight.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlEight.innerHTML);
    });
}

if (elementHtmlNine) {
    elementHtmlNine.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlNine.innerHTML);
    });
}

if (elementHtmlClear) {
    elementHtmlClear.addEventListener('click', (event: MouseEvent) => {
        written(elementHtmlResult.value = '');
    });
}


for (let i = 0; i < elementHtmlOperation.length; i++) {
    elementHtmlOperation[i].addEventListener('click', function() {
        currentOperator = this.innerHTML;
        numberOne = parseInt(elementHtmlResult.value);
        elementHtmlResult.value = '';
    });
}

if (elementHtmlEqual) {
    elementHtmlEqual.addEventListener('click', (event: MouseEvent) => {
        numberTwo = parseInt(elementHtmlResult.value);
        elementHtmlResult.value = '';
        switch (currentOperator) {
            case '+' :
                elementHtmlResult.value = (numberOne + numberTwo).toString();
                console.log(currentOperator);
                break;
            case '-':
                elementHtmlResult.value = (numberOne - numberTwo).toString();
                console.log(currentOperator);
                break;
            case '*' :
                elementHtmlResult.value = (numberOne * numberTwo).toString();
                console.log(currentOperator);
                break;
            case '/' :
                elementHtmlResult.value = (numberOne / numberTwo).toString();
                console.log(currentOperator);
                break;
            default :
                alert('Erreur');
        }
    });
}
