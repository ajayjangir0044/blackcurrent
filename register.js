$("#submission").click(function (){
    setTimeout(function (){
    //    console.log(document.getElementsByTagName("input")[0].value)
       

  
    


         
        if(document.getElementsByClassName("sub")[0].value!="" && document.getElementsByClassName("sub")[1].value!="" && document.getElementsByClassName("sub")[2].value!="" && document.getElementsByClassName("sub")[3].value!="" && document.getElementsByClassName("sub")[4].value!="" && document.getElementsByClassName("sub")[5].value!="" && document.getElementsByClassName("sub")[6].value!="" ){
                
            $("#submission").html("<img src='https://img.icons8.com/fluent/48/000000/checkmark.png'/>")
           
        }
   
       
    
    
    
    },500)
})