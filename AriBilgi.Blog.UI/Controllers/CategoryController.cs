﻿using Microsoft.AspNetCore.Mvc;

namespace AriBilgi.Blog.UI.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
