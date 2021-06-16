/*
    Author: Zimuzo Agu

    Description:
    Defines function names for the icons used in this app, 
    and assigns those functions to icon names
*/

import React, {useState} from 'react'
import Form from './form'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'

function IconLogic ({stored_Items, complete_Task, update_Task, remove_Task}) {
    const [current_Edition, set_Edition] = useState({
        task_Id: null,
        edition_Value: ''
    });

    const submitUpdate = edition_Value => {
        update_Task(current_Edition.task_Id,edition_Value);
        set_Edition({
            task_Id: null,
            edition_Value: ''
        });
    };
    
    if (current_Edition.task_Id) {
        return <Form edit_User_Input={current_Edition} onSubmit={submitUpdate} />;
    }


    /* 
        Return function Explanation:
        The state of the stored items are passed in as a prop from list_Item_Logic.js

        The current Item being evaluated in those stored items is passed in as the first parameter
        The Index of the current item is the second parameter and is used as the key to help React identify which items have changed, are added, or are removed
    */
    return stored_Items.map((current_Item, item_Index) => ( 
        //If the current Item is complete, it is added to the class "completed" so its style (CSS) can be changed to that of a completed task
        <div className={current_Item.isComplete ? 'task_Row completed' : 'task_Row'} key={item_Index}>

            <div key={current_Item.task_Id} onClick={() => complete_Task(current_Item.task_Id)}>
                {current_Item.task_Value}
            </div>

            <div className="icons">
                <AiOutlineEdit className="edit_Icon"
                    onClick={() => set_Edition({
                                        task_Id: current_Item.task_Id,
                                        edition_Value: current_Item.task_Value
                                    })}
                />

                <AiOutlineCloseCircle className="delete_Icon"
                    onClick={() => remove_Task(current_Item.task_Id)}
                />
            </div>
        </div>   
    ));
}

export default IconLogic
