import headerImg from '../assests/food/header_main.jpg'
import './siteHeading.css'

const SiteHeading = () => {
    const myStyle = {
        backgroundImage:  `url(${headerImg})`,
        height: "60vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: 'relative'
      };
      const headStyle={
        color: 'white',
        position: 'absolute',
        marginTop: '-25em',
        textAlign: 'justify',
        width: '40%',
        marginLeft: '8em'
      }
      return (
        <>
          <div style={myStyle}></div>
          <div style={headStyle}>
            <span style={{fontSize:50, color: 'yellow', textShadow: '3px 3px grey'}}>Little Lemon</span><br/>
                  
                              <div className="main-text">
                    <p id='sp'>At our family-run eatery, The Olive Grove, on Elm Street, we blend traditional receipes with a modern touch.</p>
                    <br></br>
                    <button id='button' style={{marginRight:'90'}}><a href="/reservations">Schedule a table</a></button>
                </div>
          </div>
        </>
      );
}
export default SiteHeading;