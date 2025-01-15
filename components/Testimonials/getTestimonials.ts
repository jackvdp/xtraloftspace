interface Created {
    id: number;
    quote: string;
    author: string;
}

export default async function fetchGoogleReviews(): Promise<Created[]> {
    try {
        const response = await fetch('/api/reviews');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reviews: Created[] = await response.json();
        console.log('Google reviews:', reviews);
        return reviews;
    } catch (error) {
        console.error('Error fetching Google reviews:', error);
        throw error;
    }
}