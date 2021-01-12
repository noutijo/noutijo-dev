import logo from '../icons/noutijoLogo.png';
import menu from '../icons/menu.png';
import profile from '../imgs/me.png';

function Header() {
  return (
   
    <div className="container-fluid hearder">
        <div className="row">
            <div className="col-12 deform">
                <div className="col-12 deform-one"></div>
                <div className="col-12 deform-two"></div>
            </div>
            <div className="col-12 mb-5">
                <nav id="navbar_top" className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="https://noutijo.github.io/">
                    <img width="100" height="100" src={logo} alt="noutijoLogo" className="img-fluid"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <img src={menu} className="img-fluid" width="40" height="40" alt="logo"/>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-lg-center">
                            <li className="nav-item active">
                                <a className="nav-item" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">❤ Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#resume">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#porfolio">Portfolio ↗</a>
                            </li>
                            <li className="nav-item">
                                <a style={{color:'#6a6f7c'}} className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#hireme">Hire me ↻</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="col-12 text-center mt-5">
                <div className="text-center">
                    <img src={profile} className="rounded-circle img-fluid shadow" width="140" height="140"
                        alt="me"/>
                </div>
            </div>
            <div className="col-12 text-center mt-5">
                <div className="text-center">
                    <p id="spin" className="animate__animated animate__fadeInDown animate__delay-1s"></p>
                </div>
            </div>
            <div className="col-12 text-center mt-2">
                <div className="text-center">
                    <p className="name animate__animated animate__fadeInDown animate__delay-2s">I'm NOUMODONG TINDJONG
                        JUNIOR-OREOL</p>
                </div>
            </div>
            <div className="col-12 text-center mt-2">
                <div className="text-center">
                    <p className="profession animate__animated animate__fadeInDown animate__delay-3s">Network Eng | Software
                        Developer & Ui/Ux Designer</p>
                </div>
            </div>
            <div className="col-12 text-center mt-2">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-12 col-md-8 text-center mt-4 socials animate__animated animate__fadeInDown animate__delay-2s">
                            <div className="row my-5">
                                <div className="col-4 col-lg-2 mt-5 mb-lg-3"><a target="_blank" rel='noopener noreferrer' className="icon-social"
                                        href="https://github.com/noutijo"><i className="fa fa-github mr-2"></i></a></div>
                                <div className="col-4 col-lg-2 mt-5 mb-lg-3"><a target="_blank" rel='noopener noreferrer' className="icon-social"
                                        href="https://gitlab.com/oreolnoumodong"><i className="fa fa-gitlab mr-2"></i></a>
                                </div>
                                <div className="col-4 col-lg-2 mt-5 mb-lg-3"><a target="_blank" rel='noopener noreferrer' className="icon-social"
                                        href="https://twitter.com/JuniorOreol"><i className="fa fa-twitter mr-2"></i></a>
                                </div>
                                <div className="col-4 col-lg-2 mt-5 mb-lg-3"><a target="_blank" rel='noopener noreferrer' className="icon-social"
                                        href="https://www.linkedin.com/in/oreolnoumodong/"><i
                                            className="fa fa-linkedin mr-2"></i></a></div>
                                <div className="col-4 col-lg-2 mt-5 mb-lg-3"><a target="_blank" rel='noopener noreferrer' className="icon-social"
                                        href="https://web.facebook.com/nooutidev"><i
                                            className="fa fa-facebook mr-2"></i></a></div>
                                <div className="col-4 col-lg-2 mt-5 mb-lg-3"><a target="_blank" rel='noopener noreferrer' className="icon-social"
                                        href="https://www.instagram.com/nooutidev/"><i
                                            className="fa fa-instagram mr-2"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Header;
