﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontToBack_project.Controllers
{
    public class card : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
