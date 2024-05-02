const fs = require('fs').promises;

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Use fs.promises.readFile for asynchronous file reading
  fs.readFile(dataPath, 'utf-8')
    .then((fileContent) => {
      const fileLines = fileContent.trim().split('\n');

      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',').slice(0, -1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, -1);
        const field = studentRecord.slice(-1)[0];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntry = Object.fromEntries(
          dbFieldNames.map((propName, idx) => [propName, studentPropValues[idx]]),
        );
        studentGroups[field].push(studentEntry);
      }

      const totalStudents = Object.values(
        studentGroups,
      ).reduce((acc, group) => acc + group.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve();
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

module.exports = countStudents;
