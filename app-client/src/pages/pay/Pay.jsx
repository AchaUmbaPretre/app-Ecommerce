import './pay.css'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { computeHeadingLevel } from '@testing-library/react'

const KEY = ''

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();

    const onToken = (token)=>{

        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async () =>{

            try{
                const res = await axios.post("http://localhost:8800/api/checkout/payment",
                    {   
                        tokenId: stripeToken,
                        amount: 2000
                    }
                 );
                 console.log(res.data)
                 navigate('/success')
            }

            catch(error){
                console.log(error)
            }

        }
    }, [stripeToken]);


    return (
      <>
          <div className="pay">
            { stripeToken ? ( <span>Processing. Please wait...</span> ) : (

            <StripeCheckout name='Acha shop' image='' 
            billingAddress
            shippingAddress
            description='Total est 300$'
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
                <button className="pay-btn">Pay now</button>
            </StripeCheckout>

            )}
          </div>
      </>
    )
  }
  
  export default Pay