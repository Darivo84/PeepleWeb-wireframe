import React from 'react'

import Navbar from '../components/Navbar';

import ProfileImg from '../img/profile.png';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <div style={{display: 'flex'}}>
      <div className="LeftPanel" style={{ width:'20vw', height:'100vh', backgroundColor: '#ccc', alignItems: 'center'}}>
        <br />
        <div className="profileImg" style={{ background:'#ccc',width:'80%', alignItems: 'center', justifyContent: 'center', marginLeft: '25px', border: '1px solid #fff', borderRadius: '100%', overflow: 'hidden' }}>
          <img src={ProfileImg} alt="Male" style={{ height:'200px', paddingLeft: '10px', paddingTop: '40px' }}/>
        </div>
        <br />
        <h3 style={{ textAlign: 'center', color: 'white' }}> User Name </h3>
        <br />
        <div className="divider" style={{width: '100%', color: 'white', border: '1px solid #fff'}}></div>
        <br />
        <p style={{ textAlign: 'center', color: 'white' }}><strong>Mobile: </strong>+1 000 000 0000</p>
        <br />
        <p style={{ textAlign: 'center', color: 'white' }}><strong>Email: </strong>user.name@mail.com</p>
        <br />
        <p style={{ textAlign: 'center', color: 'white' }}><strong>Address: </strong>20 Somewhere Over</p>
        <p style={{ textAlign: 'center', color: 'white' }}><strong></strong>The Rainbow</p>
      </div>

        <div className="RightPanel" style={{ width: '80vw',  padding: '20px'}}>

          <div style={{ backgroundColor: '#d7dbd8', padding: '10px', alignItems: 'center'}}>
           <h2 style={{ textAlign: 'center', color: '#fff' }}> Review more users </h2>

            <div style={{display: 'flex', flexDirection: 'row', padding: '20px'}}>
              <div style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer', height: '50px', width: '33%'}}>
                <p style={{ textAlign: 'center', marginTop: '15px', color: '#fff' }}>Professional</p>
              </div>
              <div style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer', height: '50px', width: '33%', marginLeft: '15px', }}>
                <p style={{ textAlign: 'center', marginTop: '15px', color: '#fff' }}>Personal</p>
              </div>
              <div style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer', height: '50px', width: '33%', marginLeft: '15px', }}>
                <p style={{ textAlign: 'center', marginTop: '15px', color: '#fff' }}>Romantic</p>
              </div>
            </div>
           
          </div>

          <br />
          <br />
          <h3 style={{ color: '#0e0e0e'}}>Users reviewed by you</h3>
          <br />

          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }}>
            <h4 style={{ textAlign: 'left', color: '#000' }}> User  </h4>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '15px', cursor: 'pointer' }}>
            <h4 style={{ textAlign: 'left', color: '#000' }}> User  </h4>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '15px',  cursor: 'pointer'}}>
            <h4 style={{ textAlign: 'left', color: '#000' }}> User  </h4>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>
          </div>

          <br />
          <br />
          <h3 style={{ color: '#0e0e0e'}}>Users who reviewed you</h3>
          <br />
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }}>
            <h4 style={{ textAlign: 'left', color: '#000' }}> User  </h4>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
              <br />
              <div style={{ border: '1px solid #ccc', padding: '10px'}}>
                <p><strong>Do you know this user?</strong> YES | NO</p>
              </div>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '15px', cursor: 'pointer' }}>
            <h4 style={{ textAlign: 'left', color: '#000' }}> User  </h4>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
              <br />
              <div style={{ border: '1px solid #ccc', padding: '10px'}}>
                <p><strong>Do you know this user?</strong> YES | NO</p>
              </div>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '10px', marginLeft: '15px',  cursor: 'pointer'}}>
            <h4 style={{ textAlign: 'left', color: '#000' }}> User  </h4>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
              <br />
              <div style={{ border: '1px solid #ccc', padding: '10px'}}>
                <p><strong>Do you know this user?</strong> YES | NO</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Home
