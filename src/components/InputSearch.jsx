"use client";
import React from "react";

const InputSearch = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const value = form.search.value;

        console.log(value);

      
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-3">

                <input
                    name="search"
                    type="text"
                    placeholder="Enter Food Name"
                    className="w-2xl px-3 py-4 border-2 rounded"
                />

                <button className="px-4 py-2 rounded bg-emerald-500 cursor-pointer">
                    Search
                </button>

            </form>
        </div>
    );
};

export default InputSearch;