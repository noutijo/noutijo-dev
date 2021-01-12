

function Footer() {
  return (
    <div className="container-fluid footer">
        <div className="row">
            <div className="col-12 col-lg-1"></div>
            <div className="col-12 col-md-12 col-lg-10 my-5">
                <div className="row">
                    <div className="col-12 col-md-1 col-lg-2"></div>
                    <div className="col-12 my-2 col-md-3 col-lg-4">Copyright &copy;
                        <script>
                            document.write(new Date().getFullYear());
                        </script> noutijo <span className="hearts">&hearts;</span > by <a a target = "_blank"
                        rel = 'noopener noreferrer'
                            href="https://twitter.com/JuniorOreol"> @oreol</a>
                    </div>
                    <div className="col-12 my-2 text-left col-md-3 col-lg-2">
                        <h6>Versioning</h6>
                        <p>Github</p>
                        <p>GitLab</p>
                        <p>Bitbucket</p>
                    </div>
                    <div className="col-12 text-left col-md-3 col-lg-2">
                        <h6>Tools</h6>
                        <p>Figma</p>
                        <p>Adobe</p>
                    </div>
                    <div className="col-12 col-md-1 col-lg-2"></div>
                </div>
            </div>
            <div className="col-12 col-lg-1"></div>
        </div>
    </div>
  );
}

export default Footer;
