export default interface IUser {
  email: string;
  password?: string;
  age: number;
  name: string;
  phoneNumber: string;
}

/**
 * * Interface vs Classes
 * --> Both can type check data
 * --> classes are a feature of javascript
 * --> interfaces are a feature of typescript
 * --> interfaces do not get transpiled, while a class does
 * --> methods can be added to classes. 
 * --> classes increase the ovverall application bundle, interfaces don't 
 */