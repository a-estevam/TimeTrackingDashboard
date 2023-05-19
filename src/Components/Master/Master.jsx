import Cards from "../Cards/Cards"
import Tasks from "../Tasks/Tasks"
import Style from "./master.module.css"

function Master(){
    return(
        <div className={Style.Content}>
            <div className={Style.ContentCard}>
                <Cards/>
            </div>
            <div className={Style.ContentTasks}>
                <Tasks/>
            </div>
        </div>
    )
}

export default Master