import * as employeeBDL from "@services/bdl/employee.bdl";
import { EmployeeDTO } from "@data/dtos/employee.dto";

const saveEmployee = (employee: EmployeeDTO) =>
  new Promise<EmployeeDTO>((success, error) => {
    employeeBDL
      .saveEmployee(employee)
      .then((response) => {
        if (response) {
          success(response);
        }
        error("An error occured while saving employee");
      })
      .catch((exception) => {
        error(exception);
      });
  });

const getEmployee = () =>
  new Promise<EmployeeDTO[]>((success, error) => {
    employeeBDL
      .getEmployee()
      .then((response) => {
        if (response) {
          success(response);
          return;
        }
        error("An error occured while saving employee");
      })
      .catch((exception) => {
        error(exception);
      });
  });

const deleteEmployee = (id: number) =>
  new Promise<EmployeeDTO>((success, error) => {
    employeeBDL
      .deleteEmployee(id)
      .then((response) => {
        if (response) {
          success(response);
          return;
        }
        error("An error occurred while deleting employee");
      })
      .catch((exception) => {
        error(exception);
      });
  });

const updateEmployee = (employeeUpdate: EmployeeDTO) =>
  new Promise<EmployeeDTO>((success, error) => {
    employeeBDL.updateEmployee(employeeUpdate).then((response) => {
      if (response) {
        success(response);
        return;
      }
      error("Error occurred while updating the employee.");
    });
  });

export { saveEmployee, getEmployee, deleteEmployee, updateEmployee };
