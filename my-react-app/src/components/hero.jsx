import './hero.css';

function Heroes(props) {

    const {item} = props; 

    return(
        <div className="card">
         <div className="card_title">{ item.person }</div>
         <div className="card_item"><span>Вселенная: </span>{ item.universe }</div>
         <div className="card_item"><span>Род деятельности: </span>{ item.activity }</div>
         <div className="card_item"><span>Суперсилы: </span>{ item.superpowers }</div>
         <img className="picture" src={ item.src } alt="" />


        </div>
    );
}

export default Heroes;