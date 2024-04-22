export default function iterateThroughObject(reportWithIterator) {
  // Flatten the outer array containing multiple employee arrays into a single array of employee
  // names
  const employeeNames = reportWithIterator.flat();
  // Join the employee names with a separator " | "
  const employeeFmt = employeeNames.join(' | ');
  // Return the formatted string
  return employeeFmt;
}
