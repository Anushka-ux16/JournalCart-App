document.getElementById('convertBtn').addEventListener('click', function() {
    const degrees = parseFloat(document.getElementById('degree').value);
    if (!isNaN(degrees)) {
        const radians = degrees*(3.14/180);
        document.getElementById('radians').value = radians.toFixed(4);
    } 
    else {
        document.getElementById('radians').value = 'Invalid input';
    }
});
