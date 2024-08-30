import { EmployeeDTO } from "@data/dtos/employee.dto";
import axios from "axios";

const API_URL = "http://localhost:6001/employee";
const saveEmployee = (employee: EmployeeDTO) =>
  new Promise<EmployeeDTO>(async (success, error) => {
    const response = await axios
      .post(`${API_URL}`, employee)
      .then((response) => {
        success(response.data);
        return;
      })
      .catch((error) => {
        error("Error saving employee");
      });
  });

const getEmployee = () =>
  new Promise<EmployeeDTO[]>(async (success, error) => {
    const response = await axios.get(`${API_URL}`);
    if (response) {
      success(response.data);
      return;
    }
    error("Employee not found");
  });

const updateEmployee = (employeeUpdate: EmployeeDTO) =>
  new Promise<EmployeeDTO>(async (success, error) => {
    const response = await axios.put(`${API_URL}`, employeeUpdate);
    if (response) {
      success(response.data);
      return;
    }
    error("update Employee error");
  });

const deleteEmployee = (id: number) =>
  new Promise<EmployeeDTO>(async (success, error) => {
    const response = await axios.delete(`${API_URL} + id `);
    if (response) {
      success(response.data);
      return;
    }
    error("Error to delete employee");
  });

export { saveEmployee, getEmployee, updateEmployee, deleteEmployee };
