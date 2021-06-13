/*
    Author: Zimuzo Agu

	Description of File:
	This is where all of the functionality of the list is createdd
	such as input box, submission button, & form management
*/

import React, {useState} from 'react'
	
const [input, set_Input] = useState(''); // The user input from the forms is the current state and the set_Input function will be used to change that user input when needed


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

			<form action="http://www.example.com">

				<p>This is where the form controls will appear.</p>
			</form>

    	</>
    )
}

export default List
