import React from 'react';
const MainContent = ()=> {
    const styles = {
        fontSize:60,
        
    }
    
    return(
        <div>
            <input styles={styles} className="checkfield" type="checkbox"/>
            <p>This is one task</p>

            <input type="checkbox"/>
            <p>This is one task</p>

            <input type="checkbox"/>
            <p>This is one task</p>

            <input type="checkbox"/>
            <p>This is one task</p>

        </div>
    )
}

export default MainContent