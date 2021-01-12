function Toast() {

    return (

<div className = "container toastmain text-center" >
        <div className="row text-center">
            <div className="toast animate__animated animate__fadeInDown animate__delay-3s shadow" role="alert"
                aria-live="assertive" aria-atomic="true" data-autohide='false' data-animate='true'>
                <div className="toast-header">
                    <i className="fa fa-twitter mr-2"></i>
                    <strong className="mr-auto">@JuniorOreol ! 🙌</strong>
                    <small></small>
                    <button id = "closeToast"
                 style = { { outlineStyle: 'none' }}
                    type = "button"
                    className = "ml-2 mb-1 close"
                    data-dismiss = "toast"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body" style = { {backgroundColor: '#1e2331',color: 'white'} }>
                    I equally love learning and regularly staying up to date with new things, most especially in the
                    tech domain.❤
                </div>
            </div>
        </div>
    </div>
    );
}

export default Toast;