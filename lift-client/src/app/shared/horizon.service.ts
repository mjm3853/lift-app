import { Injectable } from '@angular/core';

@Injectable()
export class HorizonService {

  public horizon: any;
  status: {} | Boolean = false;

  connect() {     
    this.horizon = Horizon({ host: 'localhost:8181'});    
    return new Promise((resolve, reject)=> {
      this.horizon.onReady((status)=> {
        this.status = status;        
        resolve(status);                
      });      
      this.horizon.connect();            
    });        
  }    
} 