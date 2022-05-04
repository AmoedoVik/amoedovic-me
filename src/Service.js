import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">SKILLS</h1>
        <p className="heading p__color">
        I've been working on a few small projects using these tools and I want to improve my skills and maximize my potential!<br/>
       And I'm always open to learning new skills, just give me the right direction!    </p>
        <p className="heading p__color">
    
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg 
                  stroke="currentColor"
                  fill="yellow"
                  stroke-width="2"
                  stroke-linecap="circle"
                  stroke-linejoin="circle"
                  height="1em"
                  width="1em"
                  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"/>
</svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Javascript</h1>
               
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 -1.5 27 27"
                  stroke-linecap="circle"
                  stroke-linejoin="circle"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="m15.902 11.974c0 1.331-1.079 2.41-2.41 2.41s-2.41-1.079-2.41-2.41 1.079-2.41 2.41-2.41 2.41 1.079 2.41 2.41z"/>
                  <path d="m13.491 17.494c-.201.005-.438.008-.676.008-2.811 0-5.522-.425-8.073-1.214l.193.051c-1.351-.436-2.522-1.079-3.541-1.903l.021.016c-.789-.571-1.32-1.455-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172 2.512-.827 5.403-1.304 8.405-1.304.139 0 .278.001.417.003h-.021c.116-.002.252-.003.389-.003 2.965 0 5.82.469 8.496 1.337l-.195-.055c1.305.424 2.438 1.036 3.433 1.814l-.024-.018c.775.546 1.298 1.404 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374-2.363.729-5.08 1.149-7.895 1.149-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087 0 .893 1.301 2.3 4.153 3.274 2.249.697 4.834 1.099 7.513 1.099.235 0 .469-.003.702-.009l-.034.001c.146.003.318.005.49.005 2.684 0 5.274-.4 7.715-1.143l-.187.049c2.96-.984 4.32-2.391 4.32-3.28-.102-.638-.462-1.176-.966-1.515l-.008-.005c-.866-.674-1.876-1.217-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208-.142 0-.283.001-.424.003h.021z"/>
                  <path d="m8.023 23.986c-.016 0-.035.001-.053.001-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141.697-3.128 1.827-5.894 3.344-8.4l-.069.124c1.499-2.655 3.31-4.926 5.425-6.872l.02-.018c.923-.844 2.003-1.537 3.187-2.028l.073-.027c.407-.196.885-.31 1.39-.31.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013c-.958.877-2.083 1.59-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zm1.205-14.447.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926.191.102.417.161.657.161.02 0 .041 0 .061-.001h-.003c.955 0 2.458-.605 4.196-2.122 1.976-1.867 3.654-4.023 4.972-6.404l.068-.135c1.318-2.156 2.371-4.653 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378-.238-.094-.514-.148-.802-.148-.364 0-.708.087-1.012.24l.013-.006c-1.118.465-2.078 1.086-2.907 1.846l.007-.006c-2.041 1.881-3.772 4.057-5.136 6.468l-.069.132z"/><path d="m18.96 24c-1.306 0-2.96-.787-4.69-2.276-2.175-1.983-4.017-4.282-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185c-.162-.709-.255-1.522-.255-2.357 0-.527.037-1.044.108-1.551l-.007.058c.085-.998.608-1.858 1.372-2.399l.01-.007c1.43-.83 3.865.024 6.342 2.228 2.022 1.914 3.748 4.113 5.118 6.54l.072.138c1.428 2.297 2.557 4.961 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36 0 .577-.044 1.143-.13 1.696l.008-.062c-.103 1.022-.644 1.901-1.429 2.456l-.011.007c-.348.199-.764.316-1.207.316-.018 0-.036 0-.054-.001h.003zm-9.228-9.823c1.458 2.571 3.217 4.771 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834.773-.446 1.339-2.276.754-5.233-.702-2.89-1.787-5.434-3.219-7.741l.065.112c-1.379-2.456-3.027-4.562-4.948-6.384l-.012-.011c-2.334-2.074-4.225-2.54-4.998-2.094-.473.385-.784.952-.825 1.593v.007c-.055.39-.086.84-.086 1.298 0 .757.086 1.493.248 2.201l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"/>
                  </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">React Js</h1>
              
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 32 32"
                  stroke-linecap="circle"
                  stroke-linejoin="circle"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z"/></svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">NodeJs</h1>
            
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="circle"
                  stroke-linejoin="circle"
                  height="1em"
                  width="1em"
                  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<rect width="512" height="512" rx="15%" fill="gold"/>
