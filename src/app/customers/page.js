"use client";
import React, { useEffect, useState } from 'react';
import NavBar1 from '../components/NavBar1';
import AddBtn from '../components/AddBtn';

function CustomerPage() {
    const [customers, setcustomers] = useState([]);

    useEffect(() => {
        // Simulate a data fetch
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setcustomers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <NavBar1 />
            <div>
                <h1 className='flex justify-center items-center text-2xl font-bold'>
                    Customers Details</h1>
                
                <div className="flex justify-between p-4">
                    <table className="border w-full my-6 mx-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border text-left">Name</th>
                                <th className="px-4 py-2 border text-left">Phone Number</th>
                                <th className="px-4 py-2 border text-left">Last Date</th>
                                <th className="px-4 py-2 border text-left">Services</th>
                                <th className="px-4 py-2 border text-left">Attendant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.length > 0 ? (
                                customers.map((customers, index) => (
                                    <tr key={index}>
                                        <td className=" px-4 py-2">{customers.name}</td>
                                        <td className=" px-4 py-2">{customers.phoneNumber}</td>
                                        <td className=" px-4 py-2">{customers.lastDate}</td>
                                        <td className=" px-4 py-2">{customers.services}</td>
                                        <td className=" px-4 py-2">{customers.attendant}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="border px-4 py-2 text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex justify-end'>
                <AddBtn />
            </div>
        </div>
    );
}

export default CustomerPage;
