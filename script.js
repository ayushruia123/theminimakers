body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    background-color: green;
    color: white;
    padding: 2em;
    position: relative;
    text-align: center;
    height: 50vh;
}

.logo {
    position: absolute;
    top: 5px;
    left: 10px;
}

.logo img {
    height: 40px;
}

h1.header-text {
    font-size: 4em;
}

nav {
    position: relative;
}

.burger-menu {
    font-size: 2em;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: black;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: darkgrey;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

main {
    padding: 1em;
    min-height: calc(100vh - 330px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

section {
    margin-top: 2em;
}

#welcome h2,
#welcome p {
    font-size: 2em;
}

.hero {
    text-align: center;
    margin-top: 20px;
}

.hero img {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
}

.hero .caption {
    font-size: 1.5em;
    margin-top: 10px;
}

.form-container {
    text-align: center;
    margin-top: 20px;
}

.search-box {
    padding: 20px;
    font-size: 24px;
    border: 2px solid #ccc;
    border-radius: 10px;
    outline: none;
    width: 60%;
    height: 50px;
}

.form-container button {
    padding: 15px 30px;
    font-size: 24px;
    border: 2px solid green;
    border-radius: 10px;
    background-color: white;
    color: darkgreen;
    cursor: pointer;
    margin-left: 10px;
}

.form-container button:hover {
    background-color: green;
    color: white;
    transform: scale(1.05);
    transition: background-color 0.3s, color 0.3s;
}

#photos {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
}

.photo-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 200px;
    justify-content: center;
    padding-bottom: 40px;
}

.photo-grid img {
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 150px;
    height: 150px;
    transform: rotate(20deg);
    transition: transform 0.3s;
}

.photo-grid img:hover {
    transform: rotate(50deg);
}

footer {
    background-color: black;
    color: white;
    text-align: center;
    padding: 1em;
    width: 100%;
    font-size: 1.25em;
    height: 40px;
}

@media screen and (max-width: 768px) {
    .header-text {
        font-size: 3em;
    }

    .burger-menu {
        font-size: 1.5em;
        top: 10px;
        right: 10px;
    }

    .sidenav a {
        font-size: 20px;
    }

    .sidenav .closebtn {
        font-size: 30px;
        top: 15px;
    }

    .search-box {
        font-size: 18px;
        width: 80%;
    }

    .form-container button {
        font-size: 18px;
        padding: 10px 20px;
    }

    .photo-grid img {
        width: 100px;
        height: 100px;
    }
}
header {
    background-color: green;
    color: white;
    padding: 1em; /* Adjust the padding to your preference */
    text-align: center;
    height: auto; /* Allow the header to adjust its height based on content */
}

.sidenav {
    font-size: 4em; /* Decrease the font size for the header text */
}

.sidenav {
    width: 250px; /* Increase the width of the side navigation menu */
}
