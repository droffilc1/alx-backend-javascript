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

class Director implements DirectorInterface {
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

class Teacher implements TeacherInterface {
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
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200), Teacher);
console.log(createEmployee(1000), Director);
console.log(createEmployee('$500'), Director);

