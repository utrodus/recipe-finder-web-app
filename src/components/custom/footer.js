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
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>

        <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }

        
        :host{            
            max-width: 100%;
            width: 100%;
            position: absolute;
            bottom: 0;
            overflow:auto;        
            background-color: #F7F7F7;
        }
        
        footer{
            height: 60px;
            line-height: 60px;
            display:flex;
            padding-left:80px;
            padding-right:80px;
        }

        :host p {            
            color: #575757;
            font-family: 'NunitoSans', sans-serif;
            font-size: 0.9em;
        }

        span{
            color: #FE8C64;
        }
        
        a{
            text-decoration:none;
            color:#575757;
        }

        </style>


            <footer>
            <p>Dibuat Oleh Utrodus Said Al Baqi &#169; 2020 - Dicoding Academy <span>|</span> Social Media : <a href="https://www.instagram.com/come.said/" target="_blank">Instagram</a>
            </p>
            </footer>
        `;
    }
}

customElements.define("custom-footer", Footer);