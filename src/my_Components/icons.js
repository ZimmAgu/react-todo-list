/*
    Author: Zimuzo Agu

    Description:
    Defines function names for the icons used in this app, 
    and assigns those functions to icon names
*/

import React from 'react'

function Icon_Logic ({stored_Items, complete_Task, update_Task, remove_Task}) {
    /* 
        Return function Explanation:
        The state of the stored items are passed in as a prop from list_Item_Logic.js

        The current Item being evaluated in those stored items is passed in as the first parameter
        The Index of the current item is the second parameter and is used as the key to help React identify which items have changed, are added, or are removed
    */
    return stored_Items.map((current_Item, item_Index) => 
        //If the current Item is complete, it is added to the class "completed" so its style (CSS) can be changed to that of a completed task
        <div className={current_Item.isComplete ? 'task_Row completed' : 'task_Row'} key={item_Index}>

        </div>
    )
}

export default Icon_Logic
