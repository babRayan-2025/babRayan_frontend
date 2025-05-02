import React from 'react';
import NewsDetailClient from './NewsDetailClient';

// This is the server component that receives params
export default function NewsDetailPage({ params }) {
  return <NewsDetailClient newsId={params.id} />;
}

// This function is required when using "output: export" in Next.js config
// It tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
    try {
        // Fetch all news IDs from the API
        const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/news', {
            next: { revalidate: 3600 } // Revalidate every hour
        });
        
        if (!response.ok) {
            console.warn("API not available during build time, returning empty array");
            return [];
        }
        
        const result = await response.json();
        
        if (result.status && result.data) {
            // Return an array of objects with id param for each news item
            return result.data.map(item => ({
                id: item.id,
            }));
        }
        
        return [];
    } catch (error) {
        console.warn("Error generating static params:", error);
        return [];
    }
}


