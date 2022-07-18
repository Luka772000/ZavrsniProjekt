using System;
namespace FilmBACKEND.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IMovieRepository Movies { get; }
        IUserRepository Users { get; }
        IPhotoService PhotoService { get; }
        int Complete();
    }
}
