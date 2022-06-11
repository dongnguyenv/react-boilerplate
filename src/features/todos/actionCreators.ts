export function addTodo(task: any) {
    return {
        type: 'todos/add-new-task',
        payload: task,
    };
}
