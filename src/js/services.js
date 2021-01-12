
import frontEnd from '../imgs/web-app.jpg';
import desktopApp from '../imgs/desktop-app.webp';
import prototypeApp from '../imgs/prototye.webp';

function Services() {
  return (

    <div className="container-fluid services">
        <div className="row">
            <div id="services" className="col-12 text-center mt-5 p-lg-5 mb-lg-2">
                <h1>Services</h1>
            </div>
            <div className="col-12 col-lg-1"></div>
            <div className="col-12 col-md-12 col-lg-10 mt-3">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img src={frontEnd} className="card-img-top" alt="frontEnd"/>
                            <div className="card-body">
                                <h5 className="card-title">Frontend Web Development</h5>
                                <p className="card-text">Using Javascript, ReactJs, Webpack, Babel, Bootstrap, jQuery,
                                    HMTL5, CSS3, I can build your websites and web
                                    application user interfaces to look beautiful and responsive on all platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img src={desktopApp} className="card-img-top" alt="DesktopApp"/>
                            <div className="card-body">
                                <h5 className="card-title">Desktop Application Development</h5>
                                <p className="card-text">My expertise in Java enables me to build desktop applications.For
                                    more low level desktop application requirements, I use Java's UI framework, JavaFX,
                                    to develop them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <img src={prototypeApp}className="card-img-top" alt="PrototypeApp"/>
                            <div className="card-body">
                                <h5 className="card-title">UI/UX Designs</h5>
                                <p className="card-text">I build and prototype mobile and web UI designs using Adobe XD,
                                    Adobe Photoshop, Adobe Illustrator and Figma. I also design logos and graphic
                                    visuals with Photoshop like flyers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-1"></div>
        </div>
    </div>

  );
}

export default Services;
