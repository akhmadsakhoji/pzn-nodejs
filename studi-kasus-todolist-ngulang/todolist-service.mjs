export class TodoListService {
    todolist = ["Akhmad", "Sakhoji", "Jamaludin"];

    getJsonTodolist(){
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return{
                    id: index,
                    todo: value
                }
            })
        })
    }

    getTodolist(request, response){
        response.write(this.getJsonTodolist());
        response.end();
    }

    addTodolist(request, response){
        request.addListener("data", (data)=>{
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJsonTodolist());
            response.end();
        })
    }
}