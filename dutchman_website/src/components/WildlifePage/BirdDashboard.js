import React, { useEffect, useState } from "react";
import {
    PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
    BarChart, XAxis, YAxis, Bar
} from "recharts";
import "./BirdDashboard.css";

const BirdDashboard = () => {
    const [birds, setBirds] = useState([]);
    const [selectedYear, setSelectedYear] = useState("2024");
    const [view, setView] = useState("table");
    const [searchTerm, setSearchTerm] = useState("");

    const familyData = Object.entries(
        birds.filter((b) => b[selectedYear])
            .reduce((acc, bird) => {
                acc[bird.Family] = (acc[bird.Family] || 0) + 1;
                return acc;
            }, {})
    ).map(([family, count]) => ({ family, count }));

    const years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];

    useEffect(() => {
        fetch("bird_sightings.json")
            .then((res) => res.json())
            .then((data) => {
                const sorted = [...data].sort((a, b) =>
                    a.Name.localeCompare(b.Name)
                );
                setBirds(sorted);
            })
            .catch((err) => console.error("Error loading bird data:", err));
    }, []);

    const filteredBirds = birds.filter((b) => b[selectedYear]);
    const yearCounts = years.map((year) => ({
        name: year,
        value: birds.filter((b) => b[year]).length,
    }));

    const COLORS = ["#0f4e4a", "#2F5848", "#46775B", "#89BD75", "#B8D5A0", "#D7BFAE", "#964F33", "#6B9080", "#A7C7A5", "#C1DAD6"];

    return (
        <div className="bird-dashboard">
            <h2>Dutchman Wetlands Bird Observations</h2>

            <div className="bird-toggle-buttons">
                <button onClick={() => setView("table")} className={view === "table" ? "active" : ""}>Species List by Year</button>
                <button onClick={() => setView("chart")} className={view === "chart" ? "active" : ""}>Total Species by Year</button>
                <button onClick={() => setView("family")} className={view === "family" ? "active" : ""}>
                    Species by Family
                </button>
            </div>

            {view === "table" && (
                <>
                    <div className="year-selector">
                        <label>Select Year: </label>
                        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                            {years.map((y) => (
                                <option key={y}>{y}</option>
                            ))}
                        </select>
                    </div>

                    <div className="bird-search">
                        <input
                            type="text"
                            placeholder="Search for bird name here"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="bird-table-container">
                        <table className="bird-table">
                            <thead>
                                <tr>
                                    <th>Species</th>
                                    <th>Scientific Name</th>
                                    <th>Observed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBirds
                                    .filter((bird) =>
                                        bird.Name.toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                    .map((bird) => (
                                        <tr key={bird.Name}>
                                            <td>{bird.Name}</td>
                                            <td><em>{bird["Scientific Name"]}</em></td>
                                            <td className="text-center">✅</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {view === "chart" && (
                <div className="bird-chart">
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={yearCounts}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={150}
                                label={({ name, value }) => `${name}: ${value}`}
                            >
                                {yearCounts.map((_, i) => (
                                    <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => [`${value} observed species`]} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}

            {view === "family" && (
                <div className="bird-family-chart">
                    <h2>Species Count per Family ({selectedYear})</h2>
                    <div className="year-selector">
                        <label>Select Year: </label>
                        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                            {years.map((y) => (
                                <option key={y}>{y}</option>
                            ))}
                        </select>
                    </div>

                    <div className="bird-family-chart-inner"
                        style={{ minWidth: `${familyData.length * 80}px` }}>
                        {/* 80px per bar; adjusts dynamically based on number of families */}
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                data={familyData}
                                margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
                            >
                                <XAxis
                                    dataKey="family"
                                    angle={-25}
                                    textAnchor="end"
                                    interval={0}
                                    fontSize={12}
                                />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="count">
                                    {familyData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BirdDashboard;


