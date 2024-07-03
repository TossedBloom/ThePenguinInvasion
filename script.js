const popoverInfo = {
    population: {
        title: 'Crashing Populations',
        content: 'Unfortunately, the penguin population is in rapid decline. In the spring of 2022, no emperor chicks survived, leading to the loss of an entire generation of penguins. This alarming situation signals a potentially catastrophic future for these majestic birds.'
    },
    poop: {
        title: 'Tiny Creatures, Big Effects',
        content: 'Did you know that you can see penguin poop (known as "guano") can be seen from space? Satellite images reveal brown patches in the white ice sheets of Antartica.'
    },
    fighting: {
        title: 'Passionate Lovers, Protective Guardians',
        content: 'Penguins are feisty fighters, especially among females vying for mates. In a remarkable incident, an adélie penguin once rescued a group of emperor penguins from a giant petrel'
    },
    height: {
        title: 'Ancient Giants',
        content: 'Researchers have uncovered penguin fossils indicating that these birds could have stood up to 2 meters tall!'
    },
    teeth: {
        title: 'Not Alone',
        content: 'Penguins aren\'t the only creatures with egg teeth. Other birds and reptiles have them too!'
    },
    speed: {
        title: 'Toboggan Fun',
        content: 'Penguins often slide on their bellies on ice to cover long distances. It helps them cover more distance at a greater speed without risk of falling!'
    }
}

for (const [key, value] of Object.entries(popoverInfo)) {
    const el = document.querySelector(`[data-bs-toggle-id="${key}"]`);
    el.setAttribute('data-bs-title', value.title);
    el.setAttribute('data-bs-content', value.content);
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const sectionHeadings = document.querySelectorAll('.section-text h2');
const sectionParagraphs = document.querySelectorAll('.section-text p');

gsap.registerPlugin(ScrollTrigger);

sectionHeadings.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
        },
        y: 150,
        duration: 0.3
    })
});

sectionParagraphs.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
        },
        y: 150,
        duration: 0.3
    })
});

const populationImageSectionsContainer = document.querySelector('.penguin-army .army');
const populationImageSections = document.querySelectorAll('.penguin-army .army div');

gsap.from(populationImageSections, {
    scrollTrigger: {
        populationImageSectionsContainer
    },
    y: 150,
    stagger: 0.03, // 0.1 seconds between when each ".box" element starts animating
  });