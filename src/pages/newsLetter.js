import React, { useState, useEffect } from 'react';
import api from "@/axiosHandler";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NewsletterSubscription = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkSubscriptionStatus();
    }, []);

    const checkSubscriptionStatus = async () => {
        setIsLoading(true);
        try {
            const response = await api.get('newsletter-status/');
            setIsSubscribed(response.data.is_subscribed);  // Assuming response.data is a boolean
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching subscription status:', error);
        } finally {
            setIsLoading(false);
        }
    };

   const handleSubscriptionChange = async () => {
    setIsLoading(true);
    const endpoint = isSubscribed ? '/unsubscribe-newsletter/' : '/subscribe-newsletter/';
    try {
        await api.post(endpoint);
        const statusResponse = await checkSubscriptionStatus();
        setIsSubscribed(statusResponse);
        console.log(statusResponse);
        alert(`You have been ${isSubscribed ? 'unsubscribed' : 'subscribed'} successfully.`);
    } catch (error) {
        console.error(`Error ${isSubscribed ? 'unsubscribing' : 'subscribing'} from newsletter:`, error);
    } finally {
        setIsLoading(false);
        window.location.reload();
    }
};

    return (
        <div className={"bg-gold text-black min-h-screen flex flex-col justify-between"}>
            <NavBar/>
        <div className="container mx-auto my-10 p-6 bg-white/10 shadow-md rounded flex items-center justify-center flex-col flex-grow">
            <h1 className="text-3xl font-bold mb-6 text-center">Newsletter Subscription</h1>
            <div className="flex justify-center">
            <p>  </p>
                    <button
                        onClick={handleSubscriptionChange}
                        className={`bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-800 transition ${isSubscribed ? 'hover:bg-red-500 bg-red-600' : ''}`}
                    >
                        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                    </button>

            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default NewsletterSubscription;
