import PropTypes from 'prop-types'


function Card(props){
    const {
        cardPicture,
        title = "Unknown",
        type = "Anonymous",
        discription = "not defined",
        isRuler = false,
        orderNum = 99999,
    } = props;

    return(
        <div className="card">
            <img src={cardPicture} alt="Card Picture" className="card-img"/>
            <h2 className='card-title'>Card Title:  {title}</h2>
            <p className='card-type'>Type:   {type} </p>
            <p className='card-discription'>Discription:   {discription}</p>
            <p className="card-power">Ruler: {isRuler ? "Yes" : "No - Takes order from above"}</p>
            <p className="order-number">#  {orderNum}</p>
            <hr />
        </div>   
    );}

Card.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    discription: PropTypes.string,
    isRuler: PropTypes.bool,
    orderNum: PropTypes.number,
}



export default Card