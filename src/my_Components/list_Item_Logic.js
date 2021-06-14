/*
    Author: Zimuzo Agu

    Description of File: 
    Implements the logic for adding, deleting, completing, & updating to do items
*/


import React, {useState} from 'react'
import Form from './form'

function ListItemLogic () {
    const [previous_List_Items, set_list_Item] = useState([]);

    const handle_Task_Addition = (current_List_Item) => {

        const store_List_Items = [current_List_Item, ...previous_List_Items];  // Keeps track of the current list item as well as the previous list item

        set_list_Item(store_List_Items); // Pushes the new value of the list item to storage
        console.log(current_List_Item, ...previous_List_Items);
    };


    return (
        <>
            <Form onSubmit={handle_Task_Addition}/>  
        </>
    )
}

export default ListItemLogic



