import {Component} from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl:'./navbar.component.html',
     
})
export class NavBarComponent{
    currency:string='';
    capital:string='';
    countries=[
        {id:1,name:"India" ,capital:"New Delhi",currency:"Indian Ruppee",color:"#fffe00",image:"./assets/indian flag.png"},
        {id:2,name:"Sweden" ,capital:"Stockholm",currency:"Swedish Korna",color:"#fffe00",image:"./assets/sweden flag.png"},
        {id:3,name:"United States"  ,color:"#fffe00",image:"./assets/usa flag.png"},
        {id:4,name:"Russia" ,color:"#fffe00",image:"./assets/russian flag.png"},
        {id:5,name:"Canada" ,color:"#fffe00",image:"./assets/canada flag.png"},
        {id:6,name:"France" ,color:"#fffe00",image:"./assets/france.png"},
        {id:7,name:"Italy" ,color:"#fffe00",image:"./assets/italy.png"},
        {id:9,name:"Switzerland" ,color:"#fffe00",image:"./assets/switzerland.png"},
        {id:10,name:"China" ,color:"#fffe00",image:"./assets/china.png"},
        {id:11,name:"Australia"  ,color:"#fffe00",image:"./assets/australia.png"}
    ]
    country(){
        this.countries.forEach(function(group){
switch(group.id){
    case 1:
        console.log(group.id);
 
 
console.log(group.capital+" "+group.currency);
break;
case 2:
    console.log(group.id);
 
 
    console.log(group.capital+" "+group.currency);   
     
break;
case 3:
     
break;
case 4:
    
break;
case 5:
     
break;
case 6:
     
break;
case 7:
    
break;
case 8:
     
break;
case 9:
     
break;
case 10:
     
break;
case 11:
     
break;


}
 
        }); 
       
    }
     

        
         
    

}