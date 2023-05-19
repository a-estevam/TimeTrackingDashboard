import Style from "./cards.module.css"


function Cards(){
    return(
        <div className={Style.CardsContainer}>
            <div className={Style.CardsContainerTop}>
                <img src="../src/assets/images/image-jeremy.png" alt="" srcset="" />
                <div className={Style.ReportFor}>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className={Style.CardsContainerButton}>
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </div>
        </div>
    )
}

export default Cards