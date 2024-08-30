import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { EmployeeDTO } from "@data/dtos/employee.dto";

import * as employeeSA from "@services/applicatif/employee.sa";

export interface employeeState {
  updateState: boolean;
  loading: boolean;
  employeeList: EmployeeDTO[];
  error: string | undefined;
  response: string;
}

const initialstate: employeeState = {
  updateState: false,
  loading: false,
  employeeList: [],
  error: "",
  response: "",
};

const addEmployee = createAsyncThunk("employee/addEmployee", async (data: EmployeeDTO) => {
  return employeeSA.saveEmployee(data);
});

const fetchEmployee = createAsyncThunk("employee/fetchEmployee", async () => {
  return employeeSA.getEmployee();
});

const deleteEmployee = createAsyncThunk("employee/deleteEmployee", async (id: number) => {
  return employeeSA.deleteEmployee(id);
});

export const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState: initialstate,
  reducers: {
    changeStateTrue: (state, action) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.response = "add";
      state.employeeList.push(action.payload);
    });
    builder.addCase(addEmployee.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      state.employeeList = action.payload;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {});
  },
});

export const { changeStateFalse, changeStateTrue, clearResponse } = employeeSlice.actions;
export { addEmployee, fetchEmployee, deleteEmployee };
export default employeeSlice.reducer;
