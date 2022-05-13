import { Todo } from '../common/types/Todo';
import axiosClient from './axiosClient';

class TodoApi {
  getAll = (params: any) => {
    const url = '/todos';
    return axiosClient.get(url, { params });
  };

  addItem = (payload: any) => {
    const url = '/todos';
    return axiosClient.post(url, payload);
  };

  updateStatus = (id: string, data: Todo) => {
    const url = `/todos/${id}`;
    return axiosClient.patch(url, data);
  };

  updatePriority = (id: string, data: { priority: string }) => {
    const url = `/todos/${id}`;
    return axiosClient.post(url, data);
  };

  deleteItem = (id: string) => {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
  };
}

const todoApi = new TodoApi();
export default todoApi;
