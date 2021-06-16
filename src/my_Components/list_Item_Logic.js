/*
    Author: Zimuzo Agu

    Description of File: 
    Implements the logic for adding, deleting, completing, & updating to do items
*/


import React, {useState, useEffect} from 'react'
import Form from './form'
import IconLogic from './icons';

function ListItemLogic () {
    const [stored_List_Items, set_list_Item] = useState([]);


    useEffect(() => {
        const task_Data = localStorage.getItem('user_Task_Storage') // Retrieves all of the items stored in local storage

        if (task_Data) { // Checks if an data is stored
            set_list_Item(JSON.parse(task_Data)) // If data is stored then the program uses the data from local storage
        }  
    }, [])

    useEffect(() => {
		localStorage.setItem('user_Task_Storage', JSON.stringify(stored_List_Items)) // Stores every list item in local storage
	})


    // Adds each new Task to 
    const handle_Task_Addition = (current_List_Item) => {
        if (!current_List_Item.task_Value || /^\s*$/.test(current_List_Item.task_Value)) {  // Regular expressions to ignore whitespace & make sure input field is not blank
            return;
        }

        const all_List_Items = [current_List_Item, ...stored_List_Items];  // Keeps track of the current list item as well as the previous list item

        set_list_Item(all_List_Items); // Pushes the new value of the list item to storage
    };


    // Toggles a task between complete & incomplete
    const complete_List_Item = (id) => {
        // Goes through every task in the list with a map
        let completed_Task = stored_List_Items.map(current_Item => {
            // If the current item being clicked matches the key passed to the parameter. The the item gets toggled between complete & incomplete
            if (current_Item.task_Id === id) {
                current_Item.isComplete = !current_Item.isComplete;
            }
            return current_Item;
        })
        set_list_Item(completed_Task);
    };

    const update_List_Item = (id, new_Value) => {
        if (!new_Value.task_Value || /^\s*$/.test(new_Value.task_Value)) { // Regular expressions to ignore whitespace & make sure input field is not blank
            return;
        }


        set_list_Item(old_Value => old_Value.map(current_Item =>
            // If the item currently being evaluated matches the id that the user clicked on, the new value of the text box will be returned, otherwise the value of the text box will stay the same 
            (current_Item.task_Id === id ? new_Value : current_Item)
            
        ));
    };

    const remove_List_Item = (id) => {
        // Takes all of the stored list items and creates a new array of stored list items with all of the original items in the list except for the item with the specfic id being evaluated
        const removed_Task = [...stored_List_Items].filter(x => x.task_Id !== id)

        set_list_Item(removed_Task);
    };


    return (
        <>
            <h1>Plan Your Day</h1>
            <Form onSubmit={handle_Task_Addition}/>  
            <IconLogic 
                stored_Items={stored_List_Items}
                complete_Task={complete_List_Item}
                update_Task={update_List_Item}
                remove_Task={remove_List_Item}
            />
        </>
    )
}

export default ListItemLogic



