type Employee = {
    employee: {
        id: number,
        firstName: string,
        lastName: string
    },
	onActivityChange: (id: number, value: number) => void
	isActive: number
}

const EmployeeContainer = ({employee, onActivityChange, isActive}: Employee) => {

	const handleActivityChange = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = parseInt(event.currentTarget.value);
		if (value === 1) {
			localStorage.setItem(`${employee.id}`, value.toString());
		} else {
			localStorage.removeItem(`${employee.id}`);
		}
		onActivityChange(employee.id, value);
	};

    return (
		<div>
			<h2 className={isActive ? "employeeName" : undefined}>
				{employee.lastName} {employee.firstName}
			</h2>
			<form className="activityTogglers">
				<label>
					<input
						type="radio"
						id="notActive"
						name="activity"
						value={0}
						defaultChecked={!isActive}
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
						defaultChecked={!!isActive}
						onChange={handleActivityChange}
					/>
					Active
				</label>
			</form>
		</div>
	);
}

export default EmployeeContainer;