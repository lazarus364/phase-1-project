
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
  
  function studentGradeGenerator() {
    const students = [];

    while (true) {
        const name = prompt('Enter the student name ( or enter "done" to finish):')
        if (name.toLocaleLowerCase() === 'done') {
            break;
        }

    const mark = Number(prompt(`Enter the mark for ${name} (0-100):`));  
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'Invalid input. Please enter a valid mark between 0 and 100.';
    }
  
    const grade = assignGrade(mark);
    students.push({ name, mark, grade});
  }
  return students;
}
  
  const results = studentGradeGenerator();
  console.log("student Grades;");
  results.forEach(student => {
    console.log(`Name: ${student.name}, Mark: ${student.mark}, Grade: ${student.grade}`);
  });
  