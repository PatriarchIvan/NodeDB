const fs = require('fs').promises;

const writeEntry = async (user, data) => {
    const entriesData = await fs.readFile(__dirname + '/entries.json', 'utf-8');
    const entries = JSON.parse(entriesData);
    entries[user] = entries[user] || [];
    entries[user].push({
        date: new Date().toUTCString(),
        entry: data
    });
    await fs.writeFile(__dirname + '/entries.json', JSON.stringify(entries));
    return entries;
};

module.exports = {
    writeEntry
};
