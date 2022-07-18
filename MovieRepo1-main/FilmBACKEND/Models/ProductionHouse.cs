using System.Collections.Generic;

namespace FilmBACKEND.Models
{
    public class ProductionHouse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Movie> Movies { get; set; }
    }
}
