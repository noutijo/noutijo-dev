

function Skills() {
  return (

 <div className="container-fluid skills">
        <div className="row">
            <div id="skills" className="col-12 text-center mt-5 p-lg-5 mb-lg-2">
                <h1>Top Skills</h1>
            </div>
            <div className="col-12 text-center mb-5">
                <div className="row">
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>Javascript</p>
                        <div className="progress">
                            <div div className = "progress-bar"
                            role = "progressbar"
                            style = {
                                {
                                    width: '77%'
                                }
                                }
                            aria-valuenow = "77"
                                aria-valuemin="0" aria-valuemax="100">77%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>ReactJs</p>
                        <div className="progress">
                            <div div className = "progress-bar"
                            role = "progressbar"
                            style = {{width: '51%'}}

                            aria-valuenow = "51"
                                aria-valuemin="0" aria-valuemax="100">51%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>Java 8 + JavaFx</p>
                        <div className="progress">
                            <div className = "progress-bar"
                            role = "progressbar"
                            style = { { width: '80%'}}
                            aria-valuenow = "80"
                                aria-valuemin="0" aria-valuemax="100" >80%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>MYSQL</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="40"
                                aria-valuemin="0" aria-valuemax="100">40%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>HTML5 / CSS3</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '91%'}} aria-valuenow="91"
                                aria-valuemin="0" aria-valuemax="100">91%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>WordPress</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '93%'}} aria-valuenow="93"
                                aria-valuemin="0" aria-valuemax="100">93%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>Adobe Photoshop / Adobe Illustrator</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '83%'}} aria-valuenow="83"
                                aria-valuemin="0" aria-valuemax="100">83%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>Prototyping + Adobe XD</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '76%'}} aria-valuenow="76"
                                aria-valuemin="0" aria-valuemax="100">76%</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-4 p-lg-4">
                        <p>Infographics</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '87%'}} aria-valuenow="87"
                                aria-valuemin="0" aria-valuemax="100">87%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Skills;
