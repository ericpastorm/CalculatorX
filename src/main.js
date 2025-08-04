document.addEventListener('DOMContentLoaded', () => {

    const calculator = document.querySelector('.buttons-grid');
    const screen = document.querySelector('.textScreen');
    const historyScreen = document.querySelector('.history-screen');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const moonIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    const sunIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

    let state = {
        firstValue: '',
        operator: '',
        displayValue: '0',
        needsReset: false,
        history: [],
    };

    const calculate = (n1, op, n2) => {
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);
        if (op === '+') return num1 + num2;
        if (op === '-') return num1 - num2;
        if (op === '*') return num1 * num2;
        if (op === '/' && num2 !== 0) return num1 / num2;
        if (op === '/' && num2 === 0) return 'Error';
        return 'Error';
    };

    const handleNumber = (value) => {
        if (state.needsReset) {
            state.displayValue = '';
            state.needsReset = false;
        }
        state.displayValue = state.displayValue === '0' ? value : state.displayValue + value;
    };

    const handleOperator = (nextOperator) => {
        if (state.operator && !state.needsReset) {
            const result = calculate(state.firstValue, state.operator, state.displayValue);
            state.displayValue = String(result);
            state.firstValue = String(result);
        } else {
            state.firstValue = state.displayValue;
        }
        state.operator = nextOperator;
        state.needsReset = true;
    };
    
    const handleDecimal = () => {
        if (state.needsReset) {
            state.displayValue = '0';
            state.needsReset = false;
        }
        if (!state.displayValue.includes('.')) {
            state.displayValue += '.';
        }
    };
    
    const handleDelete = () => {
        state.displayValue = state.displayValue.length > 1 ? state.displayValue.slice(0, -1) : '0';
    };

    const handleSign = () => {
        if (state.displayValue !== '0') {
            state.displayValue = String(parseFloat(state.displayValue) * -1);
        }
    };

    const handlePercent = () => {
        state.displayValue = String(parseFloat(state.displayValue) / 100);
    };

    const performCalculation = () => {
        if (state.firstValue && state.operator) {
            const secondValue = state.displayValue;
            const result = calculate(state.firstValue, state.operator, secondValue);
            
            if(result !== 'Error') {
                const operationString = `${state.firstValue} ${state.operator} ${secondValue} = ${result}`;
                state.history.push(operationString);
            }

            state.displayValue = String(result);
            state.firstValue = String(result);
            state.operator = '';
            state.needsReset = true;
            updateHistoryDisplay();
        }
    };

    const clearAll = () => {
        state.firstValue = '';
        state.operator = '';
        state.displayValue = '0';
        state.needsReset = false;
        state.history = [];
        updateHistoryDisplay();
    };

    const updateScreen = () => {
        screen.textContent = state.displayValue;
        if (state.displayValue.length > 16) screen.style.fontSize = '1.5rem';
        else if (state.displayValue.length > 10) screen.style.fontSize = '2.25rem';
        else screen.style.fontSize = '3rem';
    };

    const updateHistoryDisplay = () => {
        historyScreen.textContent = state.history[state.history.length - 1] || '';
    };

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggleBtn.innerHTML = sunIconSVG;
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleBtn.innerHTML = moonIconSVG;
        }
    };

    calculator.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;

        const { action, value } = button.dataset;

        if (action === 'number') handleNumber(value);
        if (action === 'operator') handleOperator(value);
        if (action === 'decimal') handleDecimal();
        if (action === 'delete') handleDelete();
        if (action === 'sign') handleSign();
        if (action === 'percent') handlePercent();
        if (action === 'calculate') performCalculation();
        if (action === 'clear') clearAll();
        
        updateScreen();
    });

    window.addEventListener('keydown', (event) => {
        const key = event.key;
        if (['/', '*', '-', '+', 'Enter', '%'].includes(key)) event.preventDefault();

        if (!isNaN(key) && key.trim() !== '') handleNumber(key);
        if (['+', '-', '*', '/'].includes(key)) handleOperator(key);
        if (key === '.') handleDecimal();
        if (key === 'Backspace') handleDelete();
        if (key === '%') handlePercent();
        if (key === 'Enter' || key === '=') performCalculation();
        if (key === 'Escape' || key === 'Delete') clearAll();
        
        updateScreen();
    });
    
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    const init = () => {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
        updateScreen();
        updateHistoryDisplay();
    };
    
    init();
});