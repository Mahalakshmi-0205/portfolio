<?php
// Set headers for cross-browser compatibility
header("X-UA-Compatible: IE=edge,chrome=1");
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Pragma: no-cache"); // HTTP/1.0
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

// Redirect to the GitHub Pages URL
header("Location: https://mahalakshmiramkumar.github.io/portfolio-1/");
exit;
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Redirecting to Mahalakshmi R's Portfolio</title>
    <meta http-equiv="refresh" content="0; URL=https://mahalakshmiramkumar.github.io/portfolio-1/">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background-color: #0a0a0a;
            color: #fff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
        h1 {
            color: #0ff;
        }
        p {
            margin: 20px 0;
        }
        a {
            color: #ff00ff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Redirecting to Mahalakshmi R's Portfolio</h1>
        <p>If you are not redirected automatically, please click <a href="https://mahalakshmiramkumar.github.io/portfolio-1/">here</a>.</p>
    </div>
    <script>
        // Fallback redirect for browsers that don't support meta refresh
        window.location.href = "https://mahalakshmiramkumar.github.io/portfolio-1/";
    </script>
</body>
</html>