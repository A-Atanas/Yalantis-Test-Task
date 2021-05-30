import "./App.css";
import axios from "axios";
import { EmployeesList } from "./elements/EmployeesList";
import { EmployeesBirthdays } from "./elements/EmployeesBirthdays";
import { useEffect, useState } from "react";

const App = (): JSX.Element => {
	const [employees, setEmployees] = useState<Array<any>>([]);

	const getEmployees = (): void => {
		axios
			.get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
			.then((response) => {
				const data = response.data;
				setEmployees(data);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getEmployees();
	}, []);

  const handleActivityChange = (id: number, isActive: number) => {
    const newList = employees.map(employee => {
      if (employee.id === id) {
        return {...employee, isActive: isActive};
      }
      return employee;
    });
    setEmployees(newList);
  }

	return (
		<div className="App">
			<EmployeesList employeesProp={employees} onActivityChange={handleActivityChange}/>
      <EmployeesBirthdays chosenEmployees={employees.filter(employee => employee.isActive === 1)}/>
		</div>
	);
};

export default App;
