export class Todo {
    id: string | number | undefined;
    name?: string;
    status?: 'Open' | 'In Progress' | 'Done' | 'To Do' | 'In Review' | 'Under review' | 'Approved';
    priority?: 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';

    fromJson(input: any): Todo {
        if (input && input !== null) {
            this.id = input.id;
            this.name = input.name;
            this.status = input.status;
            this.priority = input.priority;
        }
        return this;
    }
}
