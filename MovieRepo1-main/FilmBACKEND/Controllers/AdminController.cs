﻿using FilmBACKEND.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace FilmBACKEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;

        public AdminController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }


        //[Authorize(Roles = "Admin")]
        [HttpGet("users-with-roles")]
        public async Task<ActionResult<AppUser>> GetUsersWithRoles()
        {
            var users = await _userManager.Users
                .Include(r => r.UserRoles)
                .ThenInclude(r => r.Role)
                .OrderBy(u => u.UserName)
                .Select(u => new { u.Id, Username = u.UserName, Roles = u.UserRoles.Select(r => r.Role.Name).ToList() })
                .ToListAsync();
            return Ok(users);
        }



        //[Authorize(Policy="RequireAdminRole")]
        [HttpGet("photos-for-checking")]
        public ActionResult GetPhotosForChecking()
        {
            return Ok("Admin can see this");
        }



        //[Authorize(Policy="RequireAdminRole")]
        [HttpPost("edit-user-roles/{username}")]
        public async Task<ActionResult> EditRoles(string username, [FromQuery] string roles)
        {
            var selectedRoles = roles.Split(",").ToArray();

            var user = await _userManager.FindByNameAsync(username);

            if (user == null) return NotFound("Could not find user");

            var userRoles = await _userManager.GetRolesAsync(user);

            var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));
            if (!result.Succeeded) return BadRequest("Failed to add to roles");

            result = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));
            if (!result.Succeeded) return BadRequest("Failed to remove from roles");

            return Ok(await _userManager.GetRolesAsync(user));

        }
    }
}

