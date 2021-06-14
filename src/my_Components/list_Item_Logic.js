/*
    Author: Zimuzo Agu

    Description of File: 
    Implements the logic for adding, deleting, completing, & updating to do items
*/


import React, {useState} from 'react'
import Form from './form'
import Icon_Logic from './icons';

function ListItemLogic () {
    const [stored_List_Items, set_list_Item] = useState([]);

    const handle_Task_Addition = (current_List_Item) => {

        const all_List_Items = [current_List_Item, ...stored_List_Items];  // Keeps track of the current list item as well as the previous list item

        set_list_Item(all_List_Items); // Pushes the new value of the list item to storage
        console.log(current_List_Item, ...stored_List_Items);
    };


    return (
        <>
            <Form onSubmit={handle_Task_Addition}/>  
            <Icon_Logic 
                stored_Items={stored_List_Items}
                complete_Task={complete_List_Item}
                update_Task={update_List_Item}
                remove_Task={remove_List_Item}
            />
        </>
    )
}

export default ListItemLogic



