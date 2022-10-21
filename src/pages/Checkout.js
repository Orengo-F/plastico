import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout
