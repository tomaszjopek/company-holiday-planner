import { Injectable } from '@angular/core';
import { NgxsFirestore } from '@ngxs-labs/firestore-plugin';
import { Worker } from '../model/planner-data';

@Injectable({
  providedIn: 'root'
})
export class WorkersService extends NgxsFirestore<Worker>{

  protected path = 'workers';

}
