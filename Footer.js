

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500&family=Roboto+Condensed:wght@700&display=swap');

      *{
          padding: 0;
          margin: 0;
      }
      .Footer{
          height: auto;
          padding-bottom: 20px;
          background-color: rgb(54, 54, 54);
          display: grid;
          grid-template-columns: repeat(4,1fr);
      }
      #head{
          color: white;
          Font-family: 'Roboto Condensed', sans-serif;
      }
      .Text-footer a{
          color: grey;
          text-decoration: none;
          font-family: 'Nunito', sans-serif;
          cursor:pointer
      }
      .company{
        justify-self:center;
        align-self:center;
      }
      .support{
        justify-self:center;
        align-self:center;
      }
      .networkSites{
        justify-self:center;
        align-self:center;
      }
      .Text-footer a:hover{
        color:white;
      }
      .Socials{
        display:flex;
        flex-direction:column;
      }
  </style>
  <Footer>
      <div class="Footer">
          <div class="company">
              <div id="head" class="Text-footer">COMPANY</div>
              <div class="Text-footer"><a href="#">About ITTEFAQ</a></div>
              <div class="Text-footer"><a href="#">News</a></div>
              <div class="Text-footer"><a href="#">How we work</a></div>
          </div>
          <div class="support">
              <div id="head"  class="Text-footer">SUPPORT</div>
              <div class="Text-footer"><a href="#">Help Center</a></div>
              <div class="Text-footer"><a href="#">Shipping Info</a></div>
              <div class="Text-footer"><a href="#">Contact Us</a></div>
          </div>
          <div class="networkSites">
              <div id="head"  class="Text-footer">NETWORK SITES</div>
              <div class="Text-footer"><a href="#">lorem</a></div>
              <div class="Text-footer"><a href="#">Lorem</a></div>
          </div>
          <div class="Socials">
              <div class="logo" id="head">LOGO</div>
              <div class="socials">
                  <div class="Text-footer" id="instagram"><a>instagram</a></div>
                  <div class="Text-footer" id="github"><a>github</a></div>
                  <div class="Text-footer" id="faceboook"><a>facebook</a></div>
                  <div class="Text-footer" id="linkidn"><a>linkidn</a></div>
              </div>
          </div>
      </div>
  </Footer>

      `;
    }
  }
  
  customElements.define('footer-component', Footer);



