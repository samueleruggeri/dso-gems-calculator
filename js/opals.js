document.getElementById('number-opal').addEventListener('input', calculateDust);
document.getElementById('opal-rarity').addEventListener('change', calculateDust);

function calculateDust() {
    console.log("Esecuzione di calculateDust");
    const opalCount = parseInt(document.getElementById('number-opal').value);
    const opalRarity = parseInt(document.getElementById('opal-rarity').value);
    const resultElement = document.getElementById('opalsresult');

    if (opalRarity === 0) {
        resultElement.textContent = 'Select opal rarity!';
        return;
    }

    const totalDust = opalCount * opalRarity;
    resultElement.textContent = `Total Dust Required: ${totalDust.toLocaleString()} units`;
}