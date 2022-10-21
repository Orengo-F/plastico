import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {

    return (
        <section className="checkout-wrapper">
            <Authenticator>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
            </Authenticator>
        </section>
    )
}

export default Checkout
