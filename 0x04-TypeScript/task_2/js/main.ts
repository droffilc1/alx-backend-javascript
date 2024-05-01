// Implements DirectorInterface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Implements TeacherInterface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implements Director class from DirectorInterface

export const Director = class Director implements DirectorInterface {
  workFromHome() : string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implements Teacher class from TeacherInterface

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
      return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
      return 'Cannot have a break';
  }

  workTeacherTasks(): string {
      return 'Getting to work';
  }
}

/**
 * @param salary
 * @return Director or a Teacher instance
 */
export function createEmployee(firstName: string, lastName: string, salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

/**
 * @param employee
 * @returns used as type predicate and if employee is a director
 */
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

/**
 * @param employee
 * @returns call to specific methods
 */
export function executeWork(employee: TeacherInterface | DirectorInterface): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// String literal types
export type Subjects = 'Math' | 'History';

/**
 * @param todayClass
 * @returns {string}
 */

export function teachClass(todayClass: Subjects): string {
  if(todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));





