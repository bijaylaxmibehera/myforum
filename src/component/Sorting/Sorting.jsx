import "./Sorting.css"
export function Sort({handleSorting}){
    return (
        <>
         <p>Sort by</p>
          <button onClick={handleSorting}>
            Latest post <i className="fa fa-caret-down sort" aria-hidden="true"></i>
          </button>
        </>
    )
}