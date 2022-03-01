
const api = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=200`

const getPoke = async () => {

    const response = await fetch(api)
    const pData = await response.json()
    for(pokemon of pData.results){
        const getPokemon = async()=>{
            const pokemonEntry = await fetch(pokemon.url)
            const pokeData = await pokemonEntry.json()

//--------------------------Create elements ----------------------------------------

                const infoBall = document.createElement('div')
                const pInfo = document.createElement('div')
                const pokeCard = document.createElement('div')
                const pName = document.createElement('h4')
                const pImage = document.createElement('img')
                const type = document.createElement('p')
                const topContainer = document.createElement('div')
                const nameContainer = document.createElement('div')
                const container = document.querySelector('.container')
                const canvas = document.createElement('canvas')
                const generation = document.createElement('div')
                const habitat = document.createElement('div')
                const shape = document.createElement('div')

//-------------------------Container effects --------------------------------------
                const slider = document.querySelector('.container');
                let isDown = false;
                let startX;
                let scrollLeft;
                slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                });
                slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
                });
                slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
                });
                slider.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 3; //scroll-fast
                slider.scrollLeft = scrollLeft - walk;
                });
//-------------------------Get info about pokemons----------------------------------

            const getInfo = async ()=>{
                const information = await fetch(pokeData.species.url)
                const theInfo = await information.json()         

//-------------------------Add content to elements----------------------------------

                type.textContent = `Type: ${pokeData.types[0].type.name}`
                pName.textContent = `Name: ${pokeData.name}`
                pImage.src = pokeData.sprites.front_default
                infoBall.innerHTML = `<i class="bi bi-info-circle-fill"></i>`
                pInfo.innerHTML = `${theInfo.flavor_text_entries[0].flavor_text}<br> 
                ${theInfo.flavor_text_entries[1].flavor_text},
                <br>${theInfo.flavor_text_entries[2].flavor_text}<br>${theInfo.flavor_text_entries[3].flavor_text}`
                generation.textContent = `Generation: ${theInfo.generation.name}`
                habitat.textContent = `Habitat: ${theInfo.habitat.name}`
                shape.textContent = `Shape: ${theInfo.shape.name}`

//-------------------------Append to elements-----------------------------------------

                pokeCard.append(topContainer, canvas, infoBall)
                container.append(pokeCard)
                nameContainer.append(pName, type, generation, habitat, shape)
                topContainer.append(pImage, nameContainer)
                infoBall.append(pInfo)

//------------------------Add class/id to elements ------------------------------------

                canvas.setAttribute('id', 'myChart')
                pokeCard.classList = 'pokeCard'
                nameContainer.classList = 'name-container'
                topContainer.classList = 'top-container'
                pInfo.classList = 'p-info'
                infoBall.classList = 'info-ball'
                

//--------------------------Chart data -------------------------------------------------       

                const hp = pokeData.stats[0].base_stat
                const attack = pokeData.stats[1].base_stat
                const defense = pokeData.stats[2].base_stat
                const specialA = pokeData.stats[3].base_stat
                const specialD = pokeData.stats[4].base_stat
                const speed = pokeData.stats[5].base_stat

//----------------------------chart------------------------------------------------------

                const labels = [
                    'HP',
                    'Attack',
                    'Defense',
                    'Special Attack',
                    'Special Defense',
                    'Speed',
                ];
                
                const data = {
                labels: labels,
                datasets: [{
                    label: 'Stats',
                    backgroundColor: '#30cfd0',
                    borderColor: '#30cfd0',
                    data: [hp, attack, defense, specialA, specialD, speed],
                }]
                };
                
                const config = {
                type: 'bar',
                data: data,
                options: {}
                };
                const myChart = new Chart(
                    canvas,
                    config
                )
}
//------------------------------Chart end----------------------------------------------------  

getInfo();
}
getPokemon();
}

}
getPoke()
