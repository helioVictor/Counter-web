const counter =  document.getElementById('counter')
const counterInput =  document.getElementById('counter-input')

function add() {
    let actual = document.getElementById("counter-input").value;
    let newValue = actual - (-1); //Evitando Concatenacoes
    document.getElementById("counter-input").value = newValue;
}

function sub() {
    let actual = document.getElementById("counter-input").value;
    if(actual > 0) { //evita números negativos
        let newValue = actual - 1;
        document.getElementById("counter-input").value = newValue;
    }
}

// Dark Theme

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