<path d="m233 284h64v-41h-179v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1 23-1.1 34-3.4 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9s9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1-23 1.3-34 3.8-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-28.1-15.44z" fill="black"/>
</svg>

              </div>
              <div className="service__meta">
                <h1 className="service__text">Typescript</h1>
             
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg enable-background="new 0 0 511 511" 
                version="1.1" 
                viewBox="0 0 511 511" 
                stroke="currentColor"
                fill="yellow"
                stroke-width="2"
                stroke-linecap="circle"
                stroke-linejoin="circle"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="m492.17 309.58l-17.626-10.177c2.96-14.723 4.458-29.466 4.458-43.902 0-14.646-1.474-29.403-4.384-43.946l17.552-10.134c5.436-3.138 9.325-8.206 10.949-14.269s0.791-12.396-2.348-17.832l-48-83.139c-3.139-5.436-8.206-9.325-14.269-10.949-6.064-1.624-12.396-0.791-17.833 2.348l-17.566 10.142c-22.189-19.521-48.303-34.629-76.101-44.029v-20.192c0-12.958-10.542-23.5-23.5-23.5h-96c-12.958 0-23.5 10.542-23.5 23.5v20.193c-27.65 9.362-53.728 24.49-75.999 44.088l-17.669-10.202c-5.437-3.139-11.77-3.973-17.833-2.348s-11.13 5.513-14.269 10.949l-48 83.139c-3.139 5.436-3.972 11.769-2.348 17.832s5.513 11.131 10.949 14.269l17.626 10.177c-2.958 14.723-4.457 29.466-4.457 43.903 0 14.644 1.474 29.401 4.384 43.945l-17.552 10.134c-11.222 6.479-15.08 20.879-8.602 32.102l48 83.139c6.479 11.221 20.879 15.08 32.102 8.601l17.565-10.142c22.19 19.521 48.303 34.629 76.103 44.03v20.191c0 12.958 10.542 23.5 23.5 23.5h96c12.958 0 23.5-10.542 23.5-23.5v-20.193c27.651-9.362 53.729-24.49 76-44.087l17.668 10.201c11.221 6.479 25.623 2.62 32.102-8.601l48-83.139c6.478-11.223 2.62-25.623-8.602-32.102zm-4.389 24.602l-48 83.138c-2.343 4.06-7.552 5.455-11.611 3.111l-22.392-12.928c-2.845-1.643-6.43-1.242-8.842 0.989-22.893 21.173-50.437 37.148-79.653 46.199-3.14 0.973-5.281 3.877-5.281 7.164v25.646c0 4.687-3.813 8.5-8.5 8.5h-96c-4.687 0-8.5-3.813-8.5-8.5v-25.645c0-3.287-2.141-6.191-5.28-7.164-29.396-9.107-56.974-25.062-79.755-46.139-1.421-1.315-3.25-1.995-5.095-1.995-1.286 0-2.579 0.33-3.748 1.005l-22.29 12.868c-4.06 2.343-9.268 0.948-11.611-3.111l-48-83.138c-2.343-4.059-0.947-9.268 3.111-11.612l22.272-12.859c2.844-1.642 4.289-4.942 3.566-8.146-3.431-15.207-5.17-30.706-5.17-46.064 0-15.1 1.765-30.584 5.247-46.022 0.722-3.203-0.723-6.504-3.566-8.145l-22.349-12.903c-1.966-1.135-3.372-2.968-3.96-5.161-0.587-2.193-0.286-4.484 0.849-6.45l48-83.139c1.135-1.966 2.968-3.373 5.162-3.96 2.192-0.588 4.484-0.286 6.45 0.849l22.392 12.928c2.846 1.644 6.43 1.242 8.842-0.989 22.894-21.173 50.437-37.148 79.653-46.199 3.14-0.973 5.281-3.877 5.281-7.164v-25.645c0-4.687 3.813-8.5 8.5-8.5h96c4.687 0 8.5 3.813 8.5 8.5v25.645c0 3.287 2.141 6.191 5.28 7.164 29.395 9.106 56.973 25.061 79.755 46.139 2.412 2.232 5.997 2.633 8.843 0.99l22.29-12.869c1.967-1.135 4.258-1.437 6.45-0.849 2.193 0.588 4.026 1.994 5.162 3.96l48 83.139c1.135 1.966 1.437 4.257 0.849 6.45s-1.994 4.026-3.96 5.161l-22.272 12.859c-2.844 1.642-4.289 4.943-3.566 8.146 3.431 15.206 5.17 30.704 5.17 46.065 0 15.1-1.765 30.584-5.247 46.021-0.722 3.203 0.723 6.503 3.566 8.145l22.349 12.903c4.057 2.344 5.453 7.553 3.109 11.612z"/>
	<path d="M255.5,104C171.962,104,104,171.963,104,255.5S171.962,407,255.5,407S407,339.037,407,255.5S339.038,104,255.5,104z    M255.5,392C180.234,392,119,330.766,119,255.5S180.234,119,255.5,119S392,180.234,392,255.5S330.766,392,255.5,392z"/>
	<path d="m283.5 216h-28c-4.142 0-7.5 3.358-7.5 7.5v64c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-16.5h20.5c15.164 0 27.5-12.336 27.5-27.5s-12.336-27.5-27.5-27.5zm0 40h-20.5v-25h20.5c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5z"/>
	<path d="m214.52 220.87c-1.098-2.927-3.896-4.867-7.022-4.867h-8c-3.126 0-5.925 1.939-7.022 4.867l-24 64c-1.455 3.878 0.511 8.201 4.389 9.656s8.201-0.511 9.656-4.389l4.174-11.134h33.605l4.175 11.133c1.129 3.011 3.987 4.869 7.023 4.869 0.875 0 1.765-0.154 2.632-0.479 3.878-1.454 5.844-5.778 4.389-9.656l-23.999-64zm-22.2 43.133l11.178-29.807 11.178 29.807h-22.356z"/>
	<path d="m327.5 216c-4.142 0-7.5 3.358-7.5 7.5v64c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-64c0-4.142-3.358-7.5-7.5-7.5z"/>
	<path d="m309.15 87.3c5.205 1.659 10.394 3.586 15.421 5.726 0.958 0.408 1.954 0.601 2.934 0.601 2.916 0 5.69-1.712 6.904-4.564 1.622-3.811-0.152-8.216-3.963-9.838-5.458-2.323-11.09-4.415-16.742-6.216-3.945-1.258-8.165 0.922-9.423 4.868-1.257 3.946 0.923 8.165 4.869 9.423z"/>
	<path d="m100.45 339.9c-1.984-3.636-6.541-4.976-10.176-2.992-3.636 1.984-4.976 6.54-2.992 10.176 3.112 5.704 6.557 11.315 10.239 16.677 1.454 2.117 3.801 3.255 6.189 3.255 1.463 0 2.941-0.427 4.239-1.318 3.415-2.345 4.282-7.014 1.937-10.428-3.393-4.942-6.568-10.113-9.436-15.37z"/>
	<path d="m240.14 431.34c-40.189-3.463-78.337-20.879-107.42-49.041-2.976-2.882-7.724-2.805-10.605 0.17-2.881 2.976-2.806 7.724 0.17 10.605 31.55 30.555 72.947 49.452 116.56 53.21 0.219 0.019 0.436 0.028 0.652 0.028 3.851 0 7.127-2.949 7.464-6.856 0.355-4.126-2.702-7.76-6.828-8.116z"/>
	<path d="m363.42 97.287c-3.42-2.337-8.087-1.459-10.424 1.96-2.337 3.42-1.459 8.087 1.96 10.424 34.844 23.813 60.049 59.248 70.972 99.776 0.902 3.346 3.93 5.55 7.237 5.55 0.646 0 1.303-0.084 1.956-0.26 4-1.078 6.368-5.194 5.29-9.193-11.852-43.98-39.195-82.426-76.991-108.26z"/>
</svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Rest API</h1>
               
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 0.913 0.228 1.565 0.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-0.913-0.228-1.565-0.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 0.913 0.228 1.565 0.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-0.913-0.228-1.565-0.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z"/>
                  </svg>
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">TailwindCSS</h1>
             
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg  enable-background="new 0 0 502.664 502.664"
                  
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                 version="1.1" viewBox="0 0 502.664 502.664" xmlns="http://www.w3.org/2000/svg">
                  <g fill="yellow">stroke="currentColor"
                    <path d="m132.1 230.87c55.394 0 100.09-44.759 100.09-99.937 0-55.243-44.673-99.981-100.09-99.981-55.135 0-99.808 44.738-99.808 99.981 0 55.156 44.674 99.937 99.808 99.937z"/>
                    <path d="m212.3 247.14h-160.23c-28.603 0-52.072 26.295-52.072 58.5v160.9c0 1.769 0.841 3.387 1.014 5.177h262.39c0.108-1.79 0.949-3.408 0.949-5.177v-160.9c0-32.205-23.383-58.5-52.05-58.5z"/>
                    <path d="m502.66 137.75c-0.108-58.673-53.711-105.93-119.33-105.78-65.92 0.108-119.09 47.758-119.01 106.28 0.108 46.226 33.478 85.334 79.812 99.722l0.626 202.55 38.676 27.826 40.208-28.064-0.065-26.877h-18.572l-0.086-26.338h18.616l-0.173-29.121h-18.486l-0.086-26.295h18.572l-0.086-26.316h-18.551l-0.065-26.316 18.637-0.022-0.302-41.157c46.399-14.56 79.661-53.819 79.661-100.09zm-119.26-60.139c14.776 0 26.899 12.101 26.899 26.856 0.108 14.949-12.015 27.007-26.834 27.007-14.905 0-26.942-11.886-26.942-26.877-0.086-14.82 11.972-26.943 26.877-26.986z"/>
                  </g>
              </svg>
              
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">NextAuth</h1>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="yellow"
                  stroke-width="2"
                  stroke-linecap="circle"
                  stroke-linejoin="circle"
                  height="1em"
                  width="1em"
                  preserveAspectRatio="xMidYMid" version="1.1" viewBox="0 -101.5 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="m120.81 80.561h96.568v7.6753h-87.716v57.767h82.485v7.6753h-82.485v63.423h88.722v7.6753h-97.574v-144.22zm105.22 0h10.26l45.467 63.423 46.473-63.423 63.211-80.561-103.85 150.65 53.515 74.128h-10.663l-48.686-67.462-48.887 67.462h-10.462l53.917-74.128-50.296-70.088zm118.9 7.6753v-7.6753h110.05v7.6753h-50.698v136.54h-8.8521v-136.54l-50.497-1e-7zm-344.93-7.6753h11.065l152.58 228.32-63.054-84.107-91.337-133.31-0.40237 133.31h-8.8521v-144.22zm454.08 134.22c-1.8085 0-3.1649-1.4013-3.1649-3.2122 0-1.8109 1.3564-3.2122 3.1649-3.2122 1.8301 0 3.1649 1.4013 3.1649 3.2122 0 1.8109-1.3349 3.2122-3.1649 3.2122zm8.6982-8.4509h4.7366c0.06459 2.5654 1.9377 4.2901 4.6936 4.2901 3.0788 0 4.8228-1.854 4.8228-5.3249v-21.989h4.8228v22.011c0 6.2519-3.6171 9.8521-9.6025 9.8521-5.6194 0-9.4733-3.4924-9.4733-8.8389zm25.384-0.28026h4.7797c0.40907 2.9535 3.2941 4.8291 7.4495 4.8291 3.8754 0 6.7174-2.0049 6.7174-4.7644 0-2.3714-1.8085-3.7943-5.9208-4.7644l-4.0046-0.97012c-5.6194-1.3151-8.1815-4.0314-8.1815-8.6018 0-5.5405 4.5213-9.2269 11.303-9.2269 6.3084 0 10.916 3.6865 11.196 8.9251h-4.6936c-0.45213-2.8673-2.9496-4.6566-6.5667-4.6566-3.8108 0-6.3514 1.8325-6.3514 4.635 0 2.2205 1.6363 3.4924 5.684 4.441l3.4233 0.84077c6.3729 1.4875 8.9996 4.0745 8.9996 8.7527 0 5.9501-4.6075 9.6797-11.971 9.6797-6.8897 0-11.519-3.5571-11.863-9.1192z"/>
                  </svg>
                  
              </div>
              <div className="service__meta">
                <h1 className="service__text">NextJs </h1>
                
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
