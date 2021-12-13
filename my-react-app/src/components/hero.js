

function Hero(props) {

    const {person, universe, activity, superpowers, src} = props;

    return(
        <div className="card">
         <div className="card_title">{ person }</div>
         <div className="card_item"><span>Вселенная: </span>{ universe }</div>
         <div className="card_item"><span>Род деятельности: </span>{ activity }</div>
         <div className="card_item"><span>Суперсилы: </span>{ superpowers }</div>
         <img className="picture" src={ src } alt="" />


        </div>
    );
}

export default Hero;