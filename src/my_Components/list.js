/*
    Author: Zimuzo Agu

	Description of File:
	This is where all of the functionality of the list is createdd
	such as input box, submission button, & form management
*/

import React, {useState} from 'react'
	
function List (props) {
	const [user_Input, set__User_Input] = useState(''); // The user input from the forms is the current state and the set_Input function will be used to change that user input when needed

	const handle_Input_Change = (event) => {
		set__User_Input(event.target.value) // Sets the value of the input state to whatever the user enters in the text box
	}


	const handle_Task_Submission = (event) => { // Triggers when the user presses the submittion button
		event.preventDefault() // Prevents the page from reloading after the user submits the task
		
		set__User_Input('') // Makes the input box blank after the user presses submit
	}




	return (
		<>
			<form className="user_Input_Form" onSubmit={handle_Task_Submission}>
				<input 
					type="text"
					name="task_Text_Box"
					value={user_Input}
					onChange={handle_Input_Change}
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
