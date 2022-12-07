import React from "react"
import { price } from "../../assets/data/data"
import { Heading } from "../../common/Heading"

export const Price = () => {
  return (
    <>
      <section className='price'>
        <Heading title='SHA Fashions' desc='Get to know about SHA Fashions' />
         <h5>SHA Fashions: Trending Collections</h5>
         <p>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest jwellery collection when you can find it on the Internet in a single click? SHA fashions houses everything you can possibly imagine, from trending categories like Earringd, Anklets, Pendants Necklace, and Rings to in-vogue fashion staples all lifestyle accessories; In modern shades like silver, ethnic, copper, metallic silver and gold to A substance transcends its own beauty when it is able to speak to the beauty of other things. Here, silver jewllery is embedded with semi-precious stones to create stunning pieces of jewellery, the fusion making the whole inimitable in it. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.</p>
         <p>What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from SHA Fashions when there are multiple options available to you, well, the below will answer your question.</p>
         <h5>Flipkart Plus</h5>
         <p>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a SHA FashionsPlus member. In short, earn more when you shop more!</p>
         <p>What's more, you can even use the Flipkart supercoins for a number of exciting services, like:
An annual Zomato Gold membership
An annual Hotstar Premium membership
6 months Gaana plus subscription
Rupees 550 instant discount on flights on ixigo Terms and conditions apply.</p>
         <h5>No Cost EMI</h5>
         <p>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on selected jwellery, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>
         <h5>EMI on Debit Cards</h5>
         <p>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>
         <h5></h5>
        {/* <div className='content'>
          {price.map((item) => (
            <div className='box' key={item.id}>
              <h3>{item.name}</h3>
              <h1>
                <span>$</span>
                {item.price}
                <label htmlFor=''>/user per month</label>
              </h1>
              <p>{item.desc}</p>
              <button className='button'>GET STATRED</button>

              <ul>
                {item.list.map((lists) => (
                  <li>
                    <i>{lists.icon}</i>
                    <span>{lists.para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </section>
    </>
  )
}
