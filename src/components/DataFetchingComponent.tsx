import React, { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
};

const DataFetchingComponent: React.FC<{ apiUrl: string }> = ({ apiUrl }) => {
    const [data, setData] = useState<Post[]>([]);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setErrorMsg(error.message));
    }, [apiUrl]);

    return (
        <div className="flex flex-col items-center justify-center my-8">
            {
                errorMsg && <p className="text-red-500 text-lg mb-4">{errorMsg}</p> ||
                data.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-xl">
                        <h2 className="text-gray-700 font-bold text-xl mb-2">{item.title}</h2>
                        <p className="text-gray-700 text-base">{item.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DataFetchingComponent;
