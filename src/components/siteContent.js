import './siteContent.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const SiteContent = () => {

    return(
        <>
            <div className='special'>
                <div className='special-content'>
                    <h1 id='heading'>Today's Special Menu's</h1>
                    <Button id='btn'><Link to='/menu' target='_blank'> Click here for Menu</Link></Button>
                </div>
            </div>
     
        </>
    )
}
export default SiteContent;