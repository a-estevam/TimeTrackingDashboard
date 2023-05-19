import Task from    "../Task/Task"
import Style from "./tasks.module.css"

function Tasks(){
    return(
        <div className={Style.TasksContent}>
            <div className={Style.TaskWork}>
                <Task title="Work" hours="32hrs" description="Last week - 36hrs"/>
            </div>

            <div className={Style.TaskPlay}>
                <Task title="Play" hours="10hrs" description="Last week - 8hrs"/>
            </div>

            <div className={Style.TaskStudy}>
                <Task title="Study" hours="4hrs" description="Last week - 7hrs"/>
            </div>

            <div className={Style.TaskExercise}>
                <Task title="Exercise" hours="4hrs" description="Last week - 5hrs"/>
            </div>

            <div className={Style.TaskSocial}>
                <Task title="Social" hours="5hrs" description="Last week - 10hrs"/>
            </div>

            <div className={Style.TaskSelf}>
                <Task title="Self Care" hours="2hrs" description="Last week - 2hrs"/>
            </div>
        </div>
    )
}

export default Tasks