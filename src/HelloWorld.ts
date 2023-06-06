 export class HelloWorld{
    show(name?: string){
        return `Hello ${name ?? "World"}`
    }
}