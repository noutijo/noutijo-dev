
import comba from '../imgs/comba.png';
import getquote from '../imgs/getquote.png';
import watchoutsite from '../imgs/watchoutsiteatboston.PNG';
import chaletsandcaviar from '../imgs/chaletsandcaviar.PNG';
import seo from '../imgs/seo.PNG';
import smallD from '../imgs/smallD.png';
import shoppyitOne from '../imgs/shppy01.png';

function Portfolio() {
  return (
   
<div className="container-fluid porfolio">
        <div className="row">
            <div id="porfolio" className="col-12 text-center mt-5 p-lg-5">
                <h1>Portfolio</h1>
            </div>
            <div className="col-12 text-center my-4 my-lg-0 p-lg-5">
                <h6><span id="show-portfolio-web" className="portfolio-web make-green-bg">🌍 Web</span> <span
                        id="show-portfolio-design" className="portfolio-design make-gray-bg">🍕 Graphic Design</span></h6>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-lg-1"></div>

                    <div className="col-12 col-lg-10">

                        <div className="row row-cols-1 row-cols-md-3">

                            
                            <div
                                className="col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src={comba} className="card-img-top" alt="comba"/>
                                    <div className="card-body">
                                        <h5 className="card-title">comba <a target="_blank" rel='noopener noreferrer' href="http://comba.netlify.app/"
                                                className="text-center">Live View ↗</a>
                                        </h5>
                                        <p className="card-text mt-3">comba is an online game written JavaScript in which 2
                                            players play each turn to compete.</p>
                                        <p className="mt-3">
                                            <span className="text-center">JavaScript</span>
                                            <span className="text-center">ES6</span>
                                            <span className="text-center">HTML | CSS </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src={getquote} className="card-img-top" alt="getquote"/>
                                    <div className="card-body">
                                        <h5 className="card-title">getquote <a target="_blank" rel='noopener noreferrer' href="http://getquote.epizy.com/"
                                                className="text-center">Live View
                                                ↗</a>
                                        </h5>
                                        <p className="card-text mt-3">getquote is a tool that creates random quotes by
                                            assembling sentence fragments.</p>
                                        <p className="mt-3">
                                            <span className="text-center">JavaScript</span>
                                            <span className="text-center">HTML | CSS </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src={watchoutsite} className="card-img-top" alt="watch it outsite"/>
                                    <div className="card-body">
                                        <h5 className="card-title">watchoutsite <a target="_blank" rel='noopener noreferrer' href="http://watchoutsiteatboston.epizy.com/" className="text-center">Live
                                                View ↗</a></h5>
                                        <p className="card-text mt-3">watchoutsiteatboston is Web prototype create for an
                                            event that shows films can appeal to audiences of all ages.</p>
                                        <p className="mt-3">
                                            <span className="text-center">HTML</span>
                                            <span className="text-center">CSS </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src={chaletsandcaviar} className="card-img-top" alt="chalets & caviar"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Chalets & Caviar <a target="_blank" rel='noopener noreferrer'
                                                href="http://mountainschalets.epizy.com/" className="text-center">Live View
                                                ↗</a></h5>
                                        <p className="card-text mt-3">Chalets & Caviar is a website who show off luxury
                                            chalets for sale or rent.</p>
                                        <p className="mt-3">
                                            <span className="text-center">CSS</span>
                                            <span className="text-center">WORDPRESS </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-web-block col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src={seo} className="card-img-top" alt="noutijo"/>
                                    <div className="card-body">
                                        <h5 className="card-title">noutijo <a target="_blank" rel='noopener noreferrer' href="http://noutijo.github.io/"
                                                className="text-center">Live View
                                                ↗</a>
                                        </h5>
                                        <p className="card-text mt-3">noutijo is my own portfolio built from scratch with a
                                            custom design.</p>
                                        <p className="mt-3">
                                            <span className="text-center">ReactJs</span>
                                            <span className="text-center">HTML | CSS </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-design-block col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src={smallD} className="card-img-top" alt="small deals"/>
                                    <div className="card-body">
                                        < h5 className = "card-title" > small deals <a a target = "_blank" rel='noopener noreferrer'
                                        href = {smallD}
                                                className="text-center">Live View
                                                ↗</a>
                                        </h5>
                                        <p className="card-text mt-3">I designed this logo for a business. With a good
                                            knowledge of Adobe Illustrator, I designed logos for several companies
                                            and spooky vector visuals.</p>
                                        <p className="mt-3">
                                            <span className="text-center">Adobe Illustrator </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-12 animate__animated animate__fadeInUp animate__delay-0.5s portfolio-design-block col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <img src={shoppyitOne} className="card-img-top" alt="Shoppy"/>
                                    <div className="card-body">
                                        < h5 className = "card-title" > Shoppy <a a target = "_blank" rel='noopener noreferrer'
                                        href = {shoppyitOne}
                                                className="text-center">Live View
                                                ↗</a>
                                        </h5>
                                        <p className="card-text mt-3">I designed this flyer for a company. With a good
                                            knowledge of Photoshop, I design scary visuals like Roll-up, etc. </p>
                                        <p className="mt-3">
                                            <span className="text-center">Adobe Photoshop</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-lg-1"></div>
                </div>
            </div>
        </div>
</div>

  );
}

export default Portfolio;
