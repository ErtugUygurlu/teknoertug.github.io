body,
h1,
h2,
h3,
p,
ul,
li {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #5a5959;
}

.navbar {
    display: flex;
    align-items: center;
    background-color: #d43302;
    color: white;
    padding: 15px 30px;
}

.logo {
    font-size: 2em;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 20px;
    margin-left: auto;
}

.nav-links a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease-in-out;
}

.nav-links a:hover {
    color: #FFD700;
}

.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #d43302;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
}

.dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease-in-out;
}

.dropdown-content a:hover {
    background-color: #555;
}

.burger-menu {
    font-size: 1.5em;
    cursor: pointer;
    display: none;
}


@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #ff3c00;
        z-index: 5;
    }

    .nav-links.show {
        display: flex;
    }

    .nav-links a {
        padding: 10px;
        text-align: center;
    }

    .burger-menu {
        display: block;
    }
}

.slogan {
    text-align: center;
    margin: 0px 0;
    background-color: transparent;
    color: #ff3c00;
    padding: 15px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.slogan p {
    margin: 0;
    font-size: 2.2em;
    font-style: italic;
    color: #ff3c00;
}

.card-section {
    display: flex;
    margin: 10px;
}

.card {
    flex: 1;
    margin-right: 10px;
    background-color: #4d4c4c;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.card img {
    max-width: 100%;
    max-height: 500px;
    height: 200px;
    margin-bottom: 15px;
    position: relative;
    cursor: pointer;
}

.card h2 {
    color: red;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .card {
        margin-right: 0;
    }
}

.news-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card2 {
    background-color: #4d4c4c;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-between;
    max-width: 900px;
    margin-right: 500px;
    position: relative;
    cursor: pointer;
}

.card-image {
    margin-right: 20px;
    max-width: 300px;
    height: auto;
}

.news-details {
    flex: 1;
    color: white;
}

h2 {
    color: red;
}

.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-weight: bold;
}

.scroll-to-top:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.scroll-to-top:active {
    transform: scale(0.9);
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
    min-width: 160px;
    background-color: #b32a00;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 4px;
    top: 100%;
    left: 0;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown>a::after {
    content: "\25BC";
    margin-left: 5px;
}

.dropdown-content a::after {
    content: none;
    margin-left: 0;
}


.card2 {
    border: 1px solid #dddddd00;
    padding: 10px;
    text-align: center;
    background-color: #4d4c4c;
}

.card-image {
    max-width: 100%;
    height: auto;
}

.news-details {
    margin-top: 10px;
}

@media (max-width: 600px) {
    .news-container {
        grid-template-columns: 1fr;
    }
}

#load-more-btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

#load-more-btn:hover {
    background-color: #45a049;
}

#load-more-btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: -20px;
}

#load-more-btn:hover {
    background-color: #45a049;
}

#news-container .card2 .news-details p {
    width: 234% !important;
}

#news-container .card2 .news-details h2 {
    width: 238% !important;
}

#news-container .card2 h2 {
    position: relative;
    top: -21px;
    margin-right: 13px;
}

#news-container .card2 p {
    margin-right: 60px;
}

#news-container {
    left: 24px;
}

p {
    color: white;
}

.footer {
    margin-top: 30px;
    background-color: #333;
    color: #fff;
    padding: 50px 0;
}

.container2 {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-info,
.footer-categories,
.footer-links {
    flex: 1 1 30%;
    margin-bottom: 20px;
}

.footer-info h2,
.footer-categories h2,
.footer-links h2 {
    margin-bottom: 15px;
    font-size: 18px;
}

.footer-info p {
    margin-bottom: 10px;
    font-size: 16px;
}

.footer-categories ul,
.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-categories ul li,
.footer-links ul li {
    margin-bottom: 5px;
}

.footer-categories ul li a,
.footer-links ul li a {
    color: #b32a00;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-categories ul li a:hover,
.footer-links ul li a:hover {
    color: #ffffff;
}


.nav-links a:hover,
.dropdown-content a:hover {
    color: #FFD700;
}

.scroll-to-top:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.footer-categories ul li a:hover,
.footer-links ul li a:hover {
    color: #ffffff;
}

@media only screen and (max-width: 500px) {
    .card-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card2 {
        width: 80%;
        margin-bottom: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        margin-left: -20px;
    }

    .card2 .card-image {
        width: 100%;
        height: auto;
    }

    .news-details {
        padding: 10px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0);
        position: absolute;
        bottom: 0px;
        left: 30px;
        width: 100%;
    }

    .news-details h2,
    .news-details p {
        max-width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        margin-top: -20px;
        margin-right: 30px;
    }

    .news-details p {
        background-color: #333;
    }
}

#news-container {
    width: 97%;
    margin-right: 4px;
    transform: translatex(0px) translatey(0px);
}

#news-container {
    width: auto;
    margin-right: 4px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: -50px;
    overflow: auto;
}

.card:hover,
.card2:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media only screen and (max-width: 600px) {

    .footer-info,
    .footer-categories,
    .footer-links {
        flex-basis: 100%;
        margin-bottom: 30px;
        text-align: center;
    }
}

@media only screen and (max-width: 500px) {
    .card2 {
        width: calc(100% - 20px); 
        margin: 0 auto 5px; 
        flex-direction: column; 
    }

    .card-image {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
    }

    .news-details {
        padding: 10px;
        text-align: center;
        background-color: #4d4c4c;
        color: white;
        width: 100%;
    }

    .news-details h2,
    .news-details p {
        max-width: calc(100% - 20px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
        font-size: 14px; 
        margin: auto; 
        margin-left: -35px;
    }

    .news-details p {
        margin-left: -50px;
    }
}

@media only screen and (max-width: 768px) {
    p {
        padding-left: 15px;
        padding-right: 15px;
    }
    div.slogan p {
        font-size: 20px; 
    }
    h1{
        font-size: 25px;
    }
    div.container img {
        max-width: 75%;
    }
}

#news-container .card2 .news-details {
    background-color: rgba(77, 76, 76, 0) !important;
    transform: translateX(0px) translateY(0px) !important;
}

#news-container .card2 h2{
 top:-13px;
}
