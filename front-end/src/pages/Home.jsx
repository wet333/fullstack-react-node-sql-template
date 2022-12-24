import React from 'react';
import { useEffect, useState } from 'react';
import { localDevApi } from '../config/constants';

export default function Home() {

    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(localDevApi + '/api/greetings');
            const data = await response.json();
            setGreeting(data.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Homepage</h1>

            <p>Backend response ==> {greeting !== "" ? greeting : " - "}</p>
        </div>
    )
}