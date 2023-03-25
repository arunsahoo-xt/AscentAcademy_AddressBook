
var data=[ ]
 document.getElementById('show-panel').style.display = 'none';
   document.getElementById('search-panel').style.display = 'none';
   document.getElementById('contact-panel').style.display = 'block';

 document.getElementById('js-add-new').addEventListener('click', function(){
   document.getElementById('show-panel').style.display = 'none';
   document.getElementById('search-panel').style.display = 'none';
   document.getElementById('contact-panel').style.display = 'block';
 
 
  });
 document.getElementById("form_submit").addEventListener("click",function(event){
  var new_data={
    name:document.getElementById('name').value,
    phone:document.getElementById('phone').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value
  }
  console.log(new_data);
  data.push(new_data);
  console.log(data);
  
  
  document.getElementById('show-panel').innerHTML += '<div class="contact-item">Name:'+document.getElementById('name').value+'<br>Phone:'+document.getElementById('phone').value+'<br>Email:'+document.getElementById('email').value+'<br>Address:'+document.getElementById('address').value+'</div><hr>';
  event.preventDefault();
   
  
})



document.getElementById("js-show-all").addEventListener("click",function(){

  // if(data.length>0){
  //   for(var i = 0;i<data.length;i++){
  //   document.getElementById('show-panel').innerHTML += '<div class="contact-item">Name:'+data[i].name+'<br>Phone:'+data[i].phone+'<br>Email:'+data[i].email+'</div><hr>';
  //   }
  // }else{
  //   document.getElementById('show-panel').innerHTML += '<div class="contact-item">You have no contacts. Why not add  a few?</div><hr>';
  // }
  document.getElementById('show-panel').style.display = 'block';
    document.getElementById('search-panel').style.display = 'none';
    document.getElementById('contact-panel').style.display = 'none';
})
//      console.log(contacts);


document.getElementById("js-search").addEventListener("click",function(){
 
  document.getElementById('show-panel').style.display = 'none';
  document.getElementById('search-panel').style.display = 'block';
  document.getElementById('contact-panel').style.display = 'none';
})
  var search_btn=document.getElementById("search-contact");
  var search_input=document.getElementById("search-input");
  var search_form=document.getElementById("search");
  search_form.addEventListener("submit",function(event){
    if(data.length>0){
      console.log(data);
      console.log(search_input.value);
      for (let i=0;i<data.length;i++){
        if(data[i].name==search_input.value){
          document.getElementById('results').innerHTML='<div class="result-item">Name:'+data[i].name+'<br>Phone:'+data[i].phone+'<br>Email:'+data[i].email+'<br>Address:'+data[i].address+'</div><hr>';
        }
      }}
      else{
        document.getElementById('results').innerHTML='<div class="result-item">No contacts found</div><hr>';
        
      }
      event.preventDefault();
    })
