
// import item from TaskItem.jsx
// import list from List.jsx

function FilterButtons() {
    const filters = (["All", "Active", "Completed"]);
    /* 
    Or use this to filter:
        const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
            // substitute the things u need tho! 
    */
    const selectFilter = () => {
        if (filters[0] == buttonClicked)
        {
            return(
                // display all items
                <></>
            )
        };
        if (filters[1] == buttonClicked)
        {
            return(
                // display items where completed == false
                <></>
            );
        };
        if (filters[2] == buttonClicked)
        {
            // display items where completed == true
            // use the list and iterate through it checking each objects "completed" prop.
        };
    }
    return(
        <>
            // display all items
            <input value={filter} onChange={(e) => setfilterButtons(e.target.value)} />
        </>
    )
};


