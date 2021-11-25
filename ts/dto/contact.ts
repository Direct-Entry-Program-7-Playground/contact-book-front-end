export class Contact {
  constructor(
    public id: string,
    public fName: string,
    public lName: string | null,
    public phone: string | null,
    public email: string | null,
    public address: string | null,
    public picture: string | null
  ) {}
}
