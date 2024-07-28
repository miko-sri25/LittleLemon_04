import './foodDisplay.css'
import img2 from '../assests/food/greek-salad.jpg'
import img3 from '../assests/food/Soup.avif'

const FoodDisplay = () =>{
    return(
        <>
            <div class="cards">
                <div class="card" style={{width: '20rem'}}>
                <img class="card-img-top" src={img2} style={{width: 286}}/>
                    <div class="card-body" id='b'>
                        <div class="card-title h5"><b>Greek Salad</b></div>
                        <p class="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons.</p>
                        <button type="button" class="btn btn-primary">Order Delivery </button>
                    </div>
                </div>
                <div class="card" style={{width: '20rem'}}>
                <img class="card-img-top" src={img3} style={{width: 310, height:212}}/>
                    <div class="card-body" id='c'>
                        <div class="card-title h5"><b>Tomato Soup</b></div>
                        <p class="card-text">The famous Tomato Soup made with fresh tomatoes, simmered with onions, garlic and herbs and the belended to a smooth consistency.
                           </p>
                        <button type="button" class="btn btn-primary">Order Delivery </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FoodDisplay;