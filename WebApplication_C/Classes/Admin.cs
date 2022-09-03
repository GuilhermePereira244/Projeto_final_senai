using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication_C.Classes
{
    public class Admin : Usuario
    {
        public string nome { get; set; }
        public string senha { get; set; }
        public string email { get; set; }

        public int cpf { get; set; }
        public int telefone { get; set; }
        public int nascimento { get; set; }
    }
}