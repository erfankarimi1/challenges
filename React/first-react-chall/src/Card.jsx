import cardpicture from './assets/hero.png'
function Card(){
    return(
        <div className="card">
            <img src={cardpicture} alt="Card Picture" className="card-img"/>
            <h2 className='card-title'>Card Title</h2>
            <p className='card-type'>Type</p>
            <p className='card-discription'>Discription</p>
            <hr />
        </div>
        
    );
}
export default Card