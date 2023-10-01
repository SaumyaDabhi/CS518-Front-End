import React, {useState, useEffect } from "react";

const Admin = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
            fetch('http://localhost:5000/admin', {
                method: 'GET',
                body: "",
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow' 
            })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
        }, []);

    return(
        <div className="pa4">
            <h1 className="tc">Records</h1>
            <table className="w-100">
                <thead>
                <tr>
                    <th className="pa2">Email</th>
                    <th className="pa2">Hash</th>
                    <th className="pa2">Token</th>
                </tr>
                </thead>
                <tbody>
                {records.map((record) => (
                    <tr key={record.id}>
                    <td className="pa2">{record.email}</td>
                    <td className="pa2">{record.hash}</td>
                    <td className="pa2">{record.token}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin();
