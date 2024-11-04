import React from 'react'
import './Subscription.scss';

const Subscription = () => {
  const myStyles = {
    renewStyles: {
      color: '#000',
      backgroundColor: 'yellow',
      borderRadius: '10px',
      padding: '20px',
      border: 'dashed 6px red'
    },
    btnStyles: {
      border: 'solid 2px red',
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px'
    }
  };

  return (
    // we have used external css cls frm bootstrap
    <div className='text-center'>Subscription
     {/* External CSS - Refer Subscription.css */}
     <h3 className='subscription-info'>
      You are an Active Subscriber of YoTube Pro!
     </h3>

     {/* Inline Styles - NEVER EVER TRY THIS IN LISTS(loops) */}
     <p
     style={{
       color: '#fff',
       backgroundColor: 'red',
       borderRadius: '10px',
       padding: '10px 20px'
     }}
     >
      Your Subscription will end in 10 days!
     </p>

     {/* Internal Styles */}
     <p style={myStyles.renewStyles}>
      Renew Now at 50% discount. Apply Coupon: OFFER50
     </p>

     <button type='button' style={myStyles.btnStyles}>
      Renew Now
     </button>
    </div>
  )
}

export default Subscription;
