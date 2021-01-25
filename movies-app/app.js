
//init the movies object to empty array
const movies = []


//on event listener display rate value
$("label").on("change","input",function(){
    $("#rate").text($(this).val())
})

//submit event on form submission
$("form").on("submit",(e)=>{
    e.preventDefault()

    const data = {
        title: $("#title").val(),
        rate : $("#rating").val()
    }

    movies.push(data)
    const tableTr = `<tr><td>${data.title}</td><td>${data.rate}</td><td><button>Delete</button></td><</tr>`
    $("#list tbody").append(tableTr)
    $('form').trigger("reset");

})


//sort movie by alphabetically
$("#sortAlp").on("click",function(){
    $("#list tbody").html("")
    const data = appendingTr(movies)
    for(let movie of data){
        const tableTr = `<tr><td>${movie.title}</td><td>${movie.rate}</td><td><button>Delete</button></td><</tr>`
        $("#list tbody").append(tableTr)
    }
})


// function for sorting
function appendingTr(data){
    return data.sort((a,b)=>{
            const valueA = a.title.toLowerCase()
            const valueB = b.title.toLowerCase()
            if(valueA < valueB){
                return -1
            }

            if(valueA > valueB){
                return 1
            }
        
    })
}

//click event on moving
$("#list").on("click","button",function(){
    $(this).parent().parent().remove()
})

