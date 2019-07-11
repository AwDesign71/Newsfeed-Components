// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"



/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
//Json Data
const newsFeed =[{
  title: "Lambda School Students: \"We're the best!\"",
  date: "Nov 5th, 2017",
  content: "'Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn jar twi'lek jinn leia jango skywalker mon. Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2  windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Mofsolo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba owen jinn tatooine sith organa. Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon."
},
   {
  title: "Javascript and You, ES6",
  date: "Nov 7th, 2017",
  content: "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghostHermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot   snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.   Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.  Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma   and Parvati Sorting Hat Minister of Magic blue turban remember my last."
  },
  {
    title: "React vs Angular vs Vue",
    date: "Nov 7th, 2017",
    content: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem     ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum"
  },
  {
    title: "Professional Software Development in 2018",
    date: "Nov 7th, 2017",
    content: "Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor. Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor    hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor! Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor?"
  },
  {
    title: "Working with Java OOP",
    date: "July 11, 2019",
    content: "Vestibulum posuere ligula ac nunc feugiat dictum. Integer tincidunt hendrerit nunc, at vulputate velit lacinia in. Aenean interdum odio magna, porta bibendum justo vestibulum nec. Donec sed leo quis urna laoreet egestas sit amet in odio. Nulla et tellus tincidunt, luctus diam porttitor, commodo sapien. Sed gravida condimentum ligula vitae gravida. Proin id lorem sit amet odio posuere porttitor eu et dolor. Vestibulum consectetur laoreet magna, non porta nibh tristique non. Cras congue hendrerit tellus vitae gravida. Integer cursus eu dui nec laoreet. Nam ut vehicula eros. Phasellus fringilla pellentesque ex, ac suscipit leo condimentum eget. Donec tempor id felis nec bibendum. Maecenas massa nunc, tincidunt in tincidunt vitae, tempor in eros. Donec ac eros felis. Curabitur euismod auctor risus nec faucibus. Mauris ut vehicula ligula. Fusce luctus iaculis facilisis. Phasellus varius, augue eget fringilla molestie, velit diam malesuada quam, quis tempus tortor dui ac est. Integer eu finibus justo. Nullam bibendum vestibulum massa ac mattis. Vivamus feugiat condimentum mauris, vel iaculis sapien sodales et. Nullam id interdum lectus, vel ullamcorper sem. Vestibulum non ex condimentum, mattis turpis nec, finibus tellus. In hac habitasse platea dictumst. Nam ultrices, lacus at gravida eleifend, erat lorem bibendum sapien, ac porttitor risus magna nec nisi. Morbi luctus nulla mauris. Suspendisse fermentum libero sit amet euismod elementum. Maecenas volutpat metus commodo massa elementum fermentum. Aliquam erat volutpat. Duis eget arcu nec odio feugiat finibus. Maecenas id nisl et neque rhoncus pretium. Aenean faucibus felis nec lorem feugiat, id aliquam tellus sollicitudin. Praesent leo lectus, auctor nec justo vitae, volutpat consequat odio. Quisque non sollicitudin mauris. Suspendisse potenti. Maecenas ut magna nec mauris pharetra fringilla. Duis lobortis tortor a posuere auctor. Curabitur sed tristique risus, eget elementum erat. Phasellus egestas vitae ante ac mattis. Praesent auctor ac felis non vehicula. Maecenas non mauris facilisis, tincidunt purus quis, eleifend velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus eros lorem, dapibus ac interdum at, commodo vel lacus. Suspendisse potenti. In hac habitasse platea dictumst. Aenean tellus nibh, volutpat a egestas et, posuere eu ex. Sed sit amet diam nisi. Pellentesque tincidunt, risus at porta volutpat, dolor elit tincidunt augue, ac suscipit ex dui sit amet tellus. Sed rutrum vitae purus eget consequat. Ut non libero iaculis, hendrerit metus non, fermentum tellus. Suspendisse potenti."
  },
  {
    title: "Json Data, how to start",
    date: "July 11, 2019",
    content: "Praesent commodo vestibulum consequat. Aliquam fermentum lacus blandit dolor ornare, in tempor quam lacinia. Phasellus id mauris ac mi pharetra sollicitudin. Vivamus maximus nunc velit, vel scelerisque enim auctor et. Cras tempus sit amet ipsum sit amet tristique. Nulla posuere accumsan porta. Integer est libero, sollicitudin nec pulvinar eget, fringilla et nisi. Maecenas sodales sit amet ante ut ornare. In aliquam feugiat dolor, sed semper urna vehicula in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus auctor varius lacinia. Fusce quis nibh sit amet lectus fermentum vestibulum ac ac mi. Nullam varius id sem in mattis. Aenean vehicula eleifend enim at egestas. Fusce nec molestie nisl, nec volutpat justo. Integer varius risus in urna posuere, et scelerisque mauris viverra. Aliquam nulla elit, vehicula non arcu vel, viverra finibus quam. Phasellus pharetra turpis nec aliquet pharetra. Cras et magna nibh. Phasellus luctus orci hendrerit tristique congue. Donec ut augue feugiat dolor tristique molestie. Integer varius pulvinar massa quis cursus. Fusce vestibulum mollis leo vel tempus. Nulla facilisi. Proin et arcu nec justo eleifend convallis eget et risus. Nam pellentesque ante interdum purus rutrum, non molestie odio molestie. In diam neque, mattis sed ultrices vitae, convallis vel nulla. Integer dictum sit amet dolor quis ultricies. Cras sollicitudin nunc ex, vel molestie ipsum commodo sed. Integer pretium auctor velit vitae varius. Curabitur rhoncus iaculis est sit amet posuere. Praesent et sem id ex fermentum eleifend quis quis eros. Proin laoreet neque sed rutrum varius. Praesent eleifend luctus ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc et dolor nisl. Duis purus quam, mattis vitae hendrerit sed, efficitur sit amet lectus. Nullam vitae vehicula purus. Aenean eget velit eu diam volutpat porta. Etiam pellentesque in neque non pulvinar. Duis et scelerisque nisi, et fermentum est. Mauris in commodo ex. In ac tempor mi. Quisque rhoncus erat vel velit sagittis convallis. Aliquam condimentum ante et tortor venenatis molestie."
  }
] 
  //Getting the aritcle class
  const articles = document.querySelector('.articles');
  newsFeed.forEach(info=> {
    articles.appendChild(newsPanel(info.title, info.date, info.content))
  });
  
 function newsPanel(title, date, content) {
   //Create the Elements
   const article = document.createElement('div');
   const articleTitle = document.createElement('h2');
   const articleDate = document.createElement('p');
   const articleContent = document.createElement('p');
   const buttons = document.createElement('span')

   article.appendChild(articleTitle);
   article.appendChild(articleDate);
   article.appendChild(articleContent);
   article.appendChild(buttons);

   article.classList.add('article');
    articleTitle.textContent = title;
    articleDate.classList.add('date');
    articleDate.textContent = date
   buttons.classList.add('expandButton');
   
   articleContent.textContent = content
   buttons.textContent = 'expand'

   buttons.addEventListener('click', ()=> {
      console.log('Clicked', event.target);
      //articleContent.classList.toggle()
     article.classList.toggle('article-open')
   });
   return article;
 }
 