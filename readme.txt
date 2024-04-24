1. <img class="col-3__arrow" src="./img/arrow.svg" alt="PROFITOV"> 
    замінити на:
    <div class="col-3__arrow">
        <svg width="72" height="72" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19" cy="19" r="18.4722" stroke="white" stroke-width="1.05556"/>
            <path d="M14.7778 14.25L14.7778 24.2778" stroke="white" stroke-width="1.58333" stroke-linecap="round"/>
            <path d="M14.7778 14.25L24.8056 14.25" stroke="white" stroke-width="1.58333" stroke-linecap="round"/>
            <path d="M14.7778 14.25L23.7501 23.2222" stroke="white" stroke-width="1.58333" stroke-linecap="round"/>
        </svg>
    </div>
    
2. <button class="custom-button transparent">Зарегистрироваться</button> додати клас sign-up_popup-btn 

3. додати popup:
    <!-- sign-up completed popup -->
    <div class="sign-up-completed_popup ">
        <div class="sign-up-completed_popup-dialog">
            <div class="sign-up-completed_popup-content">
                <div class="sign-up-completed_popup-header">
                    <svg class="close_popup" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.4064 11L23 21.4113L12.5936 11L11 12.5839L21.4119 23.0002L11 33.4169L12.5936 35L23 24.589L33.4064 35L35 33.4169L24.5881 23.0002L35 12.5839L33.4064 11Z" fill="#303030"/>
                        <circle cx="22.5" cy="22.5" r="21.5" stroke="#303030" stroke-width="2"/>
                    </svg>
                </div>
                <div class="sign-up-completed_popup-body">
                    <h2 class="sign-up_popup-title">Регистрация успішна!</h2>  
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus officia cupiditate vero assumenda in minima iusto. Vero corporis impedit molestiae consequatur id ex sint, possimus, incidunt, quaerat vitae maiores.</p>                
                </div>
            </div>
        </div>
    </div>