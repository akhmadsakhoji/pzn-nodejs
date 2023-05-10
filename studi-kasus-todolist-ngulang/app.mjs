import http from "http";
import { TodoListService } from "./todolist-service.mjs";

const service = new TodoListService();
const server = http.createServer((request, response)=>{
    response.setHeader("Content-Type", "application/json");
    if(request.method === "GET"){
        service.getTodolist(request, response);
    } else if (request.method === "POST"){
        service.addTodolist(request, response);
    } else if (request.method === "PUT"){
        service.updateTodolist(request, response);
    } else if (request.method === "DELETE"){
        service.deleteTodolist(request, response);
    }
});

server.listen(3001);