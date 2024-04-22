export default function iterateThroughObject(reportWithIterator) {
  const employeeName = [];

  for (const employees of reportWithIterator) {
    for (const employee of employees) {
      employeeName.push(employee);
    }
  }

  const employeeFmt = employeeName.join(' | ');
  return employeeFmt;
}
