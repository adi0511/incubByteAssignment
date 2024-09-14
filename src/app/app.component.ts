import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'interviw';
  sum:number=0;
  negativeNumber:any=[];
  messageString:any="";
  
  
  add(numbers:string){
 
  if(numbers.length==0){
    this.sum=0
  }
 
  else{
    let tempDelimiter:string;
   tempDelimiter=numbers[0]=="/" && numbers[1]=="/"?numbers[2]:","

    let tempArray=tempDelimiter==","? numbers.split(",") : numbers.split("\n")[1].split(tempDelimiter);
    tempArray.forEach((num:any)=>{
 
      if(num.split("\n").length >1){
        
        num.split("\n").forEach((num2:any)=>{
          if(Number(num2)< 0){
            this.negativeNumber.push(num2)
          }
          this.sum=this.sum + Number(num2)
        })
      }
      else{
        if(Number(num)< 0){
          this.negativeNumber.push(num)
        }
      this.sum=this.sum + Number(num)
      }
    })

  }
  if(this.negativeNumber.length==1){
    this.messageString=`negative numbers not allowed ${this.negativeNumber[0]}`
  }
  if(this.negativeNumber.length>1){
    this.negativeNumber.forEach((data:any)=>{
      this.messageString=this.messageString + data +","
    })
  }
  }
}
