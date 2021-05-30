import { useState } from "react";

type Employee = {
    employee: {
        id: number,
        firstName: string,
        lastName: string
    }
}

const EmployeeContainer = ({employee}: Employee) => {

	const [employeeActive, setEmployeeActive] = useState(0);

	const handleActivityChange = (event: React.FormEvent<HTMLInputElement>): void => {
		setEmployeeActive(parseInt(event.currentTarget.value));
	};

    return (
		<div key={employee.id}>
			<h2 className={employeeActive ? "employeeName" : undefined}>
				{employee.firstName} {employee.lastName}
			</h2>
			<form className="activityTogglers">
				<label>
					<input
						type="radio"
						id="notActive"
						name="activity"
						value={0}
						defaultChecked={!employeeActive}
						onChange={handleActivityChange}
					/>
					Not active
				</label>
				<label>
					<input
						type="radio"
						id="active"
						name="activity"
						value={1}
						onChange={handleActivityChange}
					/>
					Active
				</label>
			</form>
		</div>
	);
}

export default EmployeeContainer;