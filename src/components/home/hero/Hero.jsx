import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO WINNY TRAVELS' title='Embark on Unforgettable Journeys with Winny Travels' />
            <p>Welcome to Winny Travels - your gateway to unforgettable adventures! Whether you are seeking 
            a tranquil escape, an exhilarating expedition, or a cultural immersion, we are here to make 
            your travel dreams come true. Our expert team is dedicated to crafting personalized 
            itineraries that cater to your unique preferences and interests. 
            With Winny Travels, you all explore breathtaking destinations, experience diverse cultures, 
            and create memories.  </p>


            <div className='button'>
              <button className='primary-btn'>
                TRAVEL WITH US<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
