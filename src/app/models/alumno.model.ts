export class Alumno {
    constructor(
    public id: number,
    public fullName: string,
    public age: number,
    public birthdate: Date,
    public grade: number,
    public isPresent: boolean  
    ) {}

    Present(v:boolean){
        this.isPresent = v;
    }
}