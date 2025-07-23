// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Função para criar estrelas dinâmicas adicionais
    function createDynamicStars() {
        const starsContainer = document.querySelector('.stars');
        const numberOfStars = 50;
        
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'dynamic-star';
            
            // Posição aleatória
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Tamanho aleatório
            const size = Math.random() * 3 + 1;
            
            // Delay de animação aleatório
            const delay = Math.random() * 3;
            
            star.style.cssText = `
                position: absolute;
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                animation: sparkle ${2 + Math.random() * 2}s ease-in-out infinite alternate;
                animation-delay: ${delay}s;
                opacity: ${0.5 + Math.random() * 0.5};
            `;
            
            starsContainer.appendChild(star);
        }
    }
    
    // Adiciona animação de sparkle via CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% { 
                opacity: 0.3;
                transform: scale(0.8);
            }
            100% { 
                opacity: 1;
                transform: scale(1.2);
            }
        }
        
        .dynamic-star {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
    
    // Cria as estrelas dinâmicas
    createDynamicStars();
    
    // Efeito de paralaxe suave no movimento do mouse
    document.addEventListener('mousemove', function(e) {
        const stars = document.querySelector('.stars');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        stars.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
    
    // Efeito de entrada suave para os elementos
    const mainTitle = document.querySelector('.main-title');
    const subtitle = document.querySelector('.subtitle');
    const photoFrame = document.querySelector('.photo-frame');
    
    // Adiciona classes para animação de entrada
    setTimeout(() => {
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'translateY(-30px)';
        mainTitle.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            mainTitle.style.opacity = '1';
            mainTitle.style.transform = 'translateY(0)';
        }, 100);
    }, 100);
    
    setTimeout(() => {
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(-20px)';
        subtitle.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 100);
    }, 300);
    
    setTimeout(() => {
        photoFrame.style.opacity = '0';
        photoFrame.style.transform = 'scale(0.8)';
        photoFrame.style.transition = 'all 1.2s ease-out';
        
        setTimeout(() => {
            photoFrame.style.opacity = '1';
            photoFrame.style.transform = 'scale(1)';
        }, 100);
    }, 600);
    
    // Efeito de clique na foto
    photoFrame.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }, 100);
    });
    
    // Adiciona cursor pointer na foto
    photoFrame.style.cursor = 'pointer';
    
    console.log('Walter White site carregado com sucesso!');
});

