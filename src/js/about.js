
import profile from '../imgs/me.png';

function About() {
  return (
   
<div className="container-fluid about">
        <div className="row">
            <div id="about" className="col-12 col-md-6 col-lg-6 text-center mt-5 p-lg-5 my-lg-5">
                <h1>About Me</h1>
                <div className="text-center mt-3">
                    <img src={profile} className="rounded img-fluid shadow" width="200" height="200" alt="me"/>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 text-center p-lg-4 my-lg-5">
                <div className="row">
                    <div className="col-12">
                        <p>@My name is <strong> NOUMODONG TINDJONG Junior-Oreol</strong>. I specialized in the creation,
                            deployment and maintenance of web
                            applications, aesthetic design at different scales while keeping an eye on best practices.
                            My main
                            technology stack
                            includes: <strong>JavaScript</strong>, <strong>ReactJs</strong>, <strong>Java</strong>,
                            <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap</strong>,
                            <strong>WordPress</strong>, <strong>JavaFX</strong>, <strong>Adobe Photoshop</strong>,
                            <strong>Adobe
                                Illustrator</strong>, <strong>Adobe XD</strong>, <strong>Figma</strong>.
                            I work as an independent web developer where I always make sure to meet the needs of my
                            clients,
                            even if it means
                            working overtime.
                            I also like to learn and keep myself regularly informed of news, especially in the
                            technological
                            field.
                        </p>
                    </div>
                    <div className="col-12 text-center">
                        <div className="row about-contact">
                            <div className="col-12 col-lg-4 text-center">
                                <i className="text-center fa fa-envelope"></i>
                                <p className="text-center">oreolnoumodong@gmail.com</p>
                            </div>
                            <div className="col-12 col-lg-4 text-center">
                                <i className="text-center fa fa-phone"></i>
                                <p className="text-center">(+237) 690 079 333</p>
                            </div>
                            <div className="col-12 col-lg-4 text-center">
                                <i className="text-center fa fa-location-arrow"></i>
                                <p className="text-center">Yaounde, Cameroon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default About;
