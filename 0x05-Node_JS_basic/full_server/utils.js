import fs from 'fs/promises';

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.split('\n').filter((line) => line);

        const studentsByField = {};
        lines.slice(1).forEach((line) => {
            const [firstname, , field] = line.split(',');
            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
        });

        return studentsByField;
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

export default readDatabase;
