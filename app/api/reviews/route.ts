// app/api/reviews/route.ts
import { NextResponse } from 'next/server';

interface GoogleReview {
    author_name: string;
    rating: number;
    text: string;
    time: number;
}

interface PlaceDetailsResponse {
    result?: {
        reviews?: GoogleReview[];
    };
    status: string;
    error_message?: string;
}

export async function GET() {
    const apiKey = "AIzaSyCjh_AMz9VO59UMWzXSyPtOoatmku0ez48"
    const placeId = "EgoyMDI1MDExMC4wIKXMDSoJLDEwMjExMjMzSAFQAw"

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?` +
            `place_id=${placeId}&` +
            `fields=reviews&` +
            `key=${apiKey}`
        );

        const data: PlaceDetailsResponse = await response.json();

        if (data.status !== 'OK' || !data.result?.reviews) {
            console.log(data.error_message)
            return NextResponse.json(
                { error: "This " + data.error_message || 'No reviews found' },
                { status: 404 }
            );
        }

        const formattedReviews = data.result.reviews
            .filter(review => review.rating >= 4)
            .map((review, index) => ({
                id: index + 1,
                quote: review.text,
                author: review.author_name
            }));

        // Cache the response for 1 hour
        return NextResponse.json(
            { reviews: formattedReviews },
            {
                headers: {
                    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
                }
            }
        );
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json(
            { error: 'Failed to fetch reviews' },
            { status: 500 }
        );
    }
}