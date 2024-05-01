/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experinceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
