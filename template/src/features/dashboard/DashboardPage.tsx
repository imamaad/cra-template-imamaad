import logo from 'assets/svg/logo.svg';

export const DashboardPage = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <img src={logo} className="dashboard-logo" alt="logo"/>
                <p>
                    Edit <code>src/features/dashboardPage.tsx</code> and save to reload.
                </p>
                <a
                    className="dashboard-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}