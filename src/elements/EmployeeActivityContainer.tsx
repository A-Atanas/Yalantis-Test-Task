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
		onActivityChange(employee.id, parseInt(event.currentTarget.value))
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
						onChange={handleActivityChange}
					/>
					Active
				</label>
			</form>
		</div>
	);
}

export default EmployeeContainer;