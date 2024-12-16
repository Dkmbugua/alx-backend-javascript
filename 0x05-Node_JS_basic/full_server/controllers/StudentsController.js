import readDatabase from '../utils';

class StudentsController {
    static async getAllStudents(req, res) {
        const filePath = process.argv[2]; // Retrieve database filename from execution
        try {
            const studentsByField = await readDatabase(filePath);
            const response = ['This is the list of our students'];

            Object.keys(studentsByField).sort().forEach((field) => {
                const students = studentsByField[field];
                response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            });

            res.status(200).send(response.join('\n'));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const filePath = process.argv[2];
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const studentsByField = await readDatabase(filePath);
            const students = studentsByField[major] || [];
            res.status(200).send(`List: ${students.join(', ')}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default StudentsController;
