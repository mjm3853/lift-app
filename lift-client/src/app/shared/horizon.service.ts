import { Injectable } from '@angular/core';

//const Horizon = require('@horizon/client');

declare var Horizon: any;

@Injectable()
export class HorizonService {

  public horizon: any;
  status: {} | Boolean = false;

  connect() {

    this.horizon = Horizon({ host: 'ec2-54-196-127-223.compute-1.amazonaws.com:8181' });

    return new Promise((resolve, reject) => {
      this.horizon.onReady((status) => {
        this.status = status;
        resolve(status);
      });
      this.horizon.connect();
    });
  }
} 