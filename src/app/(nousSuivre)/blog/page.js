"use client";

import SkeletonLoader from "../../../components/SkeletonLoader";
import React, { useState, useEffect } from "react";

export default function Blog() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonLoader />
            ) : (
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <h1 className="text-3xl font-bold underline">Blog page</h1>
                </main>
            )}
        </>
    );
}
