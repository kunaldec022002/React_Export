import React from 'react';
import ReactDOM from 'react-dom/client';
import UserCard, {UserCardBio,UserCardBioAndCity,} from './UserCard';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/Footer/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>

  <Navbar/>
  <h1>Kunal Ingale</h1>


      <div style={{display:'flex'}}>

      <UserCard userName="Kunal"/>
      <UserCardBio userName="Kunal Ingale" bio="MCA Student at G H Raisoni"/>
      <UserCardBioAndCity userName="Harsh Maldhure" bio="MBA At Parul University" city="Nagpur"/>
    

      </div>

 

  <Footer/>
 
   
  </>

);


