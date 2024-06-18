#!/usr/bin/env node
// Reads a file synchronously with Node JS
const fs = require('fs');
const path = require('path');

module.exports = function countStudents(filepath) {
  try {
    const data = fs.readFileSync(path.resolve(filepath), 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    students.forEach((student) => {
      const firstname = student[0];
      const field = student[3];
      if (field in fields) {
        fields[field].push(firstname);
      } else {
        fields[field] = [firstname];
      }
    });

    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
