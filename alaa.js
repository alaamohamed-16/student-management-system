

// 1. انشاءكلاس
class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. حساب المتوسط
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // 3. حساب التقدير
    calculateGrade(average) {

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. داله النتيجه النهائيه
    calculateResult() {

        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 5. تعريف مصفوفه رئيسيه
let studentsList = [

    new Student(101, "ahmed", [90, 85, 95], 90),

    new Student(102, "alaa", [45, 48, 42], 80),

    new Student(103, "Shahed", [70, 75, 80], 85),

    new Student(104, "mohamed", [40, 45, 48], 70)

];

// 6. لجنة الرافه
let strugglingStudents = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;

});

// 7. باستخدام map
let mercyStudents = strugglingStudents.map(student => {

    let oldAverage = student.calculateAverage();

    let newAverage = oldAverage + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: newAverage
    };

});

// 8. باستخدام reduce
let totalNewAverages = mercyStudents.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);

// 9. حساب متوسط درجات الرافه للمتعثرين
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// 10. اطبع تقارير لكل الطلاب في المصفوفه الرئيسيه
console.log("===== Students Report =====");

studentsList.forEach(student => {

    let average = student.calculateAverage();

    let grade = student.calculateGrade(average);

    let result = student.calculateResult();

    console.log("----------------------");

    console.log("Student ID:", student.id);

    console.log("Name:", student.name);

    console.log("Average:", average.toFixed(2));

    console.log("Grade:", grade);

    console.log("Result:", result);

});

// 11.  اطبع مصفوفه الطلاب المتعثرين الذي شملتهم الرافه
console.log("===== Mercy Students =====");

console.log(mercyStudents);

// 12. اطبع متوسط درجات الطلاب المتعثرين بعد التعديل
console.log("===== Mercy Average =====");

console.log(mercyAverage.toFixed(2));

