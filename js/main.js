$(document).re
$('#searchForm').on('submit',(e) => {
    let searchText = $('#searchText').val();
    getMovie(searchText);
    e.preventDefault();
});

function getMovie(searchText){
    fetch('http://www.omdbapi.com?s')
    .then((response)=>response)
    .then((data)=>{
        
    })
 

}