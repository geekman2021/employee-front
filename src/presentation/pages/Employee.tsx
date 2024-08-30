import { useAppDispatch } from "@services/redux/hooks";
import EmployeeContainer from "../../presentation/containers/EmployeeContainer";
import { fetchEmployee } from "@services/redux/employee/employeeSlice";

const Employee = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchEmployee());

  return (
    <div>
      <EmployeeContainer />
    </div>
  );
};

export default Employee;
