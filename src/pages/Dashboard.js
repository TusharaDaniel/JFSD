import React from 'react';
import { Link } from 'react-router-dom';
import { Pie, Bar } from 'react-chartjs-2'; // Import the chart components
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'; // Import Chart.js components
import '../styles/Dashboard.css'; // Optional: Import your CSS for styling

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
    const isAdmin = localStorage.getItem('role') === 'admin';  // Set this based on login response

    // Sample data for the pie chart (participation statistics)
    const participationData = {
        labels: ['Support Group A', 'Support Group B', 'Support Group C'],
        datasets: [
            {
                data: [30, 50, 20], // Example data points for each group
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each segment
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    // Sample data for the bar chart (user participation over time)
    const participationTrendData = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Participation',
                data: [12, 19, 3, 5], // Example monthly participation data
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
            },
        ],
    };

    // Chart options to control size
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allows custom height and width
    };

    return (
        <div className="dashboard-container">
            <h1>{isAdmin ? 'Admin Dashboard' : 'Student Dashboard'}</h1>
            <div className="dashboard-links">
                {isAdmin ? (
                    <div>
                        <Link to="/add-resource">Add Mental Health Resources</Link>
                        <Link to="/manage-users">Manage Users</Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/resources">View Mental Health Resources</Link>
                        <Link to="/support-groups">Join a Support Group</Link>
                        <Link to="/schedule-session">Schedule a Therapy Session</Link>
                    </div>
                )}
            </div>

            {/* Pie Chart for Participation Statistics */}
            <h2>Participation Statistics</h2>
            <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                <Pie data={participationData} options={chartOptions} />
            </div>

            {/* Bar Chart for Participation Trend */}
            <h2>Participation Trend Over Time</h2>
            <div style={{ width: '500px', height: '300px', margin: '0 auto' }}>
                <Bar data={participationTrendData} options={chartOptions} />
            </div>
        </div>
    );
};

export default Dashboard;
