import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';

type Props = {
  price: number
}

const StripeCheckoutButton = ({ price }: Props) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H0iU6DeXjKaqH4QUQCtHubOhD5s14kaQ0yxdDQNapkDHhrt6ESkj965jq5K5b7yTl1kgHL6x3BoIrCHoJk3Iegq00MYExcW10';

  const onToken = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(_response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please sure you use the provided credit card.'
      );
    })
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;