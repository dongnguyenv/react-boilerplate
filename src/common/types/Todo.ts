export interface Todo {
  id: string | number | undefined;
  name: string;
  status:
    | 'Open'
    | 'In Progress'
    | 'Done'
    | 'To Do'
    | 'In Review'
    | 'Under review'
    | 'Approved';
  priority: 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
}
