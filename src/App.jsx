
import './App.css'


import img1 from '@/assets/IMAGE (20).png'
import img2 from '@/assets/IMAGE (21).png'
import img3 from '@/assets/Frame (11).png'
import img4 from '@/assets/IMAGE (22).png'
import img5 from '@/assets/IMAGE (23).png'
import img6 from '@/assets/IMAGE (24).png'
import img7 from '@/assets/IMAGE (25).png'
import img8 from '@/assets/IMAGE (26).png'
import img9 from '@/assets/IMAGE (27).png'
import img10 from '@/assets/Frame (12).png'
import img11 from '@/assets/IMAGE (28).png'
import img12 from '@/assets/IMAGE (29).png'
import img13 from '@/assets/IMAGE (30).png'
import img14 from '@/assets/IMAGE (31).png'
import img15 from '@/assets/Frame (13).png'
import img16 from '@/assets/IMAGE (32).png'
import img17 from '@/assets/IMAGE (33).png'
import img18 from '@/assets/IMAGE (34).png'
import img19 from '@/assets/Frame (14).png'
import img20 from '@/assets/Frame (15).png'
import img21 from '@/assets/Frame (16).png'

export default function App() {
  return (
    <>
      <header className='header'>
        <aside>
          <img src={img1} alt="" />

          <div className='none'>

            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Pages</p>
            <p>Contact</p>
          </div>
        </aside>

        <div>
          <p className='none'>Cart (0)</p>
          <button className='button'>Get a free quote</button>
        </div>

      </header>

      <section className='section1'>
        <aside>
          <h1 style={{ color: "#211F54" }}>Quality cleaning for your home</h1>
          <p style={{ color: "gray" }}>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
          <div >
            <button className='button'>Get a free quote</button>
            <img style={{ widows: "100px", height: "60px" }} src={img3} alt="" />
          </div>
        </aside>

        <img className='img' src={img2} alt="" />
      </section>


      <section className='section2'>
        <div className='div-sec2'>
          <h1>How our service works?</h1>
          <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        </div>
        <div className='card-sec2'>
          <Card1 img={img4} name="1. Schedule online" des="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n." />
          <Card1 img={img5} name="2. Pay online easily" des="Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc." />
          <Card1 img={img6} name="3. Get your house cleaned" des="Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend." />
        </div>
        <div className='div-button'>
          <button className='button'>Get a free quote</button>
          <button className='button1'>Explore services</button>
        </div>
      </section>


      <section className='section3'>
        <div className='div-sec2'>
          <h1>Our cleaning services have no comparison</h1>
          <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien.</p>
        </div>
        <div className='card-sec3'>
          <Card2 name="3,480+" des="clients" img={img7} />
          <Card2 name="12,540+" des="Jobs done" img={img8} />
          <Card2 name="100+" des="Employees" img={img9} />
        </div>
        <img className='img-sec3' src={img10} alt="" />

      </section>

      <section className='section4'>
        <div className='div-sec4'>
          <h1>Take a look at our professional services</h1>
          <button className='button1'>Explore services</button>
        </div>
        <div className='card-sec4'>
          <Card3 img={img11} name="House cleaning" des="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."/>
          <Card3 img={img12} name="Office cleaning" des="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."/>
          <Card3 img={img13} name="Industrial cleaning" des="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."/>
        </div>
      </section>

      <section className='section5'>
        <img src={img14} alt="" />
        <aside>
          <p  style={{color:"white"}} className='p-sec5'>Covid-19 sanitization</p>
          <h1 style={{color:"white"}}>We follow guidelines to keep you safe from the COVID-19 virus</h1>
          <p  style={{color:"white"}}>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
          <div className='div-button' style={{display:"flex"}}>
          <button className='button'>Get a free quote</button>
      
          <img  className="img-sec5" src={img15} alt="" />
        </div>
        </aside>
      </section>

      <section className='section6'>
        <img className='img-sec6' src={img16} alt="" />
        <aside>
          <h1>We cover all areas of your home or office</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div style={{display:"flex", gap:"20px"}}>
            <div>
              <Card4 name="Bathrooms"/>
              <Card4 name="Kitchens"/>
              <Card4 name="Living Rooms"/>
              <Card4 name="Carpets"/>
            </div>
            <div>
              <Card4 name="Bedrooms"/>
              <Card4 name="Offices  "/>
              <Card4 name="Businesses"/>
              <Card4 name="Windows"/>
            </div>
          </div>
          <button className='button'>Get a free quote</button>
        </aside>
      </section>

      <section className='section7'>
        <aside>
          <h1>What makes us different?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p style={{fontSize:"14px"}}>Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque laudantiu sed ut.</p>
            <div className='card-sec7'>
              <Card5 number="10K" des="Years"/>
              <Card5 number="5K" des="Clients"/>
              <Card5 number="20K" des="Jobs done"/>
            </div>
            <button className='button'>Get a free quote</button>
        </aside>
        <img src={img18} alt="" />
      </section>


      <section className='section8'>
        <div className='head-sec8'>
          <aside>
            <h1>Articles & resources</h1>
            <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
          </aside>
          <div className='div-button'>
          <button className='button'>Get a free quote</button>
          <button className='button1'>Explore services</button>
        </div>

        </div>
        <div className='card-sec8'>
          <div className='card6-sec8'>
            <img src={img19} alt="" />
          <Card6 name="8 best vacuum cleaners to clean any mess for your home in 2022" des="Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."  date="Jan 28, 2022"/>
          </div>
          <div className='card6-sec8'>
            <img src={img20} alt="" />
          <Card6 name="8 best vacuum cleaners to clean any mess for your home in 2022" des="Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males."  date="Jan 28, 2022"/>
          </div>
      

        </div>
      </section>
    

    <section className='section9'>
      <aside className='aside-sec9'>
        <div>

        <h1>Request a free cleaning quote today</h1>
        <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
        <img src={img3} alt="" />
        </div>
        <div>
          <h1>Not convinced yet?</h1>
          <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
          <button className='button1'>Browse our packages</button>

        </div>
      </aside>
      <aside className='inputs'>
        <div className='input'>
          <Input name="Full Name"/>
          <Input name="Phone number"/>
        </div>
        <div className='input'>
          <Input name="Address"/>
          <Input name="Email"/>
        </div>
        <div className='input'>
          <Input name="Requested service"/>
          <Input name="Day of service"/>
        </div>
        <div>
          <p>Add a note</p>
          <textarea name="" className='textArea' id=""></textarea>
        </div>
        <button className='button'>Get a free quote</button>

      </aside>
    </section>


    <footer>
      <div className='head-of-footer'>
        <div className='card-footer'>
          <h1>Quality cleaning for your home</h1>
          <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
          <img src={img21} alt="" />
        </div>


        <div className='card-footer'>
          <h1>Contact us</h1>
          <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
          
        </div>


        <div className='card-footer'>
          <h1>Hours</h1>
          <div>
            <h1>Monday to Friday</h1>
            <p>6:00 AM - 9:00 PM</p>
          </div>
          <div>
            <h1>Saturday & Sunday</h1>
            <p>8:00 AM - 8:00 PM</p>
          </div>
     
        </div>


        <div className='card-footer'>
          <h1>Get a free estimate</h1>
          <h1 style={{color:"blue"}}>(414) 567 - 2109</h1>
          <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
          <button className='button'>Request a free quote</button>
       
        </div>
      </div>
      <div className='fot-of-fot'>
        <img src={img1} alt="" />
        <p>Copyright © Cleaning X | Designed by <span style={{color:"#0075FF"}}>BRIX Templates</span>- Powered by <span style={{color:"#0075FF"}}>Webflow</span> - <span style={{color:"#0075FF"}}>Licenses</span> </p>
      </div>
    </footer>
    </>
  )
}



