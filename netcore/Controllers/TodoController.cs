using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using netcore.Fixtures;

namespace netcore.Controllers
{
    [Route("[controller]")]
    public class TodoController : Controller
    {
        [HttpGet]
        public async Task<IEnumerable<Todo>> Get()
        {
            return await Task.FromResult(TodoFixture.Todos);
        }

        [HttpGet("{id}")]
        public async Task<Todo> Get(int id)
        {
            return await Task.FromResult(TodoFixture.Todos.First(todo => todo.id == id));
        }
    }
}