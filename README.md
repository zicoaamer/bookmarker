<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BookMarker</title>
    <link rel="icon" href="Images/icon.png">
    <!-- Main Css File -->
    <link rel="stylesheet" href="Css/main.css">
    <!-- Bootstrap Css File -->
    <link rel="stylesheet" href="Css/bootstrap.min.css">
</head>
<body>

    <main class="interface py-5 position-relative">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <div class="logo py-2">
                <div class="container d-flex justify-content-center">
                    <h1>
                        Bookmarker
                    </h1>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="sub d-flex justify-content-center">
                    <h2>
                        <i class="fa-solid fa-bookmark"></i>
                        Bookmark your favorite sites
                        <i class="fa-solid fa-bookmark"></i>
                    </h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row startit">
                <div class="site-name">
                    <label for="webName" class="pb-2 fw-semibold"><i class="fa-solid fa-book-bookmark pe-2"></i>Site Name</label>
                    <input type="text" placeholder="Bookmark Name" class="form-control" id="webName">
                </div>
                <div class="site-url pt-4">
                    <label for="webLink" class="pb-2 fw-semibold"><i class="fa-solid fa-link pe-2"></i>Site Url</label>
                    <input type="text" placeholder="Bookmark Name" class="form-control" id="webLink">
                </div>
            </div>
        </div>
        <div class="container mt-4 d-flex flex-column justify-content-center align-items-center">
            <button class="btn btn-info btn-submit px-5" onclick="addWeb()" id="submit">Submit</button>
            <hr>
        </div>
        <div class="container">
            <table class="table mt-4 text-center bg-light">
                <thead>
                  <tr>
                    <th class="text-capitalize">Index</th>
                    <th class="text-capitalize">Website Name</th>
                    <th class="text-capitalize">Visit</th>
                    <th class="text-capitalize">Delete</th>
                </tr>
                </thead>
                <tbody id="tableContent">
                </tbody>
            </table>
        </div>
    </main>
    <!-- Bootstrap Js File -->
    <script src="Js/bootstrap.bundle.min.js"></script>
    <!-- Main Js File -->
    <script src="Js/main.js"></script>
    <!-- Font Awesome Library -->
    <script src="https://kit.fontawesome.com/12dfd142c5.js" crossorigin="anonymous"></script>
</body>
</html>
