Vue.component('pagecomp', {
    props: ['item'],
    template:`<ul id="images">
    <li class="catalog">   
        <img src="images/Spaghetti_aglio,_olio_e_peperoncino_(16284859030).jpeg" alt="West Cliff">
        <div class="desc">{{item.desc}}</div>
        <div class="leg">{{item.leg}}</div>
        <button class="btn" type="button">Add to Cart</button>
    <li class="catalog">
        <img src="images/Jacques_Lameloise,_escabèche_d'écrevisses_sur_gaspacho_d'asperge_et_cresson.jpeg" alt="North Cliff">
        <div class="desc">Red Crab</div>
        <div class="leg">Fresh from Alaska</div>
        <button type="button" class="btn btn-lg">Add to Cart</button>
    <li class="catalog">
        <img src="images/Breakfast_at_Irving_Street_Kitchen.jpeg" alt="East Cliff">
        <div class="desc">Breakfast Special</div>
        <div class="leg">Good for the Soul</div>
        <button class="btn" type="button">Add to Cart</button>
    <li class="catalog">            
        <img src="images/Seafood_linguine.jpeg" alt="South Cliff">
        <div class="desc">Sea Shells mix</div>
        <div class="leg">For the shell Lovers</div>
        <button class="btn" type="button">Add to Cart</button>
    <li class="catalog">              
        <img src="images/Various_kebab.jpeg" alt="South Cliff">
        <div class="desc">Ultimate Kebab</div>
        <div class="leg">The best from middle east</div>
        <button class="btn" type="button">Add to Cart</button>
    <li class="catalog">              
        <img src="images/Chicken_steak_with_pepper_sauce.jpeg" alt="West Cliff">
        <div class="desc">Chicken Steak</div>
        <div class="leg">Grilled to perfection</div>
        <button class="btn" type="button">Add to Cart</button>
        <li class="catalog">
            <img src="images/Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise,_Pastis_Bistro,_Palo_Alto.jpeg" alt="North Cliff">
            <div class="desc">Filet Migno</div>
            <div class="leg">Juicy Steak served w/</div>
            <button class="btn" type="button">Add to Cart</button>
        <li class="catalog">                    
            <img src="images/Dishes_at_Bistro_C,_Hastings_Street,_Noosa_Heads,_Queensland_02.jpeg" alt="East Cliff">
            <div class="desc">Bistro Brunch</div>
            <div class="leg">A touch of Australia</div>
            <button class="btn" type="button">Add to Cart</button>
        <li class="catalog">                   
            <img src="images/2011-04-09_17.02.43,_Whispers_Cafe_and_Creperie,_Belmont,_CA_(5982715933).jpg" alt="South Cliff">
            <div class="desc">Califonia Crepe</div>
            <div class="leg">Stuffed with grilled shrimp</div>
            <button class="btn" type="button">Add to Cart</button>
        <li class="catalog">                    
            <img src="images/Hamburguesa_de_carne.jpeg" alt="South Cliff">
            <div class="desc">Top Burger</div>
            <div class="leg">The tallest hamburguer</div>
            <button class="btn" type="button">Add to Cart</button>
        <li class="catalog">                    
            <img src="images/Round_Table_chicken_&_garlic_pizza.jpeg" alt="South Cliff">
            <div class="desc">Chicken Garlic Pizza</div>
            <div class="leg">Our specialitty pizza</div>
            <button class="btn" type="button">Add to Cart</button>
        <li class="catalog">                       
            <img src="images/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_(27159057131).jpeg" alt="South Cliff">
            <div class="desc">Wok away healthy</div>
            <div class="leg">Healthy blend and vegies</div>
            <button class="btn" type="button">Add to Cart</button>
  </ul>
</div>`
  });
  let app = new Vue({
    el : '#vue',
    data: {
    ad: {
      desc: 'Pasta',
      leg: "Healthy Pasta"
    }
}
});