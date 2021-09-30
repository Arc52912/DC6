import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
          {name: "Junely Mula", age:21 + " years old", gender: "Female"},
          {name: "Christine Omana", age:25 + " years old", gender: "Female"},
          {name: "Kyla Omana", age:40 + " years old", gender: "Female"},
          {name: "Alyssa Mula", age:25 + " years old", gender: "Female"},
          {name: "Miles Aubrey", age:21 + " years old", gender: "Female"},
          {name: "Miles Ocampo", age:28 + " years old", gender: "Female"},
          {name: "John Arcayos", age:40 + " years old", gender: "Male"},
          {name: "Ruel Catalan", age:27 + " years old", gender: "male"},
          {name: "Serg Oslo", age:20 + " years old", gender: "Male"},
          {name: "Mark Bautista", age:29 + " years old", gender: "Male"},
          {name: "Mark Jeffrey", age:28 + " years old", gender: "Male"},
      ];
  }
}
