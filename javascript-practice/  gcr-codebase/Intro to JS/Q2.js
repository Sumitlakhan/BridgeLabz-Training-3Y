
let userName = "Sumit";
let age = 20;
let isStudent = true;
let skills = ["Java", "HTML", "CSS"];
let user = { city: "Aligarh", course: "B.Tech CSE" };
let middleName = null;
let address;

console.table([
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Skills", value: skills, type: Array.isArray(skills) ? "array" : typeof skills },
    { label: "User", value: user, type: typeof user },
    { label: "Middle Name", value: middleName, type: "null" },
    { label: "Address", value: address, type: typeof address }
]);
