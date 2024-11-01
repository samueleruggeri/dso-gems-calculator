const upgradeCost = {
    offensive: [0, 2, 6, 10, 20, 50, 150, 450, 1000, 2000, 3500, 5500, 8000, 11000, 14500, 18500, 23000],
    defensive: [0, 2, 4, 8, 16, 40, 120, 360, 800, 1600, 2800, 4400, 6400, 8800, 11600, 14800, 18400]
};
const rarityNames = [
    "Select your current rarity...", "Flawed", "Splintered", "Simple", "Normal", 
    "Polished", "Radiant", "Flawless", "Sacred", "Royal", "Trapezoid",
    "Refined Trapezoid", "Brilliant Trapezoid", "Exquisite Trapezoid",
    "Imperial", "Refined Imperial", "Brilliant Imperial", "Exquisite Imperial"
];
function calculateDust() {
    const count = parseInt(document.getElementById('count').value);
    const currentRarity = parseInt(document.getElementById('rarity-now-sel').value);
    const targetRarity = parseInt(document.getElementById('rarity-needed-sel').value);
    const gemType = parseInt(document.getElementById('gem-type').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(count) || count <= 0 || currentRarity <= 0 || targetRarity <= 0 || gemType === 0) {
        resultDiv.innerHTML = "<p class='text-danger'>Please fill in all fields correctly.</p>";
        return;
    }
    if (currentRarity >= targetRarity) {
        resultDiv.innerHTML = "<p class='text-danger'>Target rarity must be higher than current rarity.</p>";
        return;
    }
    const dustNeededPerGem = (gemType === 1) ? upgradeCost.offensive : upgradeCost.defensive;
    let totalDust = 0;

    for (let i = currentRarity; i < targetRarity; i++) {
        totalDust += dustNeededPerGem[i];
    }
    resultDiv.innerHTML = `<p class="text-success">You need <strong>${totalDust * count}</strong> dust to upgrade ${count} gems from ${rarityNames[currentRarity]} to ${rarityNames[targetRarity]}.</p>`;
}