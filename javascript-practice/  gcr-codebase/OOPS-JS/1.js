
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => {
            return sum + mark;
        }, 0);

        return total / this.marks.length;
    }

    // Calculate grade
    getGrade() {
        let avg = this.calculateAverage();

        if (avg >= 80) {
            return "A";
        }
        else if (avg >= 60) {
            return "B";
        }
        else if (avg >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

// Create 3 student objects
let s1 = new Student("Sumit", [85, 90, 80]);
let s2 = new Student("Rahul", [65, 70, 60]);
let s3 = new Student("Aman", [30, 35, 25]);

// Store students in an array
let students = [s1, s2, s3];

// Print student details
students.forEach((student) => {
    console.log("Student Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("---------------------------");
});
