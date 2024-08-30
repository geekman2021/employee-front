import { Table } from "flowbite-react";
import { EmployeeDTO } from "@data/dtos/employee.dto";

interface EmployeeProps {
  employeeData: EmployeeDTO[];
}

const ListEmployee = (employeeProps: EmployeeProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Nom</Table.HeadCell>
          <Table.HeadCell>Prenom</Table.HeadCell>
          <Table.HeadCell>adresse</Table.HeadCell>
          <Table.HeadCell>role</Table.HeadCell>
          <Table.HeadCell>email</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {employeeProps.employeeData.map((employee) => (
            <Table.Row className="bg:white dark:border-gray-700 dark:bg-gray-800" key={employee.id}>
              <Table.Cell>
                {employee.name} {employee.adresse}
              </Table.Cell>
              <Table.Cell>{employee.prenom}</Table.Cell>
              <Table.Cell>{employee.adresse}</Table.Cell>
              <Table.Cell>{employee.role}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ListEmployee;
