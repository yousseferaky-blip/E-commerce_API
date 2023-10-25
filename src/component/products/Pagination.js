import   './Products.css'

const Pagination = ({Pages,currentPage,setCurrentPage}) => {

    const GeneratePage = []
    for(let i=1; i<=Pages ;i++){
        GeneratePage.push(i)
    }
  return (
    <div  className='Pagination'>
         <button 
             disabled={currentPage == 1}
             onClick={()=>setCurrentPage(prev=>prev-1)}
             className='page prev'>
             <i class="fa-solid fa-arrow-left-long"></i>
        </button>
        {GeneratePage.map(page =>
                <div onClick={()=>setCurrentPage(page)}
                    key={page}
                    className={currentPage == page ? 'page active': 'page'}>
                    {page}
                </div>
            )}
    <button 
            disabled={currentPage == Pages}
            onClick={()=>setCurrentPage(prev=>prev+1)} 
            className='page next'>
             <i class="fa-solid fa-arrow-right-long"></i>
    </button>
    </div>
    
    )
}

export default Pagination