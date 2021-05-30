type EmployeeBirthdayProps = {
	chosenEmployees: {
		id: number;
		firstName: string;
		lastName: string;
		dob: string;
		isActive: boolean;
	}[];
};

export const EmployeesBirthdays = ({ chosenEmployees }: EmployeeBirthdayProps): JSX.Element => {
	const sublists: { month: string; employees: any[] }[] = [
		{ month: "January", employees: [] },
		{ month: "February", employees: [] },
		{ month: "March", employees: [] },
		{ month: "April", employees: [] },
		{ month: "May", employees: [] },
		{ month: "June", employees: [] },
		{ month: "July", employees: [] },
		{ month: "August", employees: [] },
		{ month: "September", employees: [] },
		{ month: "October", employees: [] },
		{ month: "November", employees: [] },
		{ month: "December", employees: [] },
	];

    // Shift all months in sublists array and put them at the beginning 
    // so the current month is the first one
    for (let i = 0; i < new Date().getMonth(); i++) {
        const monthToShift = sublists.shift();
        if (monthToShift !== undefined) {
            sublists.push(monthToShift);
        }
    }

	for (const employee of chosenEmployees) {
		const birthDate = new Date(Date.parse(employee.dob));
        const month = birthDate.getMonth() - new Date().getMonth();
        const parsedMonth = month >= 0 ? month : month + 12;
		sublists[parsedMonth].employees.push(employee);
	}

    const formatDate = (date: Date): string => {
        let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
		let month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
		let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

        return `${day} ${month}, ${year}`
    }

	return (
		<div className="birthdays">
			<h1>Employees Birthdays</h1>
			<hr style={{ width: "80%" }} />
			{chosenEmployees.length !== 0 ? (
				sublists
					.filter((month) => month.employees.length !== 0)
					.map((month) => (
						<div className="monthContainer" key={month.month}>
							<h1>{month.month}</h1>
							<ul>
								{month.employees
									.sort((a, b) => a.lastName.localeCompare(b.lastName))
									.map((employee) => (
										<li key={employee.id}>
											{employee.lastName} {employee.firstName} —{" "}
											{formatDate(new Date(Date.parse(employee.dob)))}
										</li>
									))}
							</ul>
						</div>
					))
			) : (
				<h2>Employees List is empty</h2>
			)}
		</div>
	);
};
