import { CreateTodoDto, TodoDataSource, TodoEntity, UpdateTodoDto } from '../../domain';
import { TodoRepository } from '../../domain/repositories/todo.repository';


export class TodoRepositoryImpl implements TodoRepository{

    constructor(
        private readonly datasource: TodoDataSource,
    ){}

    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.create(createTodoDto);
    }
    getAll(): Promise<TodoEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<TodoEntity> {
        return this.datasource.findById( id );
    }
    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.datasource.updateById( updateTodoDto );
    }
    deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteById( id );
    }



}