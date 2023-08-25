document.addEventListener('DOMContentLoaded', ()=>{
    
    let start = 0
    let slider_images = document.querySelectorAll('.slider_images');
    let dots = document.querySelectorAll('.dot');
    function Showslides() {
        if (start < slider_images.length - 1) {
          start++;
        } else {
          start = 0;
        }
        slider_images.forEach(img => {
            img.classList.add('hidden');
            dots.forEach(dot => {
                dot.classList.remove('active_dot');
            })
        })
        slider_images[start].classList.remove('hidden');
        slider_images[start].classList.add('shown');
        dots[start].classList.add('active_dot');
        slider_images[start].classList.add('fade');
    }

    setInterval(Showslides, 5000);

    let options_par = document.querySelector('#options_par');
    let all_options = options_par.querySelectorAll('div');
    let options_content = document.querySelectorAll('.options_content')
    
    all_options.forEach(option => {
        option.onclick = ()=>{
            if(!option.classList.contains('active')){
                all_options.forEach(option => {
                    option.classList.remove('active');
                })
                option.classList.add('active');
                // console.log(option.id)
                options_content.forEach(content => {
                    if(content.classList.contains(option.id)){
                        options_content.forEach(content => {
                            content.classList.add('hidden');
                        })
                        content.classList.remove('hidden');
                        content.classList.add('fade');
                    }
                })
            }
        }
    })

})