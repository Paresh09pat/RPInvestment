// Table.js
import React, { useState, useEffect } from 'react';
import './Table.css';

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Simulating data fetching with a delay
    const fetchData = async () => {
      try {
        // Replace this with your actual API call or data fetching logic
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <table className="custom-table">
        <thead>
          <tr className='table_head'>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Hash</th>
            <th>Amount</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((row) => (
              <tr key={row.srNo}>
                <td data-label="Sr. No">{row.srNo}</td>
                <td data-label="Name">{row.name}</td>
                <td data-label="Hash">{row.hash}</td>
                <td data-label="Amount">{row.amount}</td>
                <td data-label="Total Amount">{row.totalAmount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="custom-table-cell" colSpan="5">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
