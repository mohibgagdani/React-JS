import React from "react";

const StudentMethods = () => {
  const students = [
    { id: 1, name: "Amit", marks: 75, city: "Surat", isPresent: true },
    { id: 2, name: "Riya", marks: 32, city: "Ahmedabad", isPresent: false },
    { id: 3, name: "Mehul", marks: 88, city: "Rajkot", isPresent: true },
    { id: 4, name: "Pooja", marks: 45, city: "Vadodara", isPresent: true },
    { id: 5, name: "Neha", marks: 29, city: "Surat", isPresent: false },
    { id: 6, name: "Jay", marks: 59, city: "Ahmedabad", isPresent: true },
  ];

  
    const cities = students.map(student => student.city);
    const suratIndex = cities.indexOf("Surat");
    console.log("Surat Exists:", suratIndex !== -1);

    const ahmedabadIndex = students.findIndex(student => student.city === "Ahmedabad");
    console.log("First Ahmedabad Student Index:", ahmedabadIndex);

    const names = students.map(student => student.name);
    const hasMehul = names.includes("Mehul");
    console.log("Has Mehul:", hasMehul);

    const allAbove25 = students.every(student => student.marks > 25);
    console.log("All Have Marks > 25:", allAbove25);

    const isAnyoneAbsent = students.some(student => !student.isPresent);
    console.log("Anyone Absent:", isAnyoneAbsent);

  }

export default StudentMethods;
