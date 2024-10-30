const readline = require('readline');

function assignGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function studentGradeGenerator(students = []) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the student name (or type "done" to finish): ', (name) => {
        if (name.toLowerCase() === 'done') {
            rl.close();
            console.log("Student Grades:");
            students.forEach(student => {
                console.log(`Name: ${student.name}, Mark: ${student.mark}, Grade: ${student.grade}`);
            });
            return;
        }

        rl.question(`Enter the mark for ${name} (0-100): `, (markInput) => {
            const mark = Number(markInput);
            if (isNaN(mark) || mark < 0 || mark > 100) {
                console.log('Invalid input. Please enter a valid mark between 0 and 100.');
                rl.close();
                return studentGradeGenerator(students); 
            }

            const grade = assignGrade(mark);
            students.push({ name, mark, grade });

            
            studentGradeGenerator(students);
        });
    });
}

studentGradeGenerator();
