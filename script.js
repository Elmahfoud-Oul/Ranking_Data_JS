//Mini script that ranking data built & developed by https://github.com/Elmahfoud-Oul
const fs = require('fs');
fs.readFile('universities.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
        const lines = data.trim().split('\n');
        const csvData = [];
    csvData.push('Rank,University,Town');

    lines.forEach((line) => {
        const fields = line.split(/\t/); 
        const rank = fields.shift(); 
        const university = fields.shift(); 
        const town = fields.join(','); 
        csvData.push(`${rank},${university},${town}`);
    });

    fs.writeFile('universities.csv', csvData.join('\n'), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('CSV file created successfully!');
    });
});
