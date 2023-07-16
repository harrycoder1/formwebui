export interface actionBoxType {
    imgUrl :string ;
    title:string ;
    descriptiom:string ;
    path :string ;
}

export interface testomonialType {
    userid:{
        username:string ;
    image:string;
    email:string ;
    } ;
    comment:string ;
    star:number ;
    date:string;

    }


    export interface mediaDatailType {
        logo:string ;
        title :string ;
     
    }

    export interface footerLinksType {
        title:string ;
        expore: {
            name:string ;
            descrip:string ;
        } [];
    } 

    export interface formInputType {
        btnTyp:"submit"|"button" ; 
        placeholder :string ;
        title:string ;
        state:string ;
         setState:(state:string)=>void ;
          btnFunc:()=>void
    }

    export interface userDatailType {
        name:string ; 
        email:string ;
        comment :string ;
        star: 1|2|3|4|5 ;
        
    }