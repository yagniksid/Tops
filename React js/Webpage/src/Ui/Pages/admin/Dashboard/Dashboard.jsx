import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./dashboard.css";

const employeeData = [
    {
        id: 1,
        name: "Titan Watch",
        position: "Sale's manager USA",
        transactions: 3490,
        rise: true,
        tasksCompleted: 3,
        imgId: 0
    },
    {
        id: 2,
        name: "Titan Watch",
        position: "Sale's manager Europe",
        transactions: 590,
        rise: false,
        tasksCompleted: 5,
        imgId: 2
    },
    {
        id: 3,
        name: "Titan Watch",
        position: "Sale's manager Asia",
        transactions: 2600,
        rise: true,
        tasksCompleted: 1,
        imgId: 3
    }
];

const Countrydata = [
    { name: "Titan Watch USA", rise: true, value: 21942.83, id: 1 },
    { name: "Titan Watch Ireland", rise: false, value: 19710.0, id: 2 },
    { name: "Titan Watch Ukraine", rise: false, value: 12320.3, id: 3 },
    { name: "Titan Watch Sweden", rise: true, value: 9725.0, id: 4 }
];

const graphData = [
    { name: "Nov", revenue: 500, expectedRevenue: 700, sales: 300 },
    { name: "Dec", revenue: 800, expectedRevenue: 600, sales: 400 },
    { name: "Jan", revenue: 1200, expectedRevenue: 900, sales: 500 },
    { name: "Feb", revenue: 1000, expectedRevenue: 1100, sales: 600 },
    { name: "Mar", revenue: 1600, expectedRevenue: 1300, sales: 700 },
    { name: "Apr", revenue: 2000, expectedRevenue: 1800, sales: 800 },
    { name: "May", revenue: 1800, expectedRevenue: 1900, sales: 900 },
    { name: "June", revenue: 2200, expectedRevenue: 2100, sales: 1000 },
    { name: "July", revenue: 2500, expectedRevenue: 2400, sales: 1100 }
];

function Dashboard() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 p-4">
                <div className="bg-gray-800 rounded-lg p-4">
                    <h2 className="text-white text-lg font-bold mb-4">Employee Data</h2>
                    {employeeData.map(({ id, name, position, transactions, rise, tasksCompleted, imgId }) => (
                        <div key={id} className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <img src={`mock_faces_${imgId}.jpg`} alt={`Employee ${id}`} className="w-10 h-10 rounded-full mr-4" />
                                <div>
                                    <div className="text-white font-bold">{name}</div>
                                    <div className="text-gray-400">{position}</div>
                                    <div className="text-gray-400">{tasksCompleted} from 5 tasks completed</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className={`mr-2 text-lg ${rise ? "text-green-500" : "text-red-500"}`}>{rise ? "▲" : "▼"}</span>
                                <div className={`text-lg ${rise ? "text-green-500" : "text-red-500"} font-bold`}>${transactions.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-2 md:col-span-1 p-4">
                <div className="bg-gray-800 rounded-lg p-4">
                    <h2 className="text-white text-lg font-bold mb-4">Revenue Trends</h2>
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart data={graphData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#4F4F4F" />
                                <XAxis dataKey="name" stroke="#8D8D8D" />
                                <YAxis stroke="#8D8D8D" />
                                <Tooltip />
                                <Line type="monotone" dataKey="revenue" stroke="#8250c8" strokeWidth={3} dot={false} />
                                <Line type="monotone" dataKey="expectedRevenue" stroke="#5f5f5f" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="col-span-2 p-4">
                <div className="bg-gray-800 rounded-lg p-4">
                    <h2 className="text-white text-lg font-bold mb-4">Top Countries by Revenue</h2>
                    {Countrydata.map(({ name, value, rise, id }) => (
                        <div key={id} className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <span className={`mr-2 text-lg ${rise ? "text-green-500" : "text-red-500"}`}>{rise ? "▲" : "▼"}</span>
                                <span className="text-white">{name}</span>
                            </div>
                            <div className="font-bold text-white">${value.toFixed(2)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
