// ;(function(global){
//     var AddressBook = function(name,phone,email){
//       return new AddressBook.init(name,phone,email);
//     };
    
//     AddressBook.prototype = {
//       //default functions
//       data:[
//         //add data here
//       ],
//       searchResults:[
        
//       ],
//       addNewContact:function(name,phone,email){
//         this.data.push({
//           name: name,
//           phone: phone,
//           email:email
//         });
//         return this;
//       },
//       save:function(){
//         //save to local storage. This isn't hugely necessary
        
//       },
//       returnAll:function(){
//         return this.data;
//       },
//       displayData:function(){
//         this.log(this.data);
//         return this;
//       },
//       log:function(data){
//         console.log(data);
//         return this;
//       },
//       search:function(searchTerm){
//         if(this.data.length){
//           for(var i=0;i<this.data.length;i++){
//             if(this.data[i].name.toLowerCase() == searchTerm.toLowerCase()){
//               console.error(this.data[i]);
//               this.searchResults.push(this.data[i]);
//             }
//           }
          
//           return this.searchResults;
//         }else{
//           console.log("There are no results");
//         }
//         return this;
//       },
//       lastResults:function(){
//         return this.searchResults;
//       }
//     } 
    
//     AddressBook.init=function(name,phone,email){
//       var self = this;
//       //set up the address book
//       if(name || phone || email){
//         self.addNewContact(name || "", phone||"", email||"");
//       }
      
//     }
    
//     AddressBook.init.prototype = AddressBook.prototype;
   
//    global.AddressBook = $ab = AddressBook;
//  })(window);
 
//  if(!window.contactList){ //check if we already have a contact list
//     window.contactList=$ab();
//    }
 
//  var form  = document.getElementById('contact');
//  form.addEventListener('submit', function(){
//     if(!window.contactList){ //check if we already have a contact list
//     window.contactList=$ab(form.person.value,form.phone.value,form.email.value);
//    } else {
//    //saves new values rather than deleting old ones as well
//      contactList.addNewContact(form.person.value,form.phone.value,form.email.value);
//    }
   
//      form.person.value = '';
//      form.phone.value = '';
//      form.email.value = '';
   
//     event.preventDefault();
//  });
 
//  var searchForm = document.getElementById('search');
//  searchForm.addEventListener('submit', function(event){
//    var results;
//    if(results !== undefined){
//      results = null;
//    }
//    if(!window.contactList){
//      window.contactList = $ab();
//    }else{
//      results = contactList.search(searchForm.search.value);
//    }
//    document.getElementById('results').innerHTML = '';
//    if(results.length>0){
     
//      for(var i = 0;i<results.length;i++){
//        document.getElementById('results').innerHTML += '<div class="contact-item">Name:'+results[i].name+'<br>Phone:'+results[i].phone+'<br>Email:'+results[i].email+'</div><hr>';
//      }
//    } else{
//     document.getElementById('results').innerHTML += '<div class="contact-item">There are no results for this name</div><hr>';
//    }
   
//    //do something with the results
//    event.preventDefault();
//  });
 
//  document.getElementById('js-show-all').addEventListener('click', function(){
//    if(window.contactList){ //check if we already have a contact list
//       document.getElementById('show-panel').innerHTML = '';
//     var contacts = contactList.returnAll();
//      console.log(contacts);
//      if(contacts.length>0){
//        for(var i = 0;i<contacts.length;i++){
//        document.getElementById('show-panel').innerHTML += '<div class="contact-item">Name:'+contacts[i].name+'<br>Phone:'+contacts[i].phone+'<br>Email:'+contacts[i].email+'</div><hr>';
//        }
//      }else{
//        document.getElementById('show-panel').innerHTML += '<div class="contact-item">You have no contacts. Why not add  a few?</div><hr>';
//      }
//    }

//    document.getElementById('show-panel').style.display = 'block';
//    document.getElementById('search-panel').style.display = 'none';
//    document.getElementById('contact-panel').style.display = 'none';
//  });
 
//  document.getElementById('js-search').addEventListener('click', function(){
//    document.getElementById('show-panel').style.display = 'none';
//    document.getElementById('search-panel').style.display = 'block';
//    document.getElementById('contact-panel').style.display = 'none';
//  });
var data=[
  // {
  //   // name:"Arun",
  //   // phone:9861086738,
  //   // email:"armodilo60@gmail.com"
  // }
 ]
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