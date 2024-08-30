import FormEmployee from "@presentation/components/FormEmployee";
import { useSelector } from "react-redux";
import { RootState } from "@services/redux/store";
import { EmployeeDTO } from "@data/dtos/employee.dto";
import ListEmployee from "@presentation/components/ListEmployee";

const EmployeeContainer = () => {
  const employeeState: EmployeeDTO[] = useSelector((state: RootState) => state.employeeSlice.employeeList);

  return (
    <div>
      <FormEmployee />
      <ListEmployee employeeData={employeeState} />
    </div>
  );
};

export default EmployeeContainer;
