using FilmBACKEND.Dtos.FilmDtos;
using FilmBACKEND.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmBACKEND.Interfaces
{
    public interface IMovieRoleRepository : IGenericRepository<MovieRole>
    {
        Task<ActionResult<IEnumerable<GetMovieDto>>> GetAllMovieRoles();
    }
}
