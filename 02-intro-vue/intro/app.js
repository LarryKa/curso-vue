const { createApp , ref } = Vue;

const app = createApp({
    // template: `
    //     <h1>{{ message }}</h1>
    //     <p>{{ author }}</p>
    // `,
    setup() {
        const message = ref("I'm Batman");
        const author = ref("Bruce Wayne")
        // setTimeout(() => {
        //     message.value = 'Soy Goku';   
        //     author.value = 'Kakaroto';    
        // }, 1500);

        const changeQuote = () => {
            message.value = 'Soy Goku';   
            author.value = 'Kakaroto'; 
        }
        
        return {
            message, 
            author,
            changeQuote
        }
    }
});

app.mount('#myApp');