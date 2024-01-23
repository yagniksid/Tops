const classResult = [
    {
        name: "Vinay",
        marks: [
            {
                subject: "Hindi",
                marks: 81,
            },
            {
                subject: "English",
                marks: 50,
            },
            {
                subject: "Gujarati",
                marks: 92,
            },
            {
                subject: "Maths",
                marks: 88,
            },
        ],
    },
    {
        name: "Sanjay",
        marks: [
            {
                subject: "Hindi",
                marks: 33,
            },
            {
                subject: "English",
                marks: 77,
            },
            {
                subject: "Gujarati",
                marks: 99,
            },
            {
                subject: "Maths",
                marks: 97,
            },
        ],
    },
    {
        name: "Tushar",
        marks: [
            {
                subject: "Hindi",
                marks: 91,
            },
            {
                subject: "English",
                marks: 88,
            },
            {
                subject: "Gujarati",
                marks: 97,
            },
            {
                subject: "Maths",
                marks: 99,
            },
        ],
    },
];

// find all students percentage
// Calculate percentage for each student
const calculatePercentage = (marks) => {
    const totalMarks = marks.reduce((acc, subject) => acc + subject.marks, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;
    return percentage.toFixed(2);
  };
  
  // Calculate percentage for each student
  const studentPercentages = classResult.map((student) => {
    return {
      name: student.name,
      percentage: calculatePercentage(student.marks),
    };
  });
  
  // Display percentages for each student
  console.log("Students and their percentages:");
  studentPercentages.forEach((student) => {
    console.log(`${student.name}: ${student.percentage}%`);
  });
  




// give hiegest percentage holder name
// give who have heigest percentage subject vise