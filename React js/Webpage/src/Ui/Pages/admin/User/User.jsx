import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BE_URL } from '../../../../../config';
import { Table } from "reactstrap";

const User = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`${BE_URL}/user/getAll`)
            .then((res) => {
                let filteredData = res.data.data.filter((e) => e.userType !== "admin")
                setUserData(filteredData);
            })
            .catch((err) => {
                toast.error("Error occurred while fetching data", err);
            });
    }, []);

    return (
        <>
            <div>
                <div class="bg-white p-8 rounded-md w-full">
                    <div class=" flex items-center justify-between pb-6">
                        <div>
                            <h2 class="text-gray-600 font-semibold">User Data</h2>
                        </div>
                    </div>
                    <div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 overflow-x-auto">
                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.map((user, i) => {
                                            return (
                                                <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center ">
                                                        <p class="text-gray-900 whitespace-no-wrap">{user.name}</p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center ">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            {user.email}
                                                        </p>
                                                    </td>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center ">
                                                        <span
                                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                            <span class="relative">{user.userType}</span>
                                                        </span>
                                                    </td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
