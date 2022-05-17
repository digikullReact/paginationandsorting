import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const customeAlphabetSortAsc=(a,b)=>{

  return a.title.toString().localeCompare(b.title.toString());

}


const customeAlphabetSortDesc=(a,b)=>{

  return b.title.toString().localeCompare(a.title.toString());

}

export default function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    }
    fetchData();
  }, []);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const [sortedAsc,setSortedAsc]=useState(true);

  const PaginateFunction=(pageNumber)=>{

    setCurrentPage(pageNumber);

  }

  const nextPage=()=>{
    setCurrentPage(currentPage+1);

  }

  const previousPage=()=>{

    if(currentPage>1){
      setCurrentPage(currentPage-1);
    }
   

  }

  const sortAscending=()=>{

  
    const sortedPosts=posts.sort(customeAlphabetSortAsc)
    setPosts([...sortedPosts]);
    setSortedAsc(false);

  }

  const sortDescending=()=>{




    const sortedPosts=posts.sort(customeAlphabetSortDesc)
    setPosts([...sortedPosts]);
    setSortedAsc(true);

  }

  // Post limiting logic 
  const indexOfLastPost=currentPage*postsPerPage;  
  const indeofFirstPost=indexOfLastPost-postsPerPage;
  const currentPostsInaPage=posts.slice(indeofFirstPost,indexOfLastPost);

  return (
    <div className="container mt-5">
            <h3>Page No - {currentPage}</h3>
     
      <h2 style={{textAlign:"center"}}>My Blog Posts</h2>
      {
        sortedAsc?
        <svg onClick={sortAscending} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
    <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
  </svg>:<svg  onClick={sortDescending} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
</svg>
  
      }



  

  
    
      <Posts posts={currentPostsInaPage} />
      <div style={{display:"flex",marginTop:"30px" ,justifyContent:"center"}}>

      <Pagination postPerPage={postsPerPage}  nextPage={nextPage} previousPage={previousPage} totalPosts={posts.length} paginate={PaginateFunction}/>
      </div>

  
    </div>
  );
}
