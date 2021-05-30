import "./App.css";
import axios from "axios";
import EmployeesList from "./elements/EmployeesList";
import { useEffect, useState } from "react";

const App = (): JSX.Element => {
	const [employees, setEmployees] = useState([]);

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

	return (
		<div className="App">
			<EmployeesList employeesProp={employees} />
		</div>
	);
};

export default App;
