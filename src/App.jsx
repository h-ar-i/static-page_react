
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import image1 from './assets/image1.jpeg' 


import './App.css'
import './bootstrap.min.css'

import { Button,Card } from 'react-bootstrap';




function App() {
  

  return (
    <>
                                                      {/* header */}
      <div className="head">
      <Navbar bg="primary" data-bs-theme="">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Find</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <input type="text" placeholder='search' />
          <button className='bg-primary ms-2'><i class="fa-solid fa-magnifying-glass"></i></button>
        </Container>
      </Navbar>
      </div>
     

                                                         {/* card 1*/}

        {/* <img src={image1} className='background' alt="" /> */}
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>IN SEARCH OF <span className='text-warning'>INCREDIBLE</span></h1>
            <p><span style={{color:'orange'}}> CARS : -</span>
             Limited edition cars are exclusive and unique models produced in restricted quantities by automakers. These vehicles often boast special features, distinctive designs, or performance enhancements that set them apart from their standard counterparts. The limited production numbers, combined with unique attributes, appeal to collectors and enthusiasts, creating a sense of exclusivity and prestige. These cars may be released to commemorate special events, anniversaries, or collaborations, adding historical significance to their appeal. Typically accompanied by a higher price tag, limited edition cars are marketed to consumers seeking a rare and distinctive automotive experience. The limited availability, special features, and the potential for increased collector's value contribute to the allure of these unique vehicles in the automotive market.
            </p>
            <h5><span className='text-warning'> Here We Found The Best</span></h5>

            <br /><br />
            <h5 style={{textAlign:'center'}}><span className='text-primary'>C'est pour toi:</span></h5>
            <br /><br />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img src="https://i.pinimg.com/originals/60/04/30/600430c1d22c731b94cf4e7dae6b398a.gif" alt="" />
            <h6 style={{textAlign:'center', color:'blue',fontFamily:'fantasy'}}>"THE REGAL AURA"</h6>
          </div>
        </div>
        </div>

                                                     {/* c-1.2 */}
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-3 "> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/Aston_Martin_Concorde_Edition-1024x683.jpg" />
      <Card.Body>
        <Card.Title>Aston Martin DBS Superleggera Concorde</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <a href="https://media.astonmartin.com/strongaston-martin-dbs-superleggera-concorde-special-edition-is-cleared-for-take-off-strong/"> <Button variant="primary">GO </Button></a>
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/Bentley-Mulliner-Nauticis-Collection-1024x683.jpg" />
      <Card.Body>
        <Card.Title>Bentley Mulliner Nauticis Collection</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.bentleymotors.com/en/models/mulliner/collections/regional-collection.html"> <Button variant="primary">Go </Button></a> 
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/BMW-M4-Competition-x-KITH-1024x683.jpg" />
      <Card.Body>
        <Card.Title>BMW M4 Competition x KITH</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://discover.bmw.co.uk/article/bmw-m4-competition-x-kith"><Button variant="primary"> Go </Button></a>
      </Card.Body>
    </Card></div>
      </div>
        <div className="col-lg-2"></div>


                                                      {/* c2 */}
         <br /><br />
        <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/Audi-R8-green-hell--1024x683.jpg" />
      <Card.Body>
        <Card.Title>Audi R8 Green Hell</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.motor1.com/news/445266/audi-r8-green-hell-edition/"><Button variant="primary">Go </Button></a> 
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/Bugatti-La-Voiture-Noire-1024x683.jpg" />
      <Card.Body>
        <Card.Title>Bugatti La Voiture Noire</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.bugatti.com/the-bugatti-models/coachbuilding/la-voiture-noire/"><Button variant="primary">Go </Button></a> 
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/ferrari-br20-1024x683.jpg" />
      <Card.Body>
        <Card.Title>Ferrari BR20</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <a href="https://www.ferrari.com/en-EN/magazine/articles/introducing-the-ferrari-br20">  <Button variant="primary">Go </Button></a>
      </Card.Body>
    </Card></div>
      </div>
        <div className="col-lg-2"></div>



                                                       {/* c3 */}

        <br /><br />
        <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/lamborghini-sian-1024x683.jpg" />
      <Card.Body>
        <Card.Title>Lamborghini Sián</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.lamborghini.com/en-en/models/limited-series/sian-fkp-37"><Button variant="primary"> Go </Button></a>
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/Mercedes-AMG-G-63-Cigarette-Edition-1024x683.jpg" />
      <Card.Body>
        <Card.Title>Mercedes-AMG G 63 Cigarette Edition</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.motortrend.com/news/2020-mercedes-amg-g63-cigarette-racing-boat-info-pictures/"><Button variant="primary">Go </Button></a> 
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/Pagani-Huayra-Tricolore-1024x686.jpg" />
      <Card.Body>
        <Card.Title>Pagani Huayra Tricolore</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.pagani.com/press/the-pagani-huayra-tricolore/"><Button variant="primary">Go </Button></a> 
      </Card.Body>
    </Card></div>
      </div>
        <div className="col-lg-2"></div>



                                                        {/* c4 */}

        <br /><br />
        <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://i0.wp.com/buddymantra.com/wp-content/uploads/2019/08/image-44.jpg?w=628&ssl=1" />
      <Card.Body>
        <Card.Title>Lamborghini Veneno Roadster</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.lamborghini.com/en-en/history/veneno-roadster"><Button variant="primary">Go </Button></a> 
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://www.yachtscroatia.com/wp-content/uploads/2021/12/Rolls-Royce-Boat-Tail-1024x683.jpg" />
      <Card.Body>
        <Card.Title>Rolls Royce Boat Tail</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.rolls-roycemotorcars.com/en_GB/bespoke/coachbuild/coachbuild-boat-tail.html"><Button variant="primary"> Go</Button></a>
      </Card.Body>
    </Card></div>
        <div className="col-lg-3"> <Card style={{ width: '18rem', height:'420px' }}>
      <Card.Img variant="top" src="https://i0.wp.com/buddymantra.com/wp-content/uploads/2019/08/image-35.jpg?w=628&ssl=1" />
      <Card.Body>
        <Card.Title>McLaren P1 LM</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://cars.mclaren.com/en/legacy/mclaren-p1/specification"><Button variant="primary"> Go</Button></a>
      </Card.Body>
    </Card></div>
      </div>
        <div className="col-lg-2"></div>

        <br /><br />


                                                  {/* footer */}
     
    <hr />
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-2">
        <p>New car </p>
        <p>Compare cars</p>
        <p>Upcoming cars</p>
        <p>Latest cars</p>
        <p>user review</p>
      </div>
      <div className="col-lg-2">
        <p> BMW </p>
        <p>VOLKSWAGON</p>
        <p>FERRARI</p>
        <p>LAMBORGINI</p>
        <p>MERCEDES BENZ</p>
      </div>
      <div className="col-lg-2">
        <p>privacy and policy </p>
        <p>terms & conditions</p>
        <p>site map</p>
        <p>About us</p>
        
      </div>
      <div className="col-lg-2"><div className="contact">
                <h5>Contact us</h5>
                <div className='d-flex'>
                    <input type="text" className="form control  me-1 rounded" placeholder='email id:-' />
                    <button className='btn btn-primary'><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='icons d-flex justify-content-between mt-3'>
                <a href="https://twitter.com/?lang=en" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-x-twitter fa-1x"></i></a>
                <a href="https://www.instagram.com/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-1x"></i></a>
                <a href="https://www.facebook.com/" target='_blank' style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-facebook fa-1x"></i></a>
                <a href="https://in.linkedin.com/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-1x"></i> </a>
                <a href="https://github.com/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github fa-1x"></i> </a>
                <a href="" target='_blank' style={{textDecoration:'none',color:'white'}}> <i class="fa-solid fa-phone fa-1x"></i></a>
                </div>
            </div></div>
      <div className="col-lg-2"></div>

    </div>
    </>
  )
}

export default App
