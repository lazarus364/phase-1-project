//Write a JavaScript program that manages student grades.
//The program should: Prompt the user to input multiple student names and their corresponding marks (marks should be between 0 and 100).

//If the input is invalid, display an error message and prompt the user to enter the mark again.
//Assign grades based on the following criteria:
//A: Marks greater than 79
//B: Marks between 60 and 79 (inclusive)
//C: Marks between 50 and 59 (inclusive)
//D: Marks between 40 and 49 (inclusive)
//E: Marks less than 40

//Allow the user to end the input process by typing "done" instead of entering a student's name. Display the student names, their marks, and the corresponding grades.

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
    const mark = Number(prompt('Enter the student mark (0-100):'));
  
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'Invalid input. Please enter a valid mark between 0 and 100.';
    }
  
    const grade = assignGrade(mark);
    return `The student's grade is: ${grade}`;
  }
  
  
  const result = studentGradeGenerator();
  console.log(result);
  



 // Challenge 2: Speed Detector (Toy Problem)

//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

  // > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
  
  
  
//  Challenge 3: Net Salary Calculator (Toy Problem)

//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


