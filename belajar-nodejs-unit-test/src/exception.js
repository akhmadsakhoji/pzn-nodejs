export class MyException extends Error {


}

export const callMe = (name) => {
    if(name === "Akhmad"){
        throw new MyException("Ups my exceptions happens");
    } else {
        return "OK";
    }
}
