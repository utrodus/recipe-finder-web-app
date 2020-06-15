class Footer extends HTMLElement {

    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDom.innerHTML = `

        <style>

        *{

            margin:0;
            padding:0;
            box-sizing:border-box;
        }
      
        
        :host{ 
                 
            max-width: 100%;
            width: 100%;
            bottom: 0;
            overflow:auto;
          
        }
        
        footer{
            display: flex;
            max-width: 100%;
            margin: 0 auto;
            background-color:#F7F7F7 !important;        
        }

        :host p {     
            margin: 0 auto;
            color: #575757;
            font-family: 'NunitoSans-Bold', sans-serif;
            font-size: 0.9em;
        }

        span{
            color: #FE8C64;
        }
        
        .social-media{
            margin: 0 auto;
        }

        .resp-sharing-button__link,
        .resp-sharing-button__icon {
            display: inline-block
        }

        .resp-sharing-button__link {
        text-decoration: none;
        color: #fff;
        margin: 0.6em 0.3em;
        align-self: center;
        }

        .resp-sharing-button {
        border-radius: 5px;
        transition: 25ms ease-out;
        padding: 0.3em 0.55em;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif
        }

        .resp-sharing-button__icon svg {
        width: 1em;
        height: 1em;
        margin-right: 0.4em;
        vertical-align: top
        }

        .resp-sharing-button--small svg {
        margin: 0;
        vertical-align: middle
        }

        /* Non solid icons get a stroke */
        .resp-sharing-button__icon {
        stroke: #fff;
        fill: none
        }

        /* Solid icons get a fill */
        .resp-sharing-button__icon--solid,
        .resp-sharing-button__icon--solidcircle {
        fill: #fff;
        stroke: none
        }

        .resp-sharing-button--twitter {
        background-color: #55acee
        }

        .resp-sharing-button--twitter:hover {
        background-color: #2795e9
        }


        .resp-sharing-button--facebook {
        background-color: #3b5998
        }

        .resp-sharing-button--facebook:hover {
        background-color: #2d4373
        }

        .resp-sharing-button--whatsapp {
        background-color: #25D366
        }

        .resp-sharing-button--whatsapp:hover {
        background-color: #1da851
        }


        .resp-sharing-button--facebook {
        background-color: #3b5998;
        border-color: #3b5998;
        }

        .resp-sharing-button--facebook:hover,
        .resp-sharing-button--facebook:active {
        background-color: #2d4373;
        border-color: #2d4373;
        }
           
        @media only screen and (min-width: 320px) {

            footer{
                display:flex;
                flex-direction:column;
               
                padding-top: 15px;
                padding-bottom:15px;
            }

            :host p {     
                color: #575757;
                font-size: 1em;
                align-self: start;
            }


            .resp-sharing-button__link{
                margin-top: 10px;
                margin-right: 10px;
                margin-left:0;
            }                        
        }

        @media only screen and (min-width: 768px) {
           
            footer{
                display:flex;
                flex-direction:row;
             
            }
            :host p {     
                color: #575757;
                font-size: 0.9em;
                align-self: center;
            }


            .resp-sharing-button__link{
                margin-top: 10px;
                margin-right: 10px;
            }
        }

        @media only screen and (min-width: 980px) {    
           
            footer{
                display:flex;
                flex-direction:row;
               
                padding-top: 8px;
                padding-bottom:8px;
            }
            :host p {     
                color: #757575;
                font-size: 0.9em;
                align-self: center;
            }

        } 


        </style>
            <footer>
            <p>Cari Resep  &#169; 2020 - <b> Dicoding Academy </b></p>
            <div class ="social-media">
            <!-- Sharingbutton Facebook -->
            <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdicoding.com%2F" target="_blank" rel="noopener" aria-label="">
            <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </div>
            </div>
            </a>

            <!-- Sharingbutton Twitter -->
            <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Aplikasi%20Cari%20Resep&amp;url=http%3A%2F%2Fdicoding.com%2F" target="_blank" rel="noopener" aria-label="">
            <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                </div>
            </div>
            </a>

            <!-- Sharingbutton WhatsApp -->
            <a class="resp-sharing-button__link" href="whatsapp://send?text=Aplikasi%20Cari%20Resep%20http%3A%2F%2Fdicoding.com%2F" target="_blank" rel="noopener" aria-label="">
            <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>
                </div>
            </div>
            </a>
            </div>

            </footer>
        `;
    }
}

customElements.define("custom-footer", Footer);