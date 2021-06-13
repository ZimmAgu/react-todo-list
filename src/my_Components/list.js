/*
    Author: Zimuzo Agu
*/

import React from 'react'


function List () {
	return (
		<>
			<form className="user_Input_Form">
				<input 
					type="text"
					name="task_Text_Box"
					placeholder="Enter a task here"
					className="user_Input_Text_Box"
				/>

				<input 
					type="submit"
					name="task_Submission_Button"
					value="Add Task"
					className="user_Input_Submission_Button"
				/>
			</form>
    	</>
    )
}

export default List
