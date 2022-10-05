export class HttpResponse<T> {
  status: number;
  body: T;

  constructor(status: number, body: T) {
    this.status = status;
    this.body = body;
  }
}
