// logic.js - Is ek file se saare game control honge
function getSmartResult(userBalance, betAmount, userSelection) {
    let finalNumber = null;

    // RULE 1: Agar balance 480+ ho gaya ya bet 50+ ki hai -> HARAO
    if (userBalance >= 480 || betAmount >= 50) {
        let wrongNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(num => {
            // Sirf wo number chuno jisse user na jeete
            if (userSelection === num) return false;
            if (userSelection === 'Red' && (num % 2 === 0 || num === 0)) return false;
            if (userSelection === 'Green' && (num % 2 !== 0 || num === 5)) return false;
            if (userSelection === 'Violet' && (num === 0 || num === 5)) return false;
            return true;
        });
        finalNumber = wrongNums[Math.floor(Math.random() * wrongNums.length)];
    } 
    // RULE 2: Agar bet 10-30 Rs ki hai -> 80% chances JEETAO
    else if (betAmount <= 30) {
        if (Math.random() < 0.8) { 
            if (userSelection === 'Red') finalNumber = [2, 4, 6, 8][Math.floor(Math.random() * 4)];
            else if (userSelection === 'Green') finalNumber = [1, 3, 7, 9][Math.floor(Math.random() * 4)];
            else if (!isNaN(userSelection)) finalNumber = userSelection;
            else finalNumber = Math.floor(Math.random() * 10);
        }
    }

    // Default: Agar upar kuch match na ho toh random result
    if (finalNumber === null) {
        finalNumber = Math.floor(Math.random() * 10);
    }

    return Number(finalNumber);
}
