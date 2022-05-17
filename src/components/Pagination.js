import React from 'react'

const Pagination = ({postPerPage,totalPosts,paginate,previousPage,nextPage}) => {

    const pageNumber=[];



    for(let i=1;i<=(Math.ceil(totalPosts/postPerPage)-2);i++){
        pageNumber.push(i);
    }
  return (
    <div>
  

<nav aria-label="Page navigation example">
  <ul class="pagination">
  <li class="page-item"><a class="page-link" onClick={previousPage} href="javascript:void(0)">Previous</a></li>
      {
          pageNumber.map(ele=>(
            <li class="page-item" onClick={()=>paginate(ele)}><a class="page-link" href="javascript:void(0)">{ele}</a></li>

          ))
      }
  <li class="page-item"><a class="page-link" onClick={nextPage} href="javascript:void(0)">Next</a></li>
  </ul>
</nav>

    </div>
  )
}

export default Pagination