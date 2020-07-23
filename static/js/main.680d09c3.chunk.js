(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,,,function(t,e,o){t.exports=o(21)},,,,,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),c=o(8),i=o.n(c),r=(o(16),o(10)),l=o(2),u=o(3),s=o(5),d=o(4),m=o(1),p=o(9),f=o.n(p),v=o(6),h=o.n(v),E=(o(17),function(t){Object(s.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={editing:!1,todoEditingValue:t.props.todo.title},t.todoInput=a.a.createRef(),t.focusTodoInput=function(){var e=t.todoInput;e&&e.current.focus()},t.handleBlur=function(){var e=t.props,o=e.onSaveEdit,n=e.todo;o(t.state.todoEditingValue,n.id),t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{editing:!1})}))},t.handleInputEdit=function(e){var o=t.props,n=o.onSaveEdit,a=o.todo;"Escape"===e.key?t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{todoEditingValue:a.title,editing:!1})})):"Enter"===e.key&&(n(t.state.todoEditingValue,a.id),t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{editing:!1})})))},t.onEdit=function(){t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{editing:!0})}))},t.onInputTodoTitle=function(e){var o=e.target.value;t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{todoEditingValue:o})}))},t}return Object(u.a)(o,[{key:"componentDidUpdate",value:function(){this.state.editing&&this.focusTodoInput()}},{key:"render",value:function(){var t=this.props,e=t.todo,o=t.onStatus,n=t.onRemove,c=e.id,i=e.title,r=e.completed;return a.a.createElement("li",{className:h()("item",{completed:r},{editing:this.state.editing})},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:c,checked:r,onChange:function(){return o(c)}}),a.a.createElement("label",{htmlFor:c,onDoubleClick:this.onEdit},i),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(c)}})),a.a.createElement("input",{ref:this.todoInput,type:"text",className:"input edit",value:this.state.todoEditingValue,onKeyDown:this.handleInputEdit,onChange:this.onInputTodoTitle,onBlur:this.handleBlur}))}}]),o}(a.a.Component)),b=function(t){var e=t.todos,o=t.filter,n=t.onStatus,c=t.onRemove,i=t.onSaveEdit,r=e.filter((function(t){return"active"===o?!t.completed:"completed"!==o||t.completed}));return a.a.createElement("ul",{className:"todo-list"},r.map((function(t){return a.a.createElement(E,{key:t.id,todo:t,onStatus:n,onRemove:c,onSaveEdit:i})})))},S=(o(18),function(t,e,o){t.preventDefault(),e(o)}),g=function(t){var e=t.activeTodos,o=t.onFilter,n=t.filter,c=t.onRemoveCompleted;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},"".concat(e," items left")),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:h()({selected:"all"===n}),onClick:function(t){return S(t,o,"all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:h()({selected:"active"===n}),onClick:function(t){return S(t,o,"active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:h()({selected:"completed"===n}),onClick:function(t){return S(t,o,"completed")}},"Completed"))),a.a.createElement("button",{type:"button",className:"clear-completed",onClick:c},"Clear completed"))},O=(o(19),function(t){Object(s.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todoName:""},t.onChange=function(e){var o=e.target.value;t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{todoName:o})}))},t.onHandleKeydown=function(e){var o=t.props.onSaveInput,n=t.state.todoName;"Enter"===e.key&&(o(n),t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{todoName:""})})))},t}return Object(u.a)(o,[{key:"render",value:function(){return a.a.createElement("header",{className:"todoapp__header header"},a.a.createElement("h1",null,"todos"),a.a.createElement("input",{type:"text",className:"input new-todo",value:this.state.todoName,placeholder:"What needs to be done?",onKeyDown:this.onHandleKeydown,onChange:this.onChange}))}}]),o}(a.a.Component)),j=(o(20),function(t){var e=t.todos,o=t.activeTodos,n=t.filter,c=t.onStatus,i=t.onRemove,r=t.onSaveEdit,l=t.onStatusAll,u=t.onFilter,s=t.onRemoveCompleted,d=t.onSaveInput;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(O,{onSaveInput:d}),a.a.createElement("section",{className:"todoapp__main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"todoapp__toggle-all",onChange:l}),a.a.createElement("label",{htmlFor:"toggle-all",className:"todoapp__mark"},"Mark all as complete"),a.a.createElement(b,{todos:e,filter:n,onStatus:c,onRemove:i,onSaveEdit:r})),e.length?a.a.createElement(g,{activeTodos:o,onFilter:u,filter:n,onRemoveCompleted:s}):null)}),y=[{userId:1,id:"1",title:"delectus aut autem",completed:!1},{userId:1,id:"2",title:"quis ut nam facilis et officia qui",completed:!0},{userId:1,id:"3",title:"fugiat veniam minus",completed:!1}],N=function(t,e){return t.id===e?Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}):t},k=function(t){Object(s.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],filter:"all",activeTodos:0},t.onUpdate=function(){t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{activeTodos:t.todos.reduce((function(t,e){return t+(e.completed?0:1)}),0)})}))},t.getTodosFromApi=function(){localStorage.getItem("todoItems")?t.setState({todos:JSON.parse(localStorage.getItem("todoItems"))}):t.setState({todos:y})},t.onTodoStatus=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return N(t,e)}))}}))},t.onTodoStatusAll=function(e){var o=e.target.checked;t.setState((function(t){return{todos:t.todos.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{completed:o})}))}}))},t.onRemove=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.onFilter=function(e){t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{filter:e})}))},t.onRemoveCompleted=function(){t.setState((function(t){return{todos:t.todos.filter((function(t){return!t.completed}))}}))},t.handleSaveEdit=function(e,o){-1!==e.trim().search(/\S/)?t.setState((function(t){return Object(m.a)(Object(m.a)({},t),{},{todos:t.todos.map((function(t){return t.id===o?Object(m.a)(Object(m.a)({},t),{},{title:e}):t}))})})):t.onRemove(o)},t.addNewTodo=function(e){-1!==e.trim().search(/\S/)&&t.setState((function(t){return{todos:[{userId:1,id:f()(),title:e,completed:!1}].concat(Object(r.a)(t.todos))}}))},t}return Object(u.a)(o,[{key:"componentDidMount",value:function(){this.getTodosFromApi()}},{key:"componentDidUpdate",value:function(t,e){this.state.todos!==e.todos&&(this.onUpdate(),localStorage.setItem("todoItems",JSON.stringify(this.state.todos)))}},{key:"render",value:function(){var t=this.state,e=t.todos,o=t.activeTodos,n=t.filter;return a.a.createElement(j,{todos:e,activeTodos:o,filter:n,onStatus:this.onTodoStatus,onRemove:this.onRemove,onSaveEdit:this.handleSaveEdit,onStatusAll:this.onTodoStatusAll,onFilter:this.onFilter,onRemoveCompleted:this.onRemoveCompleted,onSaveInput:this.addNewTodo})}}]),o}(a.a.Component);i.a.render(a.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.680d09c3.chunk.js.map