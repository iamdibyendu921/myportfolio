import React from 'react'
import About from './About'

const Home = () => {
  return (
    <>
     <body data-spy="scroll" data-target=".navbar" data-offset="51">
        <div className="wrapper">
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src="img/profile.jpg" alt="Image"/>
                </div>
                <div className="sidebar-content">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">Navigation</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#header">Home<i className="fa fa-home"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About<i className="fa fa-address-card"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Training & Certification<i className="fa fa-star"></i></a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#service">Service<i className="fa fa-tasks"></i></a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Personal Project<i className="fa fa-file-archive"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact<i className="fa fa-envelope"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="sidebar-footer">
                    <a href="https://www.linkedin.com/in/dibyendu-ghanty-689946133"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/iamdibyendu921"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="content">
                {/* Header start */}
                <div className="header" id="header">
                    <div className="content-inner">
                        <p>I'm</p>
                        <h1>Dibyendu Ghanty</h1>
                        <h2>Web Devloper</h2>
                        {/* <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</div> */}
                    </div>
                </div>
                {/* Header end */}
                
                {/* Large button start */}
                <div className="large-btn">
                    <div className="content-inner">
                        <a className="btn" href="https://drive.google.com/file/d/1dmOV6cz7MW2xopS-IPaTE8RKYapoYCgO/view?usp=drive_link"><i className="fa fa-download"></i>Resume</a>
                        <a className="btn" href="mailto:yourname@example.com">
  <i className="fa fa-hands-helping"></i> Hire Me
</a>

                    </div>
                </div>
                {/* Large button end */}
                
                {/* About Start */}
                {/* <div className="about" id="about">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>About Me</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-5">
                                <img src="img/about.jpg" alt="Image"/>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat. Proin libero ligula, gravida at porttitor eget.
                                </p>
                                <a className="btn" href="#">Hire Me</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="skills">
                                    <div className="skill-name">
                                        <p>Design</p><p>85%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>SEO</p><p>95%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skills">
                                    <div className="skill-name">
                                        <p>Development</p><p>90%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>Marketing</p><p>85%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* About end */}
                <About />
                
                {/* Education Start */}
                <div className="education" id="education">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Education</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="edu-col">
                                    <span>07-July-2018 </span>
                                    <h3>B Tech Electrical Engineering</h3>
                                    <p>Techno International Newtown (MAKAUT)</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="edu-col">
                                    <span>13-Jan-2015 </span>
                                    <h3>Diploma Electrical Engineering</h3>
                                    <p>Kanyapur Polytechnic (WBSCTE)</p>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Associate Degree</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div> */}
                            {/* <div className="col-md-6">
                                <div className="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>High School</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Education end */}
                
                {/* Exprience start */}
                <div className="experience" id="experience">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Training & Certification</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="exp-col">
                                    <span>29-feb-2025 </span>
                                    <h3>Webskitters Academy</h3>
                                    <h4>Kolkata</h4>
                                    <h5>Web Devloper</h5>
                                    <p>Currently pursuing job-oriented traning from Webskitters Academy on the Marn Stack Course</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="exp-col">
                                    <span>23-May-2019</span>
                                    <h3>Webel Informatics Limited</h3>
                                    <h4>Andal,Durgapur</h4>
                                    <h5>IT Application</h5>
                                    <p>Computer fundamental & Windows O.S, MS-Office, Visual foxpro </p>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>ABC Soft Ltd</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Web Designer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Soft Agency</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Graphic Designer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* Exprience end */}
                
                {/* Service start */}
                {/* <div className="service" id="service">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Service</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="srv-col">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="srv-col">
                                    <i className="fa fa-laptop"></i>
                                    <h3>Web Development</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="srv-col">
                                    <i className="fa fa-search"></i>
                                    <h3>SEO</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="srv-col">
                                    <i className="fa fa-envelope-open-text"></i>
                                    <h3>Digital Marketing</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Service end */}
                
                {/* Portfolio start */}
                <div className="portfolio" id="portfolio">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Personal Projects</h2>
                        </div>
                        
                        <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item web-des">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio-1.jpg" className="img-fluid" alt=""/>
                                        <a href="https://furn008.netlify.app/"  className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                        <a href="https://github.com/iamdibyendu921/shopping_furniture" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                        <a className="portfolio-title" href="#">Project Name <span>E-Commerce</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item web-des">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio-2.jpg" className="img-fluid" alt=""/>
                                        <a href="https://calender1234.netlify.app/" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                        <a href="https://github.com/iamdibyendu921/calender" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                        <a className="portfolio-title" href="#">Project Name <span>Google Calender</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio-3.jpg" className="img-fluid" alt=""/>
                                        <a href="https://videoplayer007.netlify.app/" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                        <a href="https://github.com/iamdibyendu921/video_player" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                        <a className="portfolio-title" href="#">Project Name <span>Video Player</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio-4.jpg" className="img-fluid" alt=""/>
                                        <a href="https://music-player-mu-ashen-65.vercel.app/" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                        <a href="https://github.com/iamdibyendu921/music-player" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                        <a className="portfolio-title" href="#">Project Name <span>Music Player</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item dig-mar">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <img src="img/portfolio-5.jpg" className="img-fluid" alt=""/>
                                        <a href="https://todoform12.netlify.app/" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                        <a href="https://github.com/iamdibyendu921/todo" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                        <a className="portfolio-title" href="#">Project Name <span>Todo App</span></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Portfolio end */}
                
                {/* Review start */}
                {/* <div className="review" id="review">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Review</h2>
                        </div>
                        <div className="row align-items-center review-slider">
                            <div className="col-md-12">
                                <div className="review-slider-item">
                                    <div className="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div className="review-img">
                                        <img src="img/review-1.jpg" alt="Image"/>
                                        <div className="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="review-slider-item">
                                    <div className="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div className="review-img">
                                        <img src="img/review-2.jpg" alt="Image"/>
                                        <div className="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="review-slider-item">
                                    <div className="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div className="review-img">
                                        <img src="img/review-3.jpg" alt="Image"/>
                                        <div className="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Review end */}
                
                {/* Contact start */}
                <div className="contact" id="contact">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Contact</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="contact-info">
                                    <p><i className="fa fa-user"></i>DIBYENDU GHANTY</p>
                                    <p><i className="fa fa-tag"></i>Web Devloper</p>
                                    <p><i className="fa fa-envelope"></i><a href="mailto:info@example.com">ghanty.dibyendu0@gmail.com</a></p>
                                    <p><i className="fa fa-phone"></i><a href="tel:+1234567890">+918777017140</a></p>
                                    <p><i className="fa fa-map-marker"></i>Andal, Durgapur, W.B 713321</p>
                                    <div className="social">                                                                               
                                        <a className="btn" href="https://www.linkedin.com/in/dibyendu-ghanty-689946133"><i className="fab fa-linkedin-in"></i></a>                                       
                                        <a className="btn" href="https://github.com/iamdibyendu921"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* Contact end */}
                
                {/* Footer start */}
                <div className="footer">
                    <div className="content-inner">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <p>&copy; Copyright . All Rights Reserved</p>
                            </div>
                            <div className="col-md-6">
                                <p>Powered by <a href="https://htmlcodex.com">HTML Codex</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer end */}
            </div>
        </div>
        
        {/* Back to top */}
        <a href="#" className="back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </body>

    </>
  )
}

export default Home