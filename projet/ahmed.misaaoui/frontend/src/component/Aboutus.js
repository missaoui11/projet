import React from 'react';

function Aboutus() {
  const myImage = "https://am-avocat.fr/wp-content/uploads/2016/05/cropped-Logo-Avocat.png";
  const logo ="https://mlusk6kjzisu.i.optimole.com/cb:Zy_l~5b968/w:300/h:300/q:mauto/id:b65d3d86caa1430b3c356a097f17297d/https://logo-creation.com/logohauteresolution-640w-1.png"
  return (
    <div id="about" > 
       <div className='about1'>
          <img className='logo' src={logo} alt='icone' />
          <div id='about12' >
            <h1 >About  us</h1>
          </div>
       </div>
      <div className='divet' >
      <div className='photo'>
          <h1 id='titleph'>Avocat Lowyer</h1>
          <img src={myImage}  alt='myimage' />
          
      </div>
      <div id='text'>
        <h1 className='titre2' >
          Service
        </h1>
      <ul className='textul'>
        <li>on defend les victimes</li>
        <li>on te trouve des solutions</li>
        <li>on aide tout le monde</li>
        <li>dans nos yeux tu es un innocent </li>
         <li>votre defence, notre priorite</li>
         <li>Protégez vos droits avec notre expertise juridique</li>
         <li>Des avocats dévoués à votre service</li>
         <li>notre cite, votre tranquillité d'esprit</li>
         <li>Des avocats compétents, des résultats probants</li>


      </ul>

      </div>
      </div>
    </div>
  )
}

export default Aboutus ;

