declare module "toDoListInterfaces" {
  export interface ToDoItem {
    text: string;
    edit: boolean;
    done: boolean;
    id: string;
  }

  export interface ToDoItemProps {
    toDo: ToDoItem;
    onChange: (e) => void;
    onClick: {edit: (e) => void; delete: (e) => void};
  }

  export interface ToDoListItemsProps {
    id?: string;
    setToDos?: React.SetStateAction;
    toDos: Array<ToDoItem>;
    delToDo: (toDoID: string) => void;
    editToDo: (toDoEdit: ToDoItem) => void;
  }

  export interface ToDoAddProps extends React.TextareaHTMLAttributes<HTMLElement> {
    id: string;
    feedback: {className: string, content: string};
    setToDos?: React.SetStateAction;
    toDos: Array<ToDoItem>;
  }

  export interface ToDoEditProps extends React.TextareaHTMLAttributes<HTMLElement> {
    id?: string;
    setToDos?: React.SetStateAction;
    toDos?: Array<ToDoItem>;
  }
}