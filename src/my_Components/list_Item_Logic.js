/*
    Author: Zimuzo Agu

    Description of File: 
    Implements the logic for adding, deleting, completing, & updating to do items
*/


import React, {useState} from 'react'
import Form from './form'
import IconLogic from './icons';

function ListItemLogic () {
    const [stored_List_Items, set_list_Item] = useState([]);

    // Adds each new Task to 
    const handle_Task_Addition = (current_List_Item) => {

        const all_List_Items = [current_List_Item, ...stored_List_Items];  // Keeps track of the current list item as well as the previous list item

        set_list_Item(all_List_Items); // Pushes the new value of the list item to storage
        console.log(current_List_Item, ...stored_List_Items);
    };


    // Toggles a task between complete & incomplete
    const complete_List_Item = (id) => {
        // Goes through every task in the list with a map
        let completed_Task = stored_List_Items.map(current_Item => {
            // If the current item being clicked matches the key passed to the parameter. The the item gets toggled between complete & incomplete
            if (current_Item.id === id) {
                current_Item.isComplete = !current_Item.isComplete;
            }

            return current_Item;
        })
    }

    const update_List_Item = (id, new_Value) => {
        set_list_Item(old_Value => old_Value.map(same_Item =>
            // If the item currently being evaluated matches the id that the user clicked on, the new value of the text box will be returned, otherwise the value of the text box will stay the same 
            (same_Item.id === id ? new_Value : same_Item)
        ))
    }

    const remove_List_Item = () => {
        
    }


    return (
        <>
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



