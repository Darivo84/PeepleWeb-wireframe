import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Card from '../components/cards/Card';
import Navbar from '../components/Navbar';

const Featured = () => {
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Navbar />
      <h1 style={{textAlign: 'center', marginTop: '30px'}}>Featured Profiles</h1>
      <br />
      <Card />
      <div style={{ width: '100vw', height: '20vh', marginTop: '70vh', textAlign: 'center', backgroundColor: '#ccc' }}>
        <br />
        <Link to="/home" style={{textDecoration: 'none'}}>
        <Button variant="outlined" color="default" href="#outlined-buttons">
          Continue to Home
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default Featured
