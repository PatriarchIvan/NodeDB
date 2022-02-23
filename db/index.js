const fs = require('fs').promises;

const writeEntry = async (user, data) => {
    const entriesData = await fs.readFile(__dirname + '/entries.json', 'utf-8');
    const entries = JSON.parse(entriesData);
    console.log(user, data);
    console.log(entries);
    return entries;
};

module.exports = {
    writeEntry
};
