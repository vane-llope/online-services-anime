app.component('navbar', {
    template:
        /*html*/
        `  <nav class=" navbar navbar-expand-lg navbar-light bg-light navbarm">
        <div class="container-fluid">
          <a class="navbar-brand " style="margin-left: 5%;" href="#"><span class="brandM">ZARA</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">صفحه اصلی</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    پروژه ها
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="passwordGenerator.html" >تولید پسورد تصادفی</a></li>
                  <li><a class="dropdown-item" href="meliCode.html" >بررسی صحت کدملی</a></li>
                  <li><a class="dropdown-item" href="numberToLetter.html" >تبدیل عدد به حروف</a></li>
                  <li><a class="dropdown-item" href="engToPer.html" >تبدیل عدد فارسی به انگلیسی</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="about.html">درباره ی ما</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!--image-->
        <div class="bgImage">
        <img  src="./assets/image/purple-sky-anime-city-jfyl3kuulzsbh0oa.jpg"/>
       </div>
`})
