import Navigation from '../../Layout/Navigation'
import Herosection from '../../Layout/Herosection'
import Footer from '../../Layout/Footer.jsx'

function About() {


const mydata={
  name:'Know more About us'
}
  
  return (
    <>    <div>
      <Navigation/>
      
      <Herosection data={mydata} showbutton={false}/>
      <Footer/>
    </div>
    </>

  )
}

export default About