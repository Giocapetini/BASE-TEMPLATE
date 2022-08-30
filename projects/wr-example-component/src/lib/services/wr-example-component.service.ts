import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WrExampleComponentService {

  data = 0;
  constructor(
    // @Inject('env') private environment, private http: HttpClient
  ) { }

  setDataTEN() {
    this.data = 10;
  }

  clearData(){
    this.data = 0;
  }

  setValue(callback: (dataNumber: number) => void, dataNumber: number) {
    if (dataNumber !== 2) {
      this.data = dataNumber
      callback(this.data);
    }
  }



  /* @@ EXEMPLE FUNCTION GET @@ */

  // getClientData(document: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `bearer opdafpibn`,
  //   });

  //   return this.http.get(
  //     this.environment.clientApiEndpoint + 'api/client/' + document,
  //     { headers }
  //   );
  // }

  /* @@ EXEMPLE FUNCTION POST @@ */

  // sendMail(id: number, email: string): Observable<any> {
  //   const emailData = { id: id, Email: email };

  //   const headers = new HttpHeaders({
  //     Authorization: `bearer opdafpibn`,
  //   });

  //   const actionUrl = 'api/v1/';
  //   return this.http.post(
  //     this.environment.clientApiEndpoint + actionUrl + id + '/Email',
  //     emailData,
  //     { headers }
  //   );
  // }
}