function Card1(props) {
  return (
    <div className='card1'>
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>{props.des}</p>
    </div>
  )
}


function Card2(props) {
  return (
    <div className='card2'>
      <img src={props.img} alt="" />
      <div>

        <p>{props.des}</p>
        <h1>{props.name}</h1>
      </div>
    </div>
  )

}

function Card3(props) {
  return (
    <div className='card3'>
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>{props.des}</p>
    </div>
  )
}

function Card4(props) {
  return(
    <div style={{display:"flex", alignItems:"center"}}>
      <img src={img17} alt="" />
      <h1 style={{fontSize:"20px"}}>{props.name}</h1>
    </div>
  )
}

function Card5(props) {
  return(
    <div>
      <h1 style={{margin:"0px"}}>{props.number} <span style={{color:"#0075FF"}}>+</span> </h1>
      <p style={{margin:"0px"}}>{props.des}</p>
    </div>
  )
}

function Card6(props) {
  return(
    <div className='card6'>
      <h1>{props.name}</h1>
      <p>{props.des}</p>
      <div>
        <h1>{props.date}</h1>
        <div style={{width:"50px",height:"50px",backgroundColor:"blue"}} className='blue'></div>
      </div>
    </div>
  )
}

function Input(props) {
  return(
    <div>
      <p>{props.name}</p>
      <input className='input-por'type="text" />
    </div>
  )
}