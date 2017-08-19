using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using netcore.Fixtures;

namespace netcore.Controllers
{
    [Route("[controller]")]
    public class TodoController : Controller
    {
        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return TodoFixture.Todos;
        }

        [HttpGet("{id}")]
        public Todo Get(int id)
        {
            return TodoFixture.Todos.First(todo => todo.id == id);
        }
    }
}