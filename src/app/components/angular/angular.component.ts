import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  name: string;
  speed: number;
  model: string;
  colors:Colors;
  imgUrl:string="https://cnet2.cbsistatic.com/img/VkKI4U0-ymvXB8coRZL1uj_0wxE=/940x0/2019/02/28/08e732b0-1993-4e3b-987c-fbc7586dcd7a/audi-r8-v10-decennium-promo.jpg";
 top:number;
 options:string[];
 showAndHiden:boolean;

  constructor() { }

  ngOnInit() {
    this.name="Audi";
    this.speed=235;
    this.model="RS8";
    this.colors={
      car:'White',
      salon:'Black',
      wheels:'Silver'
    }
 this.options =["ABS", "Autopilot", "Car parking"]

 this.showAndHiden=false;
}
addOpt(option){
  this.options.unshift(option);
  return false;
}

deleteOpt(option){
  for(let i=0;i<this.options.length;i++){
    if(this.options[i]==option){
      this.options.splice(i,1);
      break
    }
  }
}

carSelect(carName){
  if(carName=='bmw'){
  this.name="BMW";
    this.speed=275;
    this.model="M5";
    this.colors={
      car:'Black',
      salon:'red',
      wheels:'Silver'
    }
    this.imgUrl="https://img.ltn.com.tw/Upload/auto/page/2019/04/02/190402-12273-3-gYVgc.jpg";
    this.options =["ABS", "Autopilot", "Car parking"];
    window.scroll(0,200)
  }
  else if(carName=='mers'){
    this.name="Mercedes-Benz";
    this.speed=322;
    this.model="C300";
    this.colors={
      car:'Black',
      salon:'red',
      wheels:'Silver'
    }
    this.imgUrl="https://www.automotiveaddicts.com/wp-content/uploads/2019/06/2019-mercedes-benz-c300-4matic-sedan.jpg"
    this.options =["ABS", "Autopilot", "Car parking","Navigation Bar"];
    window.scroll(0,200)
  }
  else{
    this.name="Audi";
    this.speed=222;
    this.model="RS8";
    this.colors={
      car:'Yellow',
      salon:'red',
      wheels:'Silver'
    }
    this.imgUrl="https://cnet2.cbsistatic.com/img/VkKI4U0-ymvXB8coRZL1uj_0wxE=/940x0/2019/02/28/08e732b0-1993-4e3b-987c-fbc7586dcd7a/audi-r8-v10-decennium-promo.jpg";
    this.options =["ABS", "Autopilot", "Car parking"];
    window.scroll(0,200)
   
   
  }
 
 
}




redakCar(){
  this.showAndHiden=!this.showAndHiden;
}






}
  interface Colors{
    car:string;
    salon:string;
    wheels:string;
  }

// mersedesSelect(){
//   this.name="Mersedes";
//     this.speed=335;
//     this.model="C300";
//     this.colors={
//       car:'silver',
//       salon:'Black',
//       wheels:'Silver'
//     }
// }
// audiSelect(){
//   this.name="Audi";
//     this.speed=225;
//     this.model="RS8";
//     this.colors={
//       car:'white',
//       salon:'Black',
//       wheels:'Silver'
//     }
// }





