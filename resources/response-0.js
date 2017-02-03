module.exports = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Поиск по менеджерам - My ASP.NET Application</title>
    <link href="/Content/bootstrap.css" rel="stylesheet"/>
<link href="/Content/site.css" rel="stylesheet"/>

    <script src="/Scripts/modernizr-2.6.2.js"></script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter42537289 = new Ya.Metrika({
                    id:42537289,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
    </script>
    <!-- /Yandex.Metrika counter -->
</head>
<body>
    <noscript><div><img src="https://mc.yandex.ru/watch/42537289" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Application name</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/Home/About">About</a></li>
                <li><a href="/Home/Contact">Contact</a></li>
                <li><a href="/Search">Поиск по менеджерам</a></li>
            </ul>
            <form action="/Account/LogOff" class="navbar-right" id="logoutForm" method="post"><input name="__RequestVerificationToken" type="hidden" value="np_5-nyDRhgp_Ekw8U8PPloUYi6KFKwbYdpnZDBrQ8nYj5_114PW5OgJGFMmTzJBQfOabiIordmoeAtbtutfxxBu24lhD-URS8IP9FaE9EV2cNB3R6sOoLPP_JH-sb-FW-gcAt6r0LstDxLGFzGLIQ2" />    <ul class="nav navbar-nav navbar-right">
        <li>
            <a href="#">Hello edele@byndyusoft.com!</a>
        </li>
        <li><a href="javascript:document.getElementById('logoutForm').submit()">Log off</a></li>
    </ul>
</form>
        </div>
    </div>
</div>
<div class="container body-content">



<div class="jumbotron">
    <h1>Поиск по менеджерам</h1>
<form action="/Search" method="post">        <input type="text" name="query" style="width: 500px;" value="akjsdhfkajsdhf"/>
        <br/>
        <br/>
        <p><button class="btn btn-primary btn-lg">Искать &raquo;</button>
        </p>
</form>
</div>
<span>Поиск НЕ производится по пользователям, зарегистрированным на данном сайте</span>
<br />
<span>Все данные вымышлены, совпадения случайны</span><br />
<span>Минимальная длина поискового запроса - 4 символа</span>
<hr/>
    <div class="row">
        <h3>Результаты поиска:</h3>
        <ul>
        </ul>
    </div>

    <hr/>
    <footer>
        <p>&copy; 2017 - My ASP.NET Application</p>
    </footer>
</div>

<script src="/Scripts/jquery-1.10.2.js"></script>

<script src="/Scripts/bootstrap.js"></script>
<script src="/Scripts/respond.js"></script>


</body>
</html>
`
