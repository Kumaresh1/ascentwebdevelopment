import React from 'react'

import './style/foot.css'

function Footer(props) {
    return (
        <div className="c-tn" id="contact">
            <footer className="c1-tn" >
<div className="l-1">
<img src="https://pngimg.com/uploads/phone/phone_PNG48988.png"   alt="phone_icon"
></img>

<p>+(91) 9344562658</p>
</div>

<div className="l-2">
<img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"   alt="email_icon"
></img>
<p>ascentwebdevelopments@gmail.com</p>

</div>

<div className="l-3">
<img src="https://image.flaticon.com/icons/png/512/87/87390.png"  alt="instagram_icon"
 ></img>

<p>@ascent_web_solutions</p>

<br></br>

</div>
            </footer>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer

