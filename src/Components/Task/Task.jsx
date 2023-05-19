import Style from "./task.module.css"

function Task(props){
    return(
        <div className={Style.Task}>
            <div className={Style.TasksTop}>
                <h3>{props.title}</h3>
                <button>...</button>
            </div>

            <div className={Style.Description}>
            <h1>{props.hours}</h1>
            <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Task