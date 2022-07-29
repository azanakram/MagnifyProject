import React from 'react';
function Header() {
    return(
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <div class='column heading'>
                    <a class='nav-link' href='/'>
                        Submission Form
                    </a>
                </div>
                <div class='column heading'> | </div>
                <div class='column heading'>
                    <a class='nav-link' href='/lookup'>
                        Look-Up Form
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Header;