import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}

/*
    
The ValidationPipe is a global pipe. It will be applied to all routes.
It is like a middleware, but it is applied to the request body.
It consists of three parts:
1. It uses 'class-transformer' package to tranform the body into the DTO class instance.
2. It uses 'class-validator' package to validate the DTO class instance.
3. If there are validation errors, respond immediately; otherwise, pass the request to the route handler.
    
*/
