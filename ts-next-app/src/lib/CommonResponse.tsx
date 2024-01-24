export interface CommonResponse<T> {
    code: 'SUCCESS' | 'ERROR' | 'FAIL';
    data: T;
    message: string;
    statusCode: number;
  }