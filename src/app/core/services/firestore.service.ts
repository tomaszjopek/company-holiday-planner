import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export abstract class FirestoreService<T> {

  protected abstract basePath: string;

  protected constructor( @Inject(AngularFirestore) protected firestore: AngularFirestore) { }

  doc$(id: string): Observable<T> {
    return this.firestore.doc<T>(`${this.basePath}/${id}`).valueChanges().pipe(
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`Firestore Streaming [${this.basePath}] [doc$] ${id}`);
          console.log(r);
          console.groupEnd();
        }
      }),
    );
  }

  collection$(queryFn?: QueryFn): Observable<T[]> {
    return this.firestore.collection<T>(`${this.basePath}`, queryFn).valueChanges().pipe(
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`);
          console.table(r);
          console.groupEnd();
        }
      }),
    );
  }

/*  create(value: T): void {
    const id = this.firestore.createId();
    this.collection.doc(id).set(Object.assign({}, { id }, value)).then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`);
        console.log('[Id]', id, value);
        console.groupEnd();
      }
    });
  }*/

  delete(id: string): void {
    this.collection.doc(id).delete().then(_ => {
      if (!environment.production) {
        console.groupCollapsed(`Firestore Service [${this.basePath}] [delete]`);
        console.log('[Id]', id);
        console.groupEnd();
      }
    });
  }

  private get collection(): AngularFirestoreCollection<T[]> {
    return this.firestore.collection(`${this.basePath}`);
  }
}
