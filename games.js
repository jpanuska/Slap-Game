
var health = 100
var name = "Player Abuser"
var hits = 0

// P2 step Use Capital O on Options because it is a Constructor
var Options = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function () { }
}
//Step 3

var itemToUse = {
    shield: new Options("Shields", 0.3, "This is for protecting your body"),
    armor: new Options("Armor", 0.5, "This is for protection your torso"),
    helmet: new Options("Helmut", 0.8, "This is for protecting your head")
}

var player = {

    items: [items.shield]
    
          function addMods(totalOfModifiers){

        var modTotal = 0;
              
for (var i = 0; i < itemToUse.length; i++) {
    if currentItemToUse === itemToUse[i].name
        modTotal = modTotal + itemToUse[i, 2];
    health = heatlh + modTotal;
    {
        totalOfModifiers = modTotal;
      else
      
      
      
         
        //     var currentItem = ItemsForProtection.items.protector[0];

        //     if (current.instrument === instrument) {
        //         return currentMember.name + ' is in the band and plays ' + currentMember.instrument;

    }


}


player.itemToUse.push(shield),

    // }  

    function slap() {
        health = health - 1;
        hits = hits + 1;
        //   alert(health);
        update()

    }

function punch() {
    health = health - 5;
    hits = hits + 1;
    //   alert(health);
    update()
}
function kick() {
    health = health - 10;
    hits = hits + 1;
    //  alert(health);
    update()

}


function update() {

    document.getElementById("healthArea").innerText = "Health = " + health + "  Hits = " + hits + "  Name = " + name;

    if (health <= 0) {
        document.getElementById("healthArea").classList.add("dangerHeader")
    } else {
        document.getElementById("healthArea").classList.add("healthArea")
    }

}