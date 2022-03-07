// to use this function, you html code has to have element with id=services
// also materialize library should be used
function displayServices(){
    let services = getServices();

    for (let index = 0; index < services.length; index++) {
        const service = services[index];
        
        console.log(service);

        let template = '<div class="col s12 m6 l4"><div class="card blue-grey darken-1"><div class="card-content white-text"> <span class="card-title">{{name}}</span><img src="{{image}}" alt=""><p>{{description}}</p></div><div class="card-action"><a href="{{readmore}}">Skaityti daugiau</a><a href="{{supporters}}">Rėmėjai</a></div></div></div>';

        template = template.replace("{{name}}", service.name);
        template = template.replace("{{image}}", service.image);
        template = template.replace("{{description}}", service.description);
        template = template.replace("{{readmore}}", service.readmore);
        template = template.replace("{{supporters}}", service.supporters);

        document.querySelector("#services").innerHTML += template;
    }
}

function getServices(){
    return [
        {
            name: "Šuniukų pavedžiojimas",
            image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati totam, corrupti molestias veritatis amet accusamus enim facere eum qui deserunt eius ipsum ad quibusdam ab tempora magnam! Officia, pariatur recusandae!",
            readmore: "#",
            supporters: "#"
        },
        {
            name: "Šuniukų glostymas",
            image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati totam, corrupti molestias veritatis amet accusamus enim facere eum qui deserunt eius ipsum ad quibusdam ab tempora magnam! Officia, pariatur recusandae!",
            readmore: "#",
            supporters: "#"
        },
        {
            name: "Šuniukų prausimas",
            image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati totam, corrupti molestias veritatis amet accusamus enim facere eum qui deserunt eius ipsum ad quibusdam ab tempora magnam! Officia, pariatur recusandae!",
            readmore: "#",
            supporters: "#"
        },
        {
            name: "Šuniukų pavedžiojimas",
            image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati totam, corrupti molestias veritatis amet accusamus enim facere eum qui deserunt eius ipsum ad quibusdam ab tempora magnam! Officia, pariatur recusandae!",
            readmore: "#",
            supporters: "#"
        },
        {
            name: "Šuniukų glostymas",
            image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati totam, corrupti molestias veritatis amet accusamus enim facere eum qui deserunt eius ipsum ad quibusdam ab tempora magnam! Officia, pariatur recusandae!",
            readmore: "#",
            supporters: "#"
        },
        {
            name: "Šuniukų prausimas",
            image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati totam, corrupti molestias veritatis amet accusamus enim facere eum qui deserunt eius ipsum ad quibusdam ab tempora magnam! Officia, pariatur recusandae!",
            readmore: "#",
            supporters: "#"
        }
    ];
}