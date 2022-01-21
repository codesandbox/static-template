
        var $ = prop => document.querySelector(prop);
        var fRand = num => Math.floor(Math.random() * num);
        var fR = (min, max) => min + Math.floor(Math.random() * (max - min));
        var Rand = (min, max) => min + Math.random() * (max - min);
        var randP = num => Math.floor(Math.random() * num) / 100;
        
        function say(str) {
            $("#log").innerHTML += str + "<br>";
            res = true;
        }
        
        function c_s(str, color) {
            return `<span style='color:${color}'>${str}</span>`;
        }
        
        function ind(arr, e) {
            return arr.indexOf(e);
        }
        
        function rem(arr, e) {
            arr.splice(arr.indexOf(e), 1);
        }
        
        function search(arr, e) {
            for (var i = 0; i < arr.length; i++) {
                if (e === arr[i]) {
                    return true;
        
                }
            }
        }
        
        function gramarr(arr) {
            var result = "";
            var reg = /a|e|i|o|u/i;
            for (var i = 0; i < arr.length; i++) {
                if (arr.length > 1) {
                    if (i < arr.length - 1) {
                        if (reg.test(arr[i].split('')[0])) {
                            result += "an " + arr[i] + ", ";
                        } else {
                            result += "a " + arr[i] + ", ";
                        }
                    } else {
                        if (reg.test(arr[i].split('')[0])) {
                            result += "and an " + arr[i];
                        } else {
                            result += "and a " + arr[i];
                        }
                    }
                } else {
                    if (reg.test(arr[i].split('')[0])) {
                        result += "an " + arr[i];
                    } else {
                        result += "a " + arr[i];
                    }
                }
            }
            return result;
        }
        
        function matchEl(arr, e) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].includes(e)) {
                    return arr[i];
                }
            }
        }
        
        function getEl(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        
        function random(_min, _max) {
            var min = _min;
            var max = _max;
            if (_min > _max) {
                min = _max;
                max = _min;
            }
            return min + Math.random() * (max - min);
        }
    


        function parseColors() {
            var txt = $("#log").innerHTML;
            var parsedTxt = txt
                //regexp parsing
                .replace(/[(]\w\w+[)]/g, (a) => c_s(a, "rgb(255,200,0)"))
                .replace(/\[\w.+\]/g, (a) => c_s(a, "rgb(0,100,200)"))
                .replace(/["](\w|\s)+["]/g, (a) => c_s(a, "rgb(0,175,0)"))
                .replace(/…/g, c_s("…", "rgb(0,0,0)"))
                .replace(/[≤]/ig, (a) => "<div style='text-align:center'>")
                .replace(/[≥]/ig, (a) => "</div>")
                .replace(/\n/g, "<br>")
                .replace(/\ᚭ-/g, (a) => `<span style="color:rgb(150,150,150)">` + a)
                .replace(/-\ᚮ/g, (a) => `${a}</span>`)
                
                
                //very light blue
                .replace(/Armor Points|Damage Bonus|Attack Speed Bonus|Bonus Critical Chance|Bonus Block Chance|Bonus Dodge Chance|Health Regeneration Bonus|Slot|Replenishes|Fills\(Bonus Health\)|crystal/g, (a) => c_s(a, "rgb(150, 200, 200)"))
                
                //light red
                .replace(/mist of blood|gash|\Wcut\W|chop|stab|cough up|health|squirting/ig, (a) => c_s(a, "rgb(255, 100, 100)"))
                //dark red
                .replace(/blood|gore|guts|gut|pain| red|splattering|splatter/ig, (a) => c_s(a, "rgb(200,0,0)"))
                
                //light brown/coffee bone color
                .replace(/bones|bone|ribcage|rib|skull|exoskeleton|skeleton|crunch/ig, (a) => c_s(a, "rgb(205,205,150)"))
                
                //multi-colored words
                .replace(/bandits/ig, c_s("ba", "rgb(150,50,0)") + c_s("n", "rgb(200,0,0)") + c_s("d", "rgb(200,150,0)") + c_s("it", "rgb(150,100,0)") + c_s("s", "rgb(125,75,0)"))
                .replace(/bandit/ig, c_s("ba", "rgb(150,50,0)") + c_s("n", "rgb(200,0,0)") + c_s("d", "rgb(200,150,0)") + c_s("it", "rgb(150,100,0)"))
                .replace(/bandit's/ig, c_s("ba", "rgb(150,50,0)") + c_s("n", "rgb(200,0,0)") + c_s("d", "rgb(200,150,0)") + c_s("it's", "rgb(150,100,0)"))
                
                .replace(/knives|knife|weapon|crowbar|shiv|scales|scale|dagger|gunfire|shield|robotic|robot|carbon/ig, (a) => c_s(a, "rgb(150,150,150)"))
                
                .replace(/metal|sword|steel|fiber|armor/ig, (a) => {
                    return c_s(a[0], "rgb(150,150,150)") +
                        c_s(a[1], "rgb(200,200,200)") +
                        c_s(a[2], "rgb(255,255,255)") +
                        c_s(a[3], "rgb(200,200,200)") +
                        c_s(a[4], "rgb(150,150,150)")
                })
                
                //light blue
                .replace(/water|elixir|\Wwar\W/ig, (a) => c_s(a, "rgb(0,150,200)"))
                
                //lighter blue
                .replace(/xorox|cytotron|aliens|alien/ig, (a) => c_s(a, "rgb(0,200,255)"))
                
                //white with a blue text glow
                .replace(/electrocute|electricity|electric|glowing|\Wglow\W/ig, (a) => `<span style="color:white;text-shadow: 0 0 2px rgb(0,200,255);">${a}</span>`)
                
                //almost white, yellowish light
                .replace(/photon|lightning|\Wlight\W|consiousness/ig, (a) => `<span style="color:white;text-shadow: 0 0 2px rgb(255,255,200);">${a}</span>`)
                
                //human flesh color
                .replace(/kicks|punches|kick|punch|stomach|wrist|face|nose|head|flesh|body|bodies|bread/ig, (a) => c_s(a, "rgb(194, 167, 124)"))
                
                //venom green
                .replace(/creeps|creep|entity's|entity|grimace|battle-hardened/ig, (a) => c_s(a, "rgb(200,255,200)"))
                
                //white
                .replace(/smog|bottle|dodges|dodge|slams|slam|throwing|throw|survivor|survive|artifacts|artifact/ig, (a) => c_s(a,"rgb(255,255,255)"))
                //dark grey
                .replace(/lurking|lurk/ig, (a) => c_s(a, "rgb(75,75,75)"))
            $("#log").innerHTML = parsedTxt;
        }
    

        //the items are literally all objects.  There might be a couple thousand lines of code just for objects :O
        var Items = {
            /****************************************
             * Food & Drink Items
             ****************************************/
            "moldy piece of bread": {
                d: "The moldy piece of bread is dry, stale, and covered with splotches of mold.  It won't taste good, but it'll sustain you for a bit.",
                //how much health it heals
                healthG: 15,
                //how much hunger it satisfies
                hungerG: 25,
                //how much thirst it satisfies
                thirstG: -5,
                //item type
                type: "food",
            },
            "water bottle": {
                d: "The plastic water bottle is about three-quarters full.  The water in it isn't very clean, but it will keep you alive.",
                //how much health it heals
                healthG: 5,
                //how much hunger it satisfies
                hungerG: 2,
                //how much thirst it satisfies
                thirstG: 25,
                //item type
                type: "drink",
            },
            "xor candy": {
                d: "What the humans call Xor Candies are actually the aliens' source of food.  It is like glass that glows with a blue light.  It is edible and tastes uniquely like nothing on earth.",
                //how much health it heals
                healthG: 25,
                //how much hunger it satisfies
                hungerG: 22,
                //how much thirst it satisfies
                thirstG: 25,
                //item type
                type: "food",
            },
            
            /****************************************
             * Equipment (armor & weapons)
             ****************************************/
        
            //daggers
            "photon dagger": {
                apts: 0,
                dpts: 10,
                asp: 20,
                chance: [0.05, 0, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The photon Dagger is engraved with markings in which flow massive amounts of photons.",
                attacks: ["stab", "slash"],
            },
            "antimatter dagger": {
                apts: 0,
                dpts: 10,
                asp: 100,
                chance: [0.03, 0, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The antimatter dagger weighs next to nothing.  It's blade, made from pure antimatter cuts through anything including Light, Air, and Aliens.",
                attacks: ["stab", "slash", "gash"],
            },
            "arcanium dagger": {
                apts: 0,
                dpts: 20,
                asp: 0,
                chance: [0.03, 0.1, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The arcanium dagger has the ability to enhance your attack power and gives you extra dexterity to dodge attacks.",
                attacks: ["stab", "slash"],
            },
            "slit dagger": {
                apts: 0,
                dpts: 5,
                asp: 15,
                chance: [0.025, 0, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The steel Light Intensification Titancrush (SLIT) dagger is decorated with futuristic engravements, glowing with powerfully bright beams of blue laser.",
                attacks: ["stab", "slash"],
            },
            "bloodshed dagger": {
                apts: 0,
                dpts: 25,
                asp: 10,
                chance: [0.03, 0, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The BLOODSHED dagger is made of a combination of titanium, arcanium, and antimatter.",
                attacks: ["stab", "slash", "gash"],
            },
            "soulsmiter shortsword": {
                apts: 0,
                dpts: 20,
                asp: 10,
                chance: [0.03, 0, 0.075, 0],
                slot: "weapon",
                type: "eq",
                desc: "the SoulSmiter Shortsword is Titanium in the structure of a diamond -- the most unbreakable element in the universe.",
                attacks: ["stab", "slash", "gash"],
            },
        
            //swords
            "steel sword": {
                apts: 0,
                dpts: 10,
                asp: -1,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0, 0.05, 0],
                slot: "weapon",
                type: "eq",
                desc: "The shiny steel sword is beautifully decorated with futuristic markings and in it flow blue lines of power.",
                attacks: ["slash", "stab", "hiltslam"],
            },
            "steel katana": {
                apts: 0,
                dpts: 10,
                asp: 7,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0, 0.025, 0],
                slot: "weapon",
                type: "eq",
                desc: "The steel Katana is a durable, lightweight weapon capable of piercing almost anything.",
                attacks: ["slash", "stab"],
            },
            "steel machete": {
                apts: 0,
                dpts: 20,
                asp: -5,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0, 0.025, 0],
                slot: "weapon",
                type: "eq",
                desc: "The steel Machete is a heavyweight weapon, but its weight adds on to momentum, enhancing its power.",
                attacks: ["slash", "gash", "chop"],
            },
            "photon sword": {
                apts: 0,
                dpts: 15,
                asp: 5,
                chance: [0.025, 0, 0.05, 0],
                slot: "weapon",
                type: "eq",
                desc: "The photon sword is a very lightweight titanium sword outlined with a layer of powerful cutting laser.",
                attacks: ["stab", "slash", "hiltslam", "gash"],
            },
            "photon katana": {
                apts: 0,
                dpts: 15,
                asp: 10,
                chance: [0.025, 0, 0.075, 0],
                slot: "weapon",
                type: "eq",
                desc: "The photon Katana is a super lightweight titanium weapon with powerful cutting abilities.",
                attacks: ["stab", "slash", "hiltslam", "gash"],
            },
            "photon machete": {
                apts: 0,
                dpts: 30,
                asp: -5,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0, 0.075, 0],
                slot: "weapon",
                type: "eq",
                desc: "The photon Machete is heavy weapon whose power is to be reckoned with.",
                attacks: ["slash", "gash", "chop"],
            },
            "antimatter sword": {
                apts: 0,
                dpts: 20,
                asp: 10,
                chance: [0.05, 0, -0.05, -1],
                slot: "weapon",
                type: "eq",
                desc: "The antimatter sword is a super lightweight weapon that is fast and weighs next to nothing.  The antimatter does emit radiation which drains your Health Regeneration slightly.",
                attacks: ["stab", "slash", "hiltslam", "gash"],
            },
            "antimatter katana": {
                apts: 0,
                dpts: 20,
                asp: 20,
                chance: [0.05, 0, -0.075, -1],
                slot: "weapon",
                type: "eq",
                desc: "The antimatter Katana is one of the lightest weapons ever.  It has super powerful cutting abilities, but emits dangerous radiation which drains your Health Regeneration slightly.",
                attacks: ["stab", "slash", "hiltslam", "gash"],
            },
            "antimatter machete": {
                apts: 0,
                dpts: 40,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, -0.075, -2],
                slot: "weapon",
                type: "eq",
                desc: "The antimatter Machete weighs nothing and is super powerful.  The large antimatter blade emits dangerous radiation which drains your Health Regeneration slightly.",
                attacks: ["slash", "gash"],
            },
            "arcanium sword": {
                apts: 0,
                dpts: 15,
                asp: 0,
                chance: [0.025, 0.05, 0.05, 1],
                slot: "weapon",
                type: "eq",
                desc: "The arcanium Sword is slightly heavier than a photon Sword but offers higher dexterity and health regeneration.",
                attacks: ["stab", "slash", "hiltslam", "gash"],
            },
            "arcanium katana": {
                apts: 0,
                dpts: 15,
                asp: 5,
                chance: [0.025, 0.05, 0.075, 1.5],
                slot: "weapon",
                type: "eq",
                desc: "The arcanium Katana is a lightweight weapon with powerful abilities which offers higher dexterity and health regeneration.",
                attacks: ["stab", "slash", "hiltslam", "gash"],
            },
            "arcanium machete": {
                apts: 0,
                dpts: 30,
                asp: -10,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0.05, 0.075, 2],
                slot: "weapon",
                type: "eq",
                desc: "The arcanium Machete weighs a lot, deals a lof of damage, and offers higher dexterity and health regeneration.",
                attacks: ["slash", "gash", "chop"],
            },
            "golden cytotron machete": {
                apts: 0,
                dpts: 50,
                asp: -100,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0.05, 0.075],
                slot: "weapon",
                type: "eq",
                desc: "The cytotron golden machete is an extremely heavy weapon, but its power is more than any other weapon.",
                attacks: ["slash", "gash", "chop"],
            },
        
            //axes
            "steel battle axe": {
                apts: 0,
                dpts: 20,
                asp: -10,
                //crit, dodge, block, healthRegen
                chance: [0.1, 0, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The steel axe is engraved with technological runes that glow with green light.  It is heavy, but its weight enhances its power.",
                attacks: ["chop", "gash", "knockout"],
            },
            "photon battle axe": {
                apts: 0,
                dpts: 20,
                asp: -5,
                //crit, dodge, block, healthRegen
                chance: [0.1, 0, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The photon axe glows with a green light and weighs very light.  It isn't super powerful, but it is a durable weapon.",
                attacks: ["chop", "gash", "knockout", "axe throw"],
            },
            "antimatter battle axe": {
                apts: 0,
                dpts: 25,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0.1, 0, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The antimatter axe weighs next to nothing and cuts through virtually anything.  Its power is very high and is to be reckoned with.",
                attacks: ["chop", "gash", "knockout", " axe throw"],
            },
        
            //sticks/staffs
            "steel staff": {
                apts: 0,
                dpts: 10,
                asp: 100,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.05, 0],
                slot: "weapon",
                type: "eq",
                desc: "The steel staff is engraved with red power lines that transfer energy throughout the weapon.  It is a light, deadly weapon.",
                attacks: ["stab", "strike"],
            },
            "stunshock staff": {
                apts: 0,
                dpts: 10,
                asp: 50,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0, 0.05, 0],
                slot: "weapon",
                type: "eq",
                desc: "The stunshock staff has a tazor on each end of it",
                attacks: ["stab", "strike", "electrocute"],
            },
            "titancrush staff": {
                apts: 0,
                dpts: 50,
                asp: -100,
                //crit, dodge, block, healthRegen
                chance: [0.05, 0, 0.05, 0],
                slot: "weapon",
                type: "eq",
                desc: "The titancrush staff is made of pure Osmium which is the heaviest metal in the universe.  It is a pain to lift, but its power is amazing.",
                attacks: ["stab", "strike"],
            },
        
            //technological devices
            "bolt tazor": {
                apts: 0,
                dpts: 15,
                asp: 200,
                //crit, dodge, block, healthRegen
                chance: [0, 0.05, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The handheld BOLT tazor is lightweight, fast, and discharges tons of voltage into its target.",
                attacks: ["electrocute"],
            },
            "short range phaser": {
                apts: 0,
                dpts: 25,
                asp: -50,
                //crit, dodge, block, healthRegen
                chance: [0, 0.05, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The handheld phaser can hit enemies at a short range.  It also has a small 1-foot-long bayonette-type knife on it.",
                attacks: ["shoot", "stab"],
            },
            "25 kilowatt laser beam blaster": {
                apts: 0,
                dpts: 15,
                asp: -10,
                //crit, dodge, block, healthRegen
                chance: [0, 0.05, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The kilowatt laser blaster has a long barrel, about 1.5ft long, and unlimited ammo.  It is powered by compressed photons and has a small knife on its hilt.",
                attacks: ["shoot", "stab", "gash"],
            },
        
        
            //other weapons
            "magnorok throwing hammer": {
                apts: 0,
                dpts: 35,
                asp: -50,
                //crit, dodge, block, healthRegen
                chance: [0, 0.05, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The magnorok throwing hammer is a side weapon used by cytotron sentries.  It is a very powerful artifact of war.",
                attacks: ["throw", "strike", "pound"],
            },
            "baseball bat": {
                apts: 0,
                dpts: 5,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0.025, 0, 0.025, 0],
                slot: "weapon",
                type: "eq",
                desc: "The baseball bat is made of old, decaying wood.  Not a very good weapon, but it's enough.",
                attacks: ["strike", "pound"],
            },
            "shiv": {
                apts: 0,
                dpts: 5,
                asp: 10,
                //crit, dodge, block, healthRegen
                chance: [0.025, 0.05, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The shiv is made of what seems two sheets of metal hammered together.",
                attacks: ["stab", "slash"],
            },
            "crowbar": {
                apts: 0,
                dpts: 10,
                asp: -10,
                //crit, dodge, block, healthRegen
                chance: [0.05, -0.025, 0, 0],
                slot: "weapon",
                type: "eq",
                desc: "The shiv is made of what seems two sheets of metal hammered together.",
                attacks: ["strike", "stab", "pound"],
            },
            "proton gauntlets": {
                apts: 5,
                dpts: 10,
                asp: 150,
                //crit, dodge, block, healthRegen
                chance: [0, 0.15, 0, 5],
                slot: "weapon",
                type: "eq",
                desc: "The proton gauntlets are an amazingly light, fast, and powerful weapon.  They come with electric fist tazors that zap your opponent on punch.",
                attacks: ["punch", "electrocute"],
            },
        
            //armor
            "guardian helmet": {
                apts: 5,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0],
                slot: "helmet",
                type: "eq",
                desc: "The guardian helmet is made of steel and microlattice and engraved with glowing lines of power.",
                attacks: ["punch"],
            },
            "cytotron helmet": {
                apts: 10,
                dpts: 0,
                asp: 5,
                //crit, dodge, block, healthRegen
                chance: [0, 0.05, 0, 0],
                slot: "helmet",
                type: "eq",
                desc: "The bronze-like cytotron helmet is engraved with glowing technological runes.",
                attacks: ["punch"],
            },
            "refractor helmet": {
                apts: 15,
                dpts: 0,
                asp: 10,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0.05],
                slot: "helmet",
                type: "eq",
                desc: "The refractor helmet is a very strong piece of armor that protects with attack-deflecting nanotechnology.",
                attacks: ["punch"],
            },
            "checkered cap": {
                apts: 2,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0],
                slot: "helmet",
                type: "eq",
                desc: "The checkered cap is made of fabric.  Not a very good equipment item.",
                attacks: ["punch"],
            },
        
            "aeroguard armor": {
                apts: 20,
                dpts: 0,
                asp: 10,
                //crit, dodge, block, healthRegen
                chance: [0, 0.05, 0, 0],
                slot: "armor",
                type: "eq",
                desc: "The aeroguard armor is a self-morphing armor powered by nanotechnology.  It can predict where hits will land and strengthen certain areas.  It also uses air pressure and resistance to shield from blows.",
                attacks: ["punch"],
            },
            "cytotron armor": {
                apts: 25,
                dpts: 0,
                asp: 10,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0],
                slot: "armor",
                type: "eq",
                desc: "The cytotron armor is made of a bronze-like substance engraved with orange firey runes.  You can't really understand what they say, but you can get \"defense\" out of what's written.",
                attacks: ["punch"],
            },
            "refractor armor": {
                apts: 35,
                dpts: 0,
                asp: 20,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0.05],
                slot: "armor",
                type: "eq",
                desc: "The refractor armor is made of a strong silver alloy and is engraved with purple lines of power in a geometric arrangement.",
                attacks: ["punch"],
            },
            "t-shirt": {
                apts: 3,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0],
                slot: "armor",
                type: "eq",
                desc: "the t-shirt is, well was white and is now stained with many blotches of dirty stuff.",
                attacks: ["punch"],
            },
            "alien exoskeleton armor": {
                apts: 10,
                dpts: 0,
                asp: -5,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0.5],
                slot: "armor",
                type: "eq",
                desc: "The alien exoskeleton armor is a very advanced nanotechnology armor.  It can morph to fit a human, an alien, or an animal or almost any size.  It's made of a carbon-fiber-like substance with a metalic sheen.",
                attacks: ["punch"],
            },
        
            "aeroguard boots": {
                apts: 10,
                dpts: 0,
                asp: 10,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.025, 0],
                slot: "shoes",
                type: "eq",
                desc: "The lightweight cytotron boots provide lots of dexterity and protect your feet from deadly attacks.",
                attacks: ["punch"],
            },
            "cytotron boots": {
                apts: 12,
                dpts: 0,
                asp: -15,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.05, 0],
                slot: "shoes",
                type: "eq",
                desc: "The heavyweight cytotron boots limit your speed by a large amount but offer lots of powerful protection.  Best of all, you can sometimes block attacks with your feet.",
                attacks: ["punch"],
            },
            "refractor boots": {
                apts: 15,
                dpts: 5,
                asp: -20,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.075, 0.05],
                slot: "shoes",
                type: "eq",
                desc: "The refractor boots are heavy, but allow you to block attacks with your feet and kick with powerful force.",
                attacks: ["punch"],
            },
            "pair of sneakers": {
                apts: 3,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0],
                slot: "shoes",
                type: "eq",
                desc: "The pair of rubber sneakers is, well, not very good as armor, but enough to prevent your feet from getting sore.",
                attacks: ["punch"],
            },
        
            "pair of jeans": {
                apts: 3,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0],
                slot: "pants",
                type: "eq",
                desc: "The blue jeans have holes torn in them.  Nothing special.",
                attacks: ["punch"],
            },
        
            "restoration accelerator": {
                apts: 0,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 5],
                slot: "accelerator",
                type: "eq",
                desc: "The restoration accelerator is a ring with a pulsing bluish-purple gemstone.  It is a healing device that injects life through your veins.",
                attacks: ["punch"],
            },
            "reaction accelerator": {
                apts: 0,
                dpts: 0,
                asp: 50,
                //crit, dodge, block, healthRegen
                chance: [0, 0.1, 0.1, 0],
                slot: "accelerator",
                type: "eq",
                desc: "The flashflare accelerator is an accelerator that makes your movement speed and reactions much faster.  It is a glowing blue gemstone ring.",
                attacks: ["punch"],
            },
            "iris accelerator": {
                apts: 0,
                dpts: 0,
                asp: 25,
                //crit, dodge, block, healthRegen
                chance: [0.15, 0, 0.05, 0],
                slot: "accelerator",
                type: "eq",
                desc: "The iris accelerator enhances your vision and your chance to hit enemies and score critical hits.  It is a golden ring with a green gemstone on it.",
                attacks: ["punch"],
            },
            "leviathan accelerator": {
                apts: 25,
                dpts: 25,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0, 0],
                slot: "accelerator",
                type: "eq",
                desc: "The leviathan accelerator is a glowing orange gemstone on a ring that enhances your damage and armor percentage.",
                attacks: ["punch"],
            },
            "deflection accelerator": {
                apts: 0,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.25, 1],
                slot: "accelerator",
                type: "eq",
                desc: "The deflection accelerator is a ring with an infinitely black gemstone that increases block chance and a bit of health regen.",
                attacks: ["punch"],
            },
            "battlecry accelerator": {
                apts: 15,
                dpts: 15,
                asp: 20,
                //crit, dodge, block, healthRegen
                chance: [0.1, 0.1, 0.1, 2],
                slot: "accelerator",
                type: "eq",
                desc: "The battlecry accelerator is a bright white gemstone, pulsing with a blinding light.  It increases a bit of everything.",
                attacks: ["punch"],
            },
            "carbonshield accelerator": {
                apts: 15,
                dpts: 5,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.05, 1],
                slot: "accelerator",
                type: "eq",
                desc: "The carbonshield accelerator is a black gemstone glowing with a purple light.  It turns the outer layer of your skin to solid carbon at almost the strength of a diamond.",
                attacks: ["punch"],
            },
        
            //shields
            "cytotron shield": {
                apts: 5,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.15, 0],
                slot: "shield",
                type: "eq",
                desc: "The Cytotron shield is made of a polished bronze-like alloy. engraved with technological runes.",
                attacks: ["punch"],
            },
            "morphatory shield": {
                apts: 10,
                dpts: 0,
                asp: 0,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.15, 0],
                slot: "shield",
                type: "eq",
                desc: "The morphatory shield is made of aluminum in the same structure of a diamond.  It is super light and just as hard as the clear gemstones.",
                attacks: ["punch"],
            },
            "stasis particle shield": {
                apts: 15,
                dpts: 0,
                asp: 20,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.15, 0],
                slot: "shield",
                type: "eq",
                desc: "The stasis particle shield can absorb hundreds of thousands of tons of force and shatter it by using light and sound waves.  Better yet, it's made of the lightest metal in the world - Microlattice.",
                attacks: ["punch"],
            },
            "alien exoskeleton shield": {
                apts: 10,
                dpts: 0,
                asp: 10,
                //crit, dodge, block, healthRegen
                chance: [0, 0, 0.15, 0],
                slot: "shield",
                type: "eq",
                desc: "The alien exoskeleton shield is made of some type of carbonfiber-like material.  It's light, but has a metalic feel to it.",
                attacks: ["punch"],
            },
            /****************************************
             * One-time use items (grenades, etc)
             ****************************************/
            "grenade": {
                desc: "The grenade is a lumpy ellipsoid full of explosives.",
                use: "You remove the lock ring from the grenade and throw it at your opponent.  The grenade blasts open in a blast of flame, scorching and seriously wounding your opponent.",
                damage: 75,
                heal: 0,
                type: "one-use",
            },
            "throwing knives (5)": {
                desc: "You hold five silver throwing knives in your hand.  They can deal lots of damage when used together.",
                use: "You hold three knives in one hand and three in the other.  When your opponent gets close enough, five knifes slash them, giving them some nasty wounds.",
                damage: 25,
                heal: 0,
                type: "one-use",
            },
            "health shot": {
                desc: "The health shot syringe contains emergency oxygen, energy, and compressed atoms that can heal your body almost instantly.",
                use: "You inject the syringe into yourself and a sharp pain pierces through your body.  It goes away after a split second and you feel much better.",
                damage: 0,
                heal: 50,
                type: "one-use",
            },
            "neutron pulsar cannon": {
                desc: "The neutron pulsar cannon is a one-shot hand cannon capable of doing tons of destruction.",
                use: "You fire off the neutron pulsar cannon and the fast-moving bulvar smashes into your opponent at the speed of light!",
                damage: 100,
                heal: 0,
                type: "one-use",
            },
            "nuclear Fusion sniper": {
                desc: "The nuclear fusion sniper is a one-shot sniper tool that shoots at the speed of light.",
                use: "A flash of blinding light flashes and your opponent is on the floor, covered in blood.",
                damage: 200,
                heal: 0,
                type: "one-use",
            },
            "acid grenade": {
                desc: "The acid grenade will hook onto its target and inject powerful acid into their body.",
                use: "You throw the acid grenade at your opponent.  Immediately, it locks onto their skin on contact and injects a very powerful acid into them.  They writhe in pain and vomit up large amounts of blood as the acid destroys their body.",
                damage: 75,
                heal: 0,
                type: "one-use",
            },
            "phosphorus grenade": {
                desc: "The super flammable phosphorus grenade is like a throwing knife with a large spherical core.",
                use: "You throw the fire grenade at your opponent and its blade flies and roots into their flesh.  It then blasts out in a firey explosion, roasting them and slightly burning you.",
                damage: 75,
                heal: -10,
                type: "one-use",
            },
        
            /****************************************
             * Misc
             ****************************************/
            "silver coin": {
                d: "The silver coin is very shiny and has the picture of a globe on it.  International currency.",
                value: 10,
                type: "misc"
            },
            "xorox alien scale": {
                d: "This tough element comes from a xorox alien.  You can't really do a lot with it, but it could come in useful.",
                value: 5,
                type: "misc"
            },
            "steel xorox scale": {
                d: "This steel scale came from a xorox alien.  It's not much, but it could turn in useful.",
                value: 7,
                type: "misc"
            },
            "cytotron plate": {
                d: "This metal plate came from a cytotron trooper's armor.  It looks very smooth but slightly satisfying.  Alien design.",
                value: 7,
                type: "misc"
            },
            "xorox crystal": {
                d: "The xorox crystal is a beautiful transparent blue one about one ounce in weight.  It glows with a faint blue light and seems to be an energy accelerator.  You don't know how to use it.",
                value: 10,
                type: "misc"
            },
            "human femur": {
                d: "The human femur has some rotting flesh on it and smells detestable.  This was probably for the study of humans back at the aliens' base.",
                value: 1,
                type: "misc"
            },
            "severed hand": {
                d: "Ew, a severed hand.  The aliens were probably trying to study humans.",
                value: 1,
                type: "misc"
            },
            "twig": {
                d: "The brown wooden twig is slightly cracked and all the leaves on it are dead.",
                value: 1,
                type: "misc"
            },
            
            /****************************************
             * Useable Items
             ****************************************/
            "bandage": {
                type: "useable",
                d: "The bandage is a long strip of cloth for bandaging up wounds.  Type 'use bandage' to heal yourself.",
                use: function(){
                    if(player.health < player.maxHealth-10){
                        player.health += 10;
                    } else {
                        player.health = player.maxHealth;
                    }
                },
            }
        };
    

        /*
        This is what most of the DreamForger Engine was made of.  I developed the engine on my local server and brought it here.
        
        The DreamForger engine was made before primavera as mentioned above, but not the story, items, etc.
        
        */

        var past = ">";
        var npcs = [];
        var res = false;
        var rooms = [];
        var creatures = [];
        var objects = [];
        var humans = [];
        var spawnPoints = [1, 1];
        var myInt;
        var population = 100;
        
        var words = {
            "north": ["north", "n", "go north", "go n"],
            "south": ["south", "s", "go south", "go s"],
            "east": ["east", "e", "go east", "go e"],
            "west": ["west", "w", "go west", "go w"],
            "fight": ["fight", "attack", "kill", "provoke", "tease", "mock"],
            "look": ["look", "examine", "see", "study", "read"],
            "inv": ["inv", "inventory", "i"],
            "eq": ["equipment", "eq"],
            "craft": ["craft", "make", "create", "invent", "construct"],
            "buy": ["buy", "purchase"],
            "sell": ["sell", "donate"],
            "take": ["take", "loot", "pick up"],
            "drop": ["drop", "throw", "toss", "abandon"],
            "give": ["give", "offer"],
            "talk": ["say", "shout", "scream"],
            "communicate": ["chat", "talk", "communicate", "ask"],
            "open": ["open"],
            "wear": ["wear", "equip", "put on"],
            "remove": ["remove", "unequip", "take off"],
            "eat": ["eat", "chew", "gulp"],
            "drink": ["drink", "swallow"],
            "flee": ["run", "flee", "escape"],
            "clear": ["clear", "empty", "blank", "erase"],
            "help": ["help", "guide"],
            "all": ["all", "everything"],
            "use": ["use", "make use of", "interact"],
            "quests": ["quests", "jobs", "tasks", "work"],
            "scan": ["scan","survey","gaze"],
            "list": ["list","items","stock"]
        };
        var phrasesNotAllowed = ["Huh?", "You can't do that.", "That's not a valid command.  Please try again.", "What?", "I don't know what you are trying to accomplish.", "That command doesn't do anything."];
        
        var WPS = {
            "sword": ["sword", "saber", "blade", "katana", "scimitar"],
            "axe": ["axe", "cleaver", "tomahawk", "battleaxe"],
            "spear": ["spear"],
            "knife": ["knife", "dagger"],
            "club": ["club", "mace", "shillelagh"],
            "staff": ["staff", "stick", "cane", "stick", 'bar']
        };
        var AMR = {
            "helmet": ["headgear", "helmet", "cap"],
            "armor": ["armor", "jacket", "coat", "chestplate", "breastplate"],
            "shield": ["shield", "buckler"],
            "ring": ["ring", "accelerator", "finger ring"],
            "glove": ["glove", "gauntlet"],
            "belt": ["belt", "girdle", "waistband", "sash"],
            "armplate": ["armplate", "armlet"],
            "shoulderguard": ["shoulderguard"],
            "leggings": ["pants", "trousers", "leggings", "greaves"],
            "legplate": ["legplate", "shinguard"],
            "shoe": ["boot", "shoe", "sneaker"],
            "necklace": ["accelerator", "necklace", "chain", "pendant", "locket"],
            "bracelet": ["bracelet", "accelerator", "band", "bangle"]
        
        };
        var wtps = Object.keys(WPS);
        var atps = Object.keys(AMR);
        var canvas = $("canvas");
        var ctx = canvas.getContext("2d");
        
        /***********************
         * 
         * @ > dead end (alley)
         * - & | > alley sections
         * g > scorched grass
         * G > garage
         * h > rundown house
         * H > house (empty)
         * = & " > roads
         * + & # > cross intersections (alley & road)
         * w > polluted water
         * W > water spring
         * r > rundown restaurant
         * B > battlefield 
         * b > building (empty)
         * : > turn
         * 
         ***********************/
        
        var globalMap = [
            '                                                                                  ',
            ' @-|-:                                                          AAAAAAAAA         ',
            '   gG"                        ^^^^^^^^^^^^^                     AaaaaaapA         ',
            '   ghT====#====T=TT=gggdddddgd^BBBBBBBBBBBBtaaa                 AaaaaaaaA         ',
            '   gg"    " ggg" "" ggddHhgdgg^BBBBBBBBBBBB   aaaaaaaaaaaa      A©AAAAA©A         ',
            ' @--|"   w" gr=T "" gddgwWH==:^BBBBBBBBBBBBtaaa   a      a AAAAA f     f AAAAAA   ',
            '   gG"  ww" ggg" "" gggwwhwgg"^BBBBBBBBBBBB   aaaaaaaaaaaa      ffffffff       A  ',
            '   gHT====T ggg" "" gggHhHddd"^BBBBBBBBBBBBtaaa   a      ©fffffffffffffffffffff A ',
            '   gg"  ww" gb=T "" ggddddgdd"^BBBBBBBBBBBB   aaaaaaaaaA f fffffffffffffffffffff A',
            ' @|--T   w" ggg" ":==========T^BBBBBBBBBBBBtaaa   a    Aff fffffffffffffffffffff A',
            '   gG"    " ggg" :======T====T^BBBBBBBBBBBB   aaaaaaaaaA f fffffffffffffffffffff A',
            '   gH"====T gb=T ggggggg"gggg"^BBBBBBBBBBBBtaaa   a      ©fffffffffffffffffffff A ',
            '   gg"  ww" ggg" g%%g$$$$$$$g"^BBBBBBBBBBBB   aaaaaaaaaaaa fffffffffffffff     A  ',
            ' @-|-T  ww" ggg" g%%$$$$$$$$g"^BBBBBBBBBBBBtaaa   a      a AAAAA     f    AAAAA   ',
            '   gG"   w" gr=T g%%g$$$$$$$g"^BBBBBBBBBBBB   aaaaaaaaaaaa      AAAAA©AAAA        ',
            '   gh"====: ggg" g$ggggg$gggg"^BBBBBBBBBBBBtaaa                      f             ',
            '   ggww   gg   " g!!!!g$$$g"  ^^^^^^^^^^^^^      fffffff©AAAAAAAAAAA f AAAAAAAAAAA ',
            ' @--|T    gG   " g!!!!$$$$g"   $$$$$$$$^    BBB  f       A           f ©         A ',
            '         gH===T" g!!!!g$$$gT===!!!!$$$$^ BBBBBB  f  AAA  A fffffffff f fffffffff A ',
            ' @--==T   gggg " gggggggggg"   !!!!$$$$^ BBBBBB  f  AfA  A ff        f        ff A ',
            ' bbbbg"        T===========T   !!!!$$$$^ BBBBBB  f  A©A  A fffffffff f fffffffff A ',
            ' @--==T   gg   "ghhHhHHHGGg"   $$$$$$$$^     BB  f   f   A ff        f        ff A ',
            ' bbbbg"   gG   "ggggh"hgggg"   ^^^^"^^^^ ^^^ BB  f   f   A fffffffff f fffffffff A ',
            ' @--==T   gh===#=====T=T===T=="    "    "ggg^BB  f   f   A ff        f        ff A ',
            ' bbbbg"   gggg "       "bbbb  :====#====Tggg^BB  f   f   A fffffffff f fffffffff A ',
            ' @--==T        "  g"bg T-|-@      ""    "ggg^BB  f   f   A ff        f        ff A ',
            ' bbbbg"        "  g"rg "bbbb      ""     ^^^ BB  f   f   A fffff     f     fffff A ',
            ' @--==#========:  g"rg T|-|@      ""         BB  f   f   AA  fffffffffffffffff  AA ',
            '      "           g"bg "bbbb      ""     BBBBBB  f   f    AAA  fffffffffffff  AAA ',
            '      "           g"rg T--|@      ""     BBBBBB  f   f      AAA   fffffff   AAA   ',
            '      "       :====T===:bbbb      ""     BBBBBB  f   f        AA           AA     ',
            '      "       "                   ""     BBBBBB  f   f         AAAAAAAAAAAAA      ',
            '      H       H  =================::     BBBBB  A©A  f                            ',
            '                                         BBBBB  Af©fffiiiiiiiiiiiiiiiiiiiiiiiie   ',
            '                                                AAA                               ',
            '                                                                                  ',
        
        ];
        var player = {
            x: spawnPoints[0],
            y: spawnPoints[1],
            health: 100,
            maxHealth: 100,
            bonusHealth: 0,
            xp: 0,
            level: 1,
            money: 0,
            inv: [],
            eq: ["pair of jeans", "t-shirt", "checkered cap", "pair of sneakers","baseball bat","leviathan accelerator","iris accelerator","restoration accelerator","reaction accelerator","carbonshield accelerator","deflection accelerator"],
            attarr: ["punch", "kick"],
            attacks: [],
            //maximum stuff you can wear
            wearLimit: {
                //one helmet
                "helmet": 0,
                //one suit of armor
                "armor": 0,
                //one shield
                "shield": 1,
                //one weapon
                "weapon": 1,
                //one pair of pants
                "pants": 0,
                //two boots
                "shoes": 0,
                //accelerators
                "accelerator": 6,
            },
            fighting: false,
            //fighting stats
            minDamage: 1,
            maxDamage: 5,
            damageBonus: 0,
            //rate (milliseconds) for when you attack
            attackRate: 3000,
            bAttack: 0,
            //special stuffses
            dodgeChance: 0.05,
            blockChance: 0,
            critChance: 0.1,
            bDodge: 0,
            bBlock: 0,
            bCrit: 0,
            //the higher, the better.  100 is full, 0 is empty
            hunger: 100,
            thirst: 100,
            //maximum hunger and thirst
            maxH: 100,
            maxT: 100,
            //nothing to worry about
            died: false,
            isDead: false,
            //health Regeneration
            healthRegen: 2,
            plusReg: 0,
            quests: [],
            qd: [],
        };
        var spawnLoc = {
            "-": ["bandit","cobra gangster"],
            "|": ["bandit","cobra gangster"],
            "@": ["bandit","cobra gangster"],
            "h": ["bandit","cobra gangster"],
            "H": ["bandit","cobra gangster"],
            "=": ["xorox trooper","bandit","cobra gangster"],
            '"': ["xorox trooper","bandit","cobra gangster"],
            "^": ["quasar trooper"],
            "$": ["quasar trooper"],
            "B": ["xorox entity","xorox trooper","quasar trooper","cytotron trooper"],
            "g": ["xorox entity"],
            "a": ["xorox entity"],
        };
        
        /****************************************
         * PROTOTYPE CONSTRUCTORS
         ****************************************/
        var rands = {
            banditWeapons: ["baseball bat", "crowbar", "shiv"],
            parts: ["jaw", "stomach", "gut", "ribcage", "nose"],
        };
        
        function Creature(t, x, y) {
            this.int = false;
            this.x = x;
            this.y = y;
            this.type = t;
            this.fighting = false;
            this.d = "";
            this.ad = "";
            this.dd = "The corpse of a dead " + this.type + " is empty, decayed, and disgusting."
            this.aggr = false;
            this.health = 0;
            this.maxHealth = 0;
            this.level = 0;
            this.dead = false;
            this.spawn = "";
        
        
            switch (this.type) {
                case "bandit": {
                    this.wpn = getEl(rands.banditWeapons);
                    this.ad = "A bandit runs up to you, wielding a " + this.wpn;
                    this.d = "A bandit is sitting on the floor, holding a " + this.wpn + ", looking very bored.";
                    this.minDamage = 1;
                    this.maxDamage = 10;
                    this.attackRate = 3000;
                    this.critChance = 0.05;
                    this.blockChance = 0;
                    this.dodgeChance = 0.2;
                    this.drops = ["throwing knives (5)", "silver coin","bandage", "water bottle", "moldy piece of bread", this.wpn];
                    this.aggr = true;
                    this.health = 20;
                    this.maxHealth = 20;
                    this.level = 2;
                    this.attacks = ["The bandit punches you in the " + getEl(rands.parts), "The bandit hits you with his weapon", "Your opponent hits you in the " + getEl(rands.parts) + " with his weapon.", "The bandit slams you down on the floor with a judo throw."];
                    } break;
                case "quasar trooper": {
                    this.ad = "A quasar trooper runs over to you, ready to attack";
                    this.d = "A well-armed quasar trooper is behind a mounted Proton Quasar cannon, aiming to find a lurking alien.";
                    this.minDamage = 5;
                    this.maxDamage = 30;
                    this.attackRate = 3000;
                    this.critChance = 0.1;
                    this.blockChance = 0.1;
                    this.dodgeChance = 0.1;
                    this.drops = ["water bottle", "moldy piece of bread", "photon katana", "grenade","bandage", "short range phaser","bolt tazor","guardian helmet","short-range phaser"];
                    this.aggr = false;
                    this.health = 75;
                    this.maxHealth = 75;
                    this.level = 5;
                    this.attacks = ["The quasar trooper zaps you with a bolt tazor","The quasar trooper slashes you with a photon katana","The quasar trooper smashes you in the face with the hilt of a photon katana","The quasar trooper punches you in the stomach","The quasar trooper impales you with his sword."];
                    } break;
                case "xorox entity": {
                    this.ad = "A xorox alien, covered in a carbonfiber-like armor jumps out at you.";
                    this.d = "A xorox entity walks around on six legs, searching for something to destroy.";
                    this.minDamage = 5;
                    this.maxDamage = 15;
                    this.attackRate = 2500;
                    this.critChance = 0.1;
                    this.blockChance = 0.1;
                    this.dodgeChance = 0;
                    this.drops = ["alien exoskeleton shield","photon dagger","human femur","severed hand","twig","xor candy","xor crystal","xorox alien scale","human femur","alien exoskeleton armor"];
                    this.aggr = true;
                    this.health = 50;
                    this.maxHealth = 50;
                    this.level = 3;
                    this.attacks = ["The xorox alien smashes its long stiff arm into the side of your head.","The xorox alien jumps on you and smashes you head into the floor","The alien jumps on you and bites your shoulder","The xorox entity smashes its heavy fist into your stomach","The alien smashes and breaks your nose, squirting blood everywhere."];
                    } break;
                case "xorox trooper": {
                    this.ad = "A heavyweight alien about seven feet and covered in metal armor jumps out at you.";
                    this.d = "A heavyweight xorox trooper walks along, phaser in hand, searching for any less powerful being than you to destroy.";
                    this.minDamage = 10;
                    this.maxDamage = 60;
                    this.attackRate = 3500;
                    this.critChance = 0.1;
                    this.blockChance = 0;
                    this.dodgeChance = 0;
                    this.drops = ["alien exoskeleton shield","human femur","severed hand","twig","xor candy","xor crystal","arcanium sword","cytotron boots","steel xorox scale"];
                    this.aggr = true;
                    this.health = 150;
                    this.maxHealth = 150;
                    this.level = 7;
                    this.attacks = ["The xorox alien smashes its long stiff arm into the side of your head.","The xorox alien jumps on you and smashes you head into the floor","The alien jumps on you and bites your shoulder","The xorox entity smashes its heavy fist into your stomach","The alien smashes and breaks your nose, squirting blood everywhere."];
                    } break;
                case "cytotron trooper": {
                    this.ad = "A very large bronze-colored alien invader walks over to you, ready to demolish you.";
                    this.d = "A large cytotron trooper is blasting deadly lasers at everything in its path, trying to deface the planet earth.";
                    this.minDamage = 15;
                    this.maxDamage = 75;
                    this.attackRate = 2500;
                    this.critChance = 0;
                    this.blockChance = 0.15;
                    this.dodgeChance = 0;
                    this.drops = ["cytotron helmet","cytotron armor","cytotron shield","cytotron boots","antimatter machete","cytotron plate"];
                    this.aggr = true;
                    this.health = 250;
                    this.maxHealth = 250;
                    this.level = 10;
                    this.attacks = ["The cytotron trooper smashes you with the hilt of a very large machete-like weapon.","The cytotron trooper gives you a large cut accross the face","The cytotron trooper sends you flying a large distance with one mighty kick","The cytotron trooper cracks your skull with a large metal fist.","The cytotron trooper dismounts a large gun from its back and just barely vaporizes you."];
                    } break;
                case "cytotron sentry": {
                    this.ad = "A golden cytotron sentry removes a long golden machete from its sheath and runs at you, ready to tear you to pieces.";
                    this.d = "A golden cytotron sentry stands still, waiting for an invade to pass by.";
                    this.minDamage = 25;
                    this.maxDamage = 200;
                    this.attackRate = 3000;
                    this.critChance = 0.1;
                    this.blockChance = 0.15;
                    this.dodgeChance = 0;
                    this.drops = ["cytotron helmet","cytotron armor","cytotron shield","cytotron boots","magnorok throwing hammer","golden cytotron machete","cytotron plate"];
                    this.aggr = true;
                    this.health = 750;
                    this.maxHealth = 750;
                    this.level = 10;
                    this.attacks = ["The massive cytotron sentry swings a very large machete at you.  It hits you in the side, breaking a couple of ribs.","The cytotron sentry removes a throwing hammer from its belt and smashes you in the face.","The powerful sentry smashes you in the stomach with its large metalic fist, forcing blood out of your mouth.","The cytotron sentry picks you up and smashes you against the nearest wall","The cytotron sentry dismounts a large gun from its back and blasts it at you.  A small part of your body has been vaporized.  Luckily, you're still alive."];
                    } break;
                case "cobra gangster": {
                    this.ad = "A cobra gangster with an ouroboros (snake) tatoo on his forehead jumps out of nowhere and gives you a nasty surprise.";
                    this.d = "A cobra gangster is sitting on the floor and looking very bored.  He has an ouroboros (snake) tatoo on his forehead.";
                    this.minDamage = 1;
                    this.maxDamage = 10;
                    this.attackRate = 2500;
                    this.critChance = 0.1;
                    this.blockChance = 0.1;
                    this.dodgeChance = 0.15;
                    this.drops = ["throwing knives (5)", "silver coin","bandage", "water bottle", "moldy piece of bread", "pair of sneakers","checkered cap","xorox crystal","grenade","shiv","stunshock staff"];
                    this.aggr = true;
                    this.health = 85;
                    this.maxHealth = 85;
                    this.level = 5;
                    this.attacks = ["The cobra gangster does a spinning-kick and smashes his foot into your face.","The cobra gangster throws five knives at you.  You dodge most of them, but get cut a bit.","The cobra gangster throws a grenade at you.  It hits you, bounces off of you, and explodes, burning you slightly.","The gangster rams his shoulder int your stomach.","The gangster slices at you with a shiv.","The gangster starts wielding a stunshock staff and smashes you with it.","The gangster karate-chops your neck."];
                    } break;
            }
        }
        Creature.prototype.fight = function() {
            if (this.fighting && player.fighting) {
                clearInterval(this.int);
                clearInterval(myInt);
                this.int = setInterval(eAttack, this.attackRate);
                myInt = setInterval(playerAttack, player.attackRate);
            }
        };
        Creature.prototype.run = function() {
            var c = $("#com").value.split('').splice(1, 10000).join('');
            var c_br = c.split(' ');
            if (this.x == player.x && this.y == player.y) {
                if (!this.dead) {
                    if (!this.fighting) {
                        if (this.level >= player.level && this.aggr) {
                                this.fighting = true;
                                player.fighting = true;
                            
                        } else {
                            if (search(words.fight, c_br[0]) && matchEl([this.type], c_br[1])) {
                                say("You reveal your weapon to the " + this.type + ", starting the fight.");
                                player.fighting = true;
                                this.fighting = true;
                            }
                        }
                        
                    }
                    if (this.fighting) {
                        this.fight();
                        
                    }
                }
            }
        };
        
        function Room(t, x, y) {
            this.x = x;
            this.y = y;
            this.t = t;
            this.d = "";
            this.items = [];
            switch (this.t) {
                case "p":
                    this.d = "The room you enter glows with a very bright light.  Power cords line the walls and mandelbrot patterns in the walls and floor flow.";
                    break;
                case "f":
                    this.d = "You walk accross the floor in the aliens' base.  Each tile is shaped like a mandelbrot-like swirl outlined with a glowing plasma-like substance.  Occasionally, the mandelbrot tiles will shift positions, changing to a different recursive pattern.";
                    break;
                case "©":
                    this.d = "You walk up to a large gate, made by the aliens.  The design of the gate is super durable, full of self-regenerating nanotechnology, and is not guarded with any special weapons.";
                    break;
                case "A":
                    this.d = "You walk over to a large metal gate made by the aliens.  The gates, when fired at will regenerate itself to a lighter and stronger structure with nanotechnology.  You can see slight vibrations moving when you look at the wall closely."
                    break;
                case "a":
                    var nns = [
                        "Strange glowing runes are carved into the ground.  Some elixir-like substance is flowing like a rive beneath your feet.  Such power is emitted that static electricity makes your hair prick up a bit, or is it fear?  You are in alien territory.",
                        "Your nearly silent footsteps soundly touch the ground.  Strange glowing patterns are carved into the ground.  The ground is very smooth and in the glowing patterns is a neverending river of a plasma-like substance.",
                        "You look down on the ground and see a glowing alien XOR matrix.  XOR matrices are proton accelerators - a new techology discovered by humans about a year before aliens arrived.  XORs have the ability to increment or decrement the number of protons in an object.  You are in alien territory.",
                        "The ground under you is completely transparent.  You stare through the glass floor and underneath is a flowing river of pure energy.  You are in alien territory."
                    ];
                    this.d = c_s(getEl(nns), "rgb(75,100,225)");
                    break;
                case "t":
                    this.d = c_s("You cross an area with a smoothened-out floor.  Lines of elixir flow through transparent veins cut in the ground.  The massive amoutn of energy flowing beneath your feet creates some static electricity, pricking your hair up.", "rgb(100,100,200)");
                    break;
                case "i":
                    this.d = c_s("You walk down a nearly invisible underground hallway.  It seems to have been carved by alien hands as there are claw marks everywhere. ", "rgb(200,200,200)");
                    break;
                case "e":
                    this.d = c_s("You walk into a bright white room.  " + "!gge retsae eht dnuof uoY".split('').reverse().join('') + " Paste this code in the T&T for proof: xorMatrix[your username]" + Math.floor(Math.random() * 1000) + "Cytotron", "rgb(255,255,255)");
                    break;
                case "T":
                    this.d = c_s("You reach a t-shaped intersection.  Everything around is lifeless and broken.  A thick smog fills the air and the sound of gunfire and screaming echoes in the distance.  An uncomfortable feeling creeps up your spine.  Anything could be lurking around waiting to jump out at you.", "rgb(100,100,100)");
                    break;
                case ":":
                    this.d = c_s("You reach a turn.  Everything around is lifeless and broken.  A thick smog fills the air and the sound of gunfire and screaming echoes in the distance.  An uncomfortable feeling creeps up your spine.  Anything could be lurking around waiting to jump out at you.", "rgb(100,100,100)");
                    break;
                case "@":
                    this.d = c_s("You've reached a dead end in an alley.  Pieces of trash line the walls and a thick smog smelling of death fills the air.  An occasional rat scurries out of nowhere.  Anything can jump out of you out of nowhere.  Your eyes flicker back and forth watching for something that might kill you.", "rgb(100,100,100)");
                    break;
                case "-":
                    this.d = c_s("You stand in a shady abandoned alley.  Everything around is lifeless and broken.  A thick smog fills the air and the sound of gunfire and screaming echoes in the distance.  An uncomfortable feeling creeps up your spine.  Anything could be lurking around waiting to jump out at you.", "rgb(150,150,150)");
                    break;
                case "|":
                    this.d = c_s("You walk into a sinister, shaded alley.  Trash lines the sides of the alley and a thick, smelly fog fills the air.  Gunfire and screaming sounds echo in the distance.  Not much to see around here.  Anything could jump out at you at any given moment.", "rgb(150,150,150)");
                    break;
                case '"':
                    this.d = c_s("You walk up an abandoned street.  Many flying cars used to travel this route.  Now there is nothing.  Anything could jump out at you at any given moment.  The smell of burning rotten corpses streams through your nose, giving off a sickly feeling.", "rgb(175,175,175)");
                    break;
                case '=':
                    this.d = c_s("You enter an abandoned road.  So many flying cars used to populate the streets.  It was a good life before, but now?\nLife is hard trying to survive in the war with aliens.  The sound of gunfire and the smell of dead bodies turn your stomach.", "rgb(175,175,175)");
                    break;
                case '+':
                    this.d = c_s("You enter a cross-shaped area.  Four directions to choose from.  Buildings tower around you in four directions.  The smell of burning corpses, smoke, and gas make you feel sick.  Sounds of gunfire and warfare echo in the distance.  Terrible.", "rgb(125,125,125)");
                    break;
                case '#':
                    this.d = c_s("You enter a road intersection.  Four directions to choose from.  Broken traffic lights, empty ammo rounds, and trash line the streets.  An occasional rat scurries out from the drain systems.  A thick smog smelling of burning corpses fills the air while gunfire sounds off in the distance.", "rgb(125,125,125)");
                    break;
                case 'g':
                    this.d = c_s("You walk accross a patch of scorched grass.  The grass crumbles into ash as you step on it.  The once green patch has been destroyed by firepower and life-elimitating aliens.  You hear flamethrowers and guns blasting in the distance.", "rgb(100,150,100)");
                    break;
                case 'h':
                    this.d = c_s("You enter a crumbled-down house.  Some people used to live in it, but now they are probably dead.  You can't find much of anything in the thick rubble and all the remaining items of the house seem to have been burnt up.  The smell of a rotting corpse wafts out of somewhere.", "rgb(175,150,125)");
                    break;
                case 'b':
                    this.d = c_s("You enter an abandoned building.  Almost all of its items have been looted previously and the inside of the building seems to have been scorched by flame.  Such a broken world.  So sad.", "rgb(175,150,100)");
                    break;
                case 'B':
                    var descs = [
                        "You walk over the grounds of a battlefield.  All the grass is scorched and empty ammo shells and broken weapons line the ground.  Some flames try their best to consume the remaining living grass.  Even fire has a hard time surviving.  Such a broken world.",
                        "You gaze accross the darkened face of a battlefield.  All the grass is scorched.  Almost no life remains here.  War, death, evil, and starvation all come together.  Some little bugs and rodents scurry accross the area, searching for food.",
                        "Grey clouds cover the battlefield you stand on.  Almost no life is left here.  Death is everywhere.  In an alien invasion, everything is desolated more than in a normal war on earth."
                    ];
                    this.d = c_s(getEl(descs), "rgb(80,80,80)");
                    break;
                case 'H':
                    this.d = c_s("You enter a house that is still standing, but the inside has been looted and broken.  Vines grow along the walls, desperately trying to cling to something and mould drips from gaps in the wall and roof.", "rgb(200,175,150)");
                    break;
                case 'r':
                    this.d = c_s("You enter what used to be a restaurant.  Virtually nothing remains.  A few rats scurry around the room, trying their best to loot some remaining food.  Spatters of blood appear periodically.  Maybe starving people killing to survive.", "rgb(175,175,125)");
                    break;
                case 'G':
                    this.d = c_s("You enter what seems to have been a garage.  Almost nothing is here.  Even the tools such as hammer and wrenches have been taken for self-defense.  This is what war is.  The smell of a rotting corpse comes out of nowhere.", "rgb(100,80,80)");
                    break;
                case 'w':
                    this.d = c_s("You wade accross an area of polluted water.  Nothing is really over here at all.  All the fish in it have died and the water is undrinkable.", "rgb(125,125,175)");
                    break;
                case 'W':
                    this.d = c_s("You found a spring of water.  It is one of the only freshwater sources that remain.  Clear water slowly drips out of a hole in the ground, ready to be consumed.  If your thirst level is below 50, you can replenish it at a spring.", "rgb(50,75,200)");
                    break;
                case 'd':
                    this.d = c_s("You walk over an empty patch of dirt.  All the vegetation seems to have dried up.  A few scorpions race between clumps of dry earth while hardworking ants scurry around, looking for food.", "rgb(175,100,0)");
                    break;
                case "!":
                    this.d = c_s("Your footsteps echo through an empty stone room.  A few empty rounds of ammo, broken guns, and smashed magazines lay accross the floor.  It seems as though this was a military arsenal before.", "rgb(200,200,225)");
                    break;
                case "$":
                    this.d = c_s("Your footsteps echo as you walk through an abandoned piece of a military base.  Almost everything in it has been looted except for an occaional empty bulvar shell or broken gun.", "rgb(50,150,0)");
                    break;
                case "%":
                    this.d = c_s("You tramp through some soft dirt.  Wheel tracks are printed into the floor by once powerful tanks.  Almost everything in this room has been destroyed.  Trash and ashes lay everywhere.", "rgb(150,75,0)");
                    break;
                case "^":
                    this.d = c_s("You walk over a fence of barbed wire and broken metal fences.  This used to be a restricted area but now, since everything is broken, anyone can go through.", "rgb(100,125,100)");
                    break;
        
            }
        }
        Room.prototype.run = function() {
            //special features of different landscape types
            if (this.x === player.x && this.y === player.y) {
                if (player.thirst < 50 && this.t === "W") {
                    say("You drink some of the clear spring water to soothe your dry, parched throat.");
                    player.thirst = player.maxT;
                }
            }
        };
        Room.prototype.spawnC = function() {
            var chance = Math.random();
            if (spawnLoc[this.t] && this.x !== spawnPoints[0] && this.y !== spawnPoints[1]) {
                if (chance < 0.2) {
                    creatures.push(new Creature(getEl(spawnLoc[this.t]), this.x, this.y));
                }
            }
            
            if(this.t == "©"){
                creatures.push(new Creature("cytotron sentry", this.x,this.y))
            }
        };
        
        var attackPower = {
            "punch": 0.5,
            "kick": 0.6,
            "strike": 0.7,
            "slash": 0.8,
            "gash": 1,
            "hiltslam": 0.8,
            "chop": 1.2,
            "knockout": 1.5,
            "electrocute": 1.75,
            "shoot": 2,
            "throw": 1.25,
            "pound": 1,
            "stab": 1.75,
        };
        var randomPhrases = [
            "with your weapon, splattering blood everywhere",
            "with your weapon, splattering gore everywhere",
            "with your weapon, enshrouding them in a mist of blood",
            "with your weapon, forcing blood out of their mouth",
            ", causing them to grimace in pain",
            "with your weapon, causing them to cough up some blood",
            "with your weapon, staining red your weapon",
        ];
        var randomPhrases2 = [
            ", temporarily stunning them",
            ", knocking the breath out of them",
            ", causing a satisfying Crunch",
            ", causing them to grimace in pain",
            ", making them lose consiousness for a split second",
            ", cracking one of their bones",
        ]
        
        function playerAttack() {
            setPlayerPos();
            parseColors();
        
        
            function PTurn(target) {
                var name = target.type;
                var rollChance = Math.random();
                var attackType = getEl(player.attacks);
                var dmg = random(player.minDamage, player.maxDamage * attackPower[attackType]);
                var status = "attack";
                if (rollChance > 0 && rollChance < player.critChance) {
                    dmg *= 2;
                    say(c_s("You score a Critical Hit!<br>", "rgb(0,200,0)"));
                }
        
                if (target.fighting && target.x === player.x && target.y === player.y && target.health > 0) {
                    if (rollChance > player.critChance && rollChance < target.blockChance + player.critChance) {
                        say("The " + target.type + " blocks your attack");
                        status = "miss";
                    }
                    if (rollChance > player.critChance + target.blockChance && rollChance < target.blockChance + player.critChance + target.dodgeChance) {
                        say("The " + target.type + " dodges your attack");
                        status = "miss";
                    }
                }
        
                if (status == "attack") {
                    if ((attackType == "slash" || attackType == "gash" || attackType == "stab" || attackType == "throw" || attackType == "chop" || attackType == "shoot"))
                        say(c_s("-" + c_s(Math.floor(dmg), "rgb(0,200,0)") + "- | " + name + "'s health: " + target.health + " | " + "- You " + attackType + " the " + target.type + " " + getEl(randomPhrases), "rgb(175,175,175)"))
                    else
                        say(c_s("-" + c_s(Math.floor(dmg), "rgb(0,200,0)") + "- | " + name + "'s health: " + target.health + " | " + "- You " + attackType + " the " + target.type + "" + getEl(randomPhrases2), "rgb(175,175,175)"))
                    target.health -= Math.floor(dmg);
                }
        
        
        
        
                if (target.health < 0 || target.health === 0) {
                    clearInterval(target.int);
                    target.int = false;
                    target.fighting = false;
                    player.fighting = false;
                    var overallXP = Math.round((target.level / player.level * 100) * Rand(0.5, 1));
                    say(c_s("<br>You killed the " + name + "!", "rgb(0,200,0)"));
                    player.xp += overallXP;
                    say("You got " + c_s("+" + overallXP + "XP", "rgb(0,200,0)") + "!");
                    var dropChance = Math.random();
                    var dropNum = fR(1, 4);
                    var regex1 = /(a|e|i|o|u)/i;
                    if (dropChance > 0.2) {
                        for (var q = 0; q < dropNum; q++) {
                            var fetchedEl = getEl(target.drops);                
                        if(player.inv.length < 20){
                            player.inv.push(fetchedEl);
                            if (regex1.test(fetchedEl)) {
                                say("You take a " + fetchedEl + " from the " + name);
                            } else {
                                say("You take an " + fetchedEl + " from the " + name);
                            }
                        } else{
                            say("You can't carry any more.")
                        }
                            parseColors();
                        }
                    }
                    target.dead = true;
        
                }
                say("");
            }
        
            for (var i = 0; i < creatures.length; i++) {
                if (creatures[i].fighting && creatures[i].x === player.x && creatures[i].y === player.y && !creatures[i].dead && player.fighting) {
                    PTurn(creatures[i]);
                }
            }
        
            parseColors();
            setPlayerPos();
        }
        
        function eAttack() {
            if (player.fighting) {
                setPlayerPos();
                parseColors();
                for (var i = 0; i < creatures.length; i++) {
                    var u = creatures[i];
                    if (u.fighting && u.x === player.x && u.y === player.y) {
                        player.fighting = true;
                        var attacks = u.attacks;
                        var dmg = random(u.minDamage, u.maxDamage);
                        var fd = Math.floor(dmg);
                        var rollChance = Math.random();
                        var status = "attack";
                        if (rollChance > 0 && rollChance < u.critChance) {
                            dmg = random(u.minDamage, u.maxDamage) * 2;
                            say("The " + u.type + " got a Critical Hit!")
                        }
                        if (rollChance > u.critChance && rollChance < u.critChance + player.blockChance) {
                            var blocks = [
                                "You block the " + u.type + "'s attack.",
                                "The " + u.type + "'s attack thuds against your shield", 
                                "The " + u.type + "'s attack is shielded by your armor",
                            ];
                            say(getEl(blocks))
                            status = "miss";
                        }
                        if (rollChance > u.critChance + player.blockChance && rollChance < u.critChance + player.blockChance + player.dodgeChance) {
                            say("You dodge the " + u.type + "'s attack.")
                            status = "miss";
                        }
                        if (status == "attack"&&u.health > 0) {
                            say(" -" + c_s(fd, "rgb(200,50,50)") + "- | " + u.type + "'s health: " + u.health + " | " + c_s(getEl(attacks), "rgb(175,175,175)"));
                            player.health -= fd;
                        }
                        if (player.health < 0 || player.health === 0) {
                            player.fighting = false;
                            u.fighting = false;
                            clearInterval(myInt);
                            clearInterval(u.int);
                            u.int = false;
                            playerDie();
                        }
                        say("")
                        if (u.health < 0 || u.health === 0) {
                            clearInterval(u.int);
                            u.fighting = false;
                            player.fighting = false;
                            var overallXP = Math.round((u.level / player.level * 100) * Rand(0.5, 1));
                            say(c_s("<br>You killed the " + u.type + "!", "rgb(0,200,0)"));
                            player.xp += overallXP;
                            say("You got " + c_s("+" + overallXP + "XP", "rgb(0,200,0)") + "!");
                            var dropChance = Math.random();
                            var dropNum = fR(1, 3);
                            var regex1 = /(a|e|i|o|u)/i;
                            if (dropChance > 0.2) {
                                for (var q = 0; q < dropNum; q++) {
                                    var fetchedEl = getEl(u.drops);
                                    if(player.inv.length < 20) {
                                        player.inv.push(fetchedEl);
                                        if (regex1.test(fetchedEl)) {
                                            say("You take a " + fetchedEl + " from the " + u.type);
                                        } else {
                                            say("You take an " + fetchedEl + " from the " + u.type);
                                        }
                                    } else{
                                        say("You can't carry any more.")
                                    }
                                    parseColors();
                                }
                            }
                            say("");
                            u.dead = true;
                        }
                    }
                }
                parseColors();
                setPlayerPos();
            }
        }
        
        function Obj(x, y, t) {
            this.x = x;
            this.y = y;
            this.d = "";
            this.type = t;
            this.spec = [];
            this.spec2 = [];
            this.useFunc = function() {};
            switch (this.type) {
                case "alien turret":
                    this.d = "The alien turret is a massive structure, weighing a few thousand tons.  One blast could cause so much destruction--more power than a human weapon could ever discharge.";
                    this.useFunc = function() {
                        say("You don't know how to use the turret.<br>")
                    }
                    break;
                case "emf cannon":
                    this.d = "The Electro Magnetic Force Cannon is a weapon made by humans that can crush metal.  Its huge base covers about 64 square feet and is made of solid titanium.  Large hoses and wires supply it with extreme power.";
                    this.useFunc = function() {
                        say("You don't know how to use an emf turret<br>")
                    }
                    break;
                case "portal":
                    this.d = "The large hexagonal portal seems to be off.  Thick hoses and cords feed glowing energy into the portal.  Type 'use portal' to use it if you are ready.";
                    this.useFunc = function() {
                        if(
                            search(player.eq, "leviathan accelerator") && 
                            search(player.eq, "iris accelerator") &&
                            search(player.eq, "restoration accelerator") && 
                            search(player.eq, "deflection accelerator") && 
                            search(player.eq, "reaction accelerator") && 
                            search(player.eq, "carbonshield accelerator")
                            ){
                                $("#log").innerHTML = "";
                            say("You stick each accelerator from your fingers into the portal's slots.  The portal lights up and activates.  As it turns on, it blasts out a surge of power and you are sucked into it.  You are on your way to Saudi Arabia to defeat the aliens.<br><br>≤-----To Be Continued-----≥");
                        }else {
                            say("You don't have the right accelerators to open the portal.");
                        }
                    }
                    break;
            }
        }
        Obj.prototype.run = function() {
            var c = $("#com").value.split('').splice(1, 10000).join('');
            var c_br = c.split(' ');
            if (this.x === player.x && this.y === player.y) {
                if (search(words.look, c_br[0]) && matchEl([this.type], c_br[1])) {
                    say(this.d + "<br>");
                }
                if (search(words.use, c_br[0]) && matchEl([this.type], c_br[1])) {
                    this.useFunc();
                }
                if(this.type == "shop"){
                    if(search(words.list, c_br[0])){
                        
                    }
                }
            }
        };
        
        function NPC(x, y, t) {
            this.x = x;
            this.y = y;
            this.type = t;
            this.wants = [];
            this.satisfied = false;
            this.d = "";
            this.rewardFunc = function() {};
            this.midQuest = "";
            this.greetFunc = function() {};
            this.quest = "";
            this.dead = false;
            this.d2 = "";
            this.qd = "";
        
            switch (this.type) {
                case "don the battle-hardened survivor":{
                    this.qd = "Get three Xorox Alien Scales for don."
                    this.d2 = 'A skinny battle-hardened survivor of the war named Don has a robotic hand and seems to be building something out of xorox alien scales.';
                    this.quest = "Xorox 3";
                    this.wants = ["xorox alien scale", "xorox alien scale", "xorox alien scale"];
                    this.d = "Don is a scarred warrior and survivor.  He isn't a big guy, but he's a deadly fighter when in action.  Glowing tatoos stretch from the backs of his hands to his biceps."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello, I\'m Don," Says the man, "Would you mind getting three pieces of Xorox Alien Scales for me?  If you do, I\'ll give you artifacts of war."');
                    };
                    this.midQuest = '"Please come back to me once you get the three xorox alien scales," says Don.';
                    this.rewardFunc = function() {
                        player.inv.push("grenade");
                        player.inv.push("acid grenade");
                        player.inv.push("health shot");
                        player.inv.push("health shot");
                        player.xp += 400;
                        say('"Thanks a lot, my friend.  Here are two grenades and two health shots.  Use them while you fight."');
                        say(c_s("You got two grenades, two health shots, and +400xp!", "rgb(0,200,0)"))
                        say("Type \"use [item]\" (e.g. \"use grenade\") in a fight to deal large amounts of damage to your opponent.");
                    }
                    }break;
                case "james":{
                    this.qd = "Get two water bottles for james."
                    this.d2 = 'An barely-alive old man named James is staring into the distance, drained mostly of his life.  His eyes are an intense green color, showing that he is more than what he appears.';
                    this.quest = "Thirst Charge";
                    this.wants = ["water bottle","water bottle"];
                    this.d = "James is a drained old man who seems to be older than 70 years.  Old age line his face but his intense green eyes tell you he's more than just that."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello, stranger, please help me.  I\'m dying of thirst," Says the old man, "Please get me two water bottles so I can go on living a little longer.  I will give you what nobody can."');
                    };
                    this.midQuest = '"If I cannot live, I cannot reward you."';
                    this.rewardFunc = function() {
                        player.inv.push("carbonshield accelerator");
                        player.xp += 300;
                        say('"Thank you for helping me," says James as he quenches his thirst with the water.  He stands up and says "Here, I have given you a carbonshield accelerator ring.  Put it on your finger and your body will be shielded with a layer of solid carbon."');
                        say(c_s("You got a carbonshield accelerator and +300xp!", "rgb(0,200,0)"))
                        say("Equip the accelerator to start using it.");
                    }
                    }break;
                case "sandra":{
                    this.qd = "Get five xorox crystals for sandra"
                    this.d2 = 'A young woman named Sandra is drawing a geometric pattern on the floor, and placing some heavyweight magnets around it.  She seems to be working on something big.';
                    this.quest = "Crystalization";
                    this.wants = ["xorox crystal","xorox crystal","xorox crystal","xorox crystal","xorox crystal"];
                    this.d = "Sandra is a small, thin woman who looks quite wasted from the war.  She stares into your eyes with an intese glare that shows that she wants to live on for a reason."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello," says Sandra, "Would you mind getting me five xorox crystals?  I\'m trying to find a way to unleash their power, but I can\'t fight the aliens."');
                    };
                    this.midQuest = '"Do you have all five xorox crystals?", says Sandra.  "No?  Okay, come back to me when you have them."';
                    this.rewardFunc = function() {
                        player.inv.push("carbonshield accelerator");
                        player.xp += 300;
                        say('"Thank you for helping me," says James as he quenches his thirst with the water.  He stands up and says "Here, I have given you a carbonshield accelerator ring.  Put it on your finger and your body will be shielded with a layer of solid carbon."');
                        say(c_s("You got a carbonshield accelerator and +300xp!", "rgb(0,200,0)"))
                        say("Equip the accelerator to start using it.");
                    }
                    }break;
                case "ignatius the quasar trooper":{
                    this.qd = "Get a bandage for Ignatius"
                    this.d2 = 'A seriously wounded Quasar trooper named Ignatius is laying on the floor, soaked with blood.  His left arm is torn off and his shirt is spattered with blood.';
                    this.quest = "Hurt and the Healer";
                    this.wants = ["bandage"];
                    this.d = "Ignatius seems to be about forty years old.  His face is scarred from war and his expression is twisted with pain.  His left arm has been torn off."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Please," Says the trooper, "I need a bandage for my arm to stop the bleeding or I\'ll bleed to death.  Please, if you do this for me, I\'ll give you a stasis particle shield."');
                    };
                    this.midQuest = '"If I cannot live, I cannot reward you."';
                    this.rewardFunc = function() {
                        player.inv.push("stasis particle shield");
                        player.xp += 200;
                        say('"Thank you so much," says Ignatius as he wraps his injured shoulder with the bandage.  He takes a small cylinder out of his pocket and expands it to become a stasis particle shield.  "Here, it\'s for you".');
                        say(c_s("You got a stasis particle shield and +200xp!", "rgb(0,200,0)"))
                        say("Equip the shield to start using it.");
                    }
                    }break;  
                case "maglor the sorcerer":{
                    this.qd = "Get six human femurs for Maglor"
                    this.d2 = 'Maglor is a very old, but strong man.  His logn grey beard reaches down to his chest and his body is covered in black tatoos that seem to be some runic letters and geometric patterns.  His eyes are a glowing golden yellow color and on his finger is a ring with a glowing blue gemstone on it.';
                    this.quest = "Human Bone";
                    this.wants = ["human femur","human femur","human femur","human femur","human femur","human femur"];
                    this.d = "Ignatius is wearing a long white robe and a golden belt around his waist.  On the robe are glowing blue runes and patterns–probably accelerators for his sorcery."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello young stranger, says Maglor, "I have a simple request to ask you.  Please get for me six human femurs and I will reward you greatly.  A lot of people don\'t believe in magic, but they should."');
                    };
                    this.midQuest = '"Please return once you have all six human femurs."';
                    this.rewardFunc = function() {
                        player.inv.push("reaction accelerator");
                        player.xp += 600;
                        say('"Thank you, my friend," says Maglor.  He aligns the six femurs in a hexagon, scratches a hexagon into the floor within the bones, draws a circle and triangle outside of them and puts his hands on the drawing.  Water springs forth from the ground and surrounds him in a vortex.  After a moment, he comes out of the spinning fury of water, completely unharmed and tatoos glowing.  "Here is your reward, my friend," he says as he hands you his ring. "Search for five of the other warlocks at the six corners of the earth.  Then you will be able to face the great darkness that invades the world."',);
                        say(c_s("You got a reaction accelerator and +600xp!", "rgb(0,200,0)"))
                        say("Equip the accelerator to start using it.");
                        npcs.push(new NPC(5, 1, "narada the warlock"))
                    }
                    }break; 
                case "narada the warlock":{
                    this.qd = "Get six Photon Daggers for Narada"
                    this.d2 = 'Narada is a Warlock and appears to be very young.  Runic symbols and tatoos run up and down her from the palms of her hands to her neck.  She has a ring on her finger with a glowing green gemstone on it.';
                    this.quest = "Photon Six";
                    this.wants = ["photon dagger","photon dagger","photon dagger","photon dagger","photon dagger","photon dagger"];
                    this.d = "Narada is dressed in a long red robe with glowing green runic patterns and letters.  She appears to be very young, but who knows how old a Warlock could be?"
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello young stranger, says Narada, "I have a simple request to ask you.  Please get for me six photon daggers and I will reward you greatly.  A lot of people don\'t believe in magic, but they should."');
                    };
                    this.midQuest = '"Please return once you have all six photon daggers."';
                    this.rewardFunc = function() {
                        player.inv.push("iris accelerator");
                        player.xp += 600;
                        say('"Thank you my friend," says Narada.  She draws a circle, then inside of it a hexagon.  Two triangles are also drawn in the hexagon.  She stabs the six daggers on each point of the hexagon.  When she activates it, ancient roots spring from the ground and wrap around her body completely.  After a moment, she comes out of the entanglement, completely unharmed and tatoos glowing.  "Here, take my ring.  Find the rest of the warlocks on the six corners of the earth."',);
                        say(c_s("You got an iris accelerator and +600xp!", "rgb(0,200,0)"))
                        say("Equip the accelerator to start using it.");
                        npcs.push(new NPC(30, 2, "magloroth the warlock"))
                    }
                    }break;
                case "magloroth the warlock":{
                    this.qd = "Get six xorox crystals for Magloroth"
                    this.d2 = 'Magloroth is a young powerful warlock.  You see six runic tatoos on him.  Two on the palms of his hands, two in his eyes, and two on his feet.  Six, what an interesting number with the warlocks.  He has a ring on his finger with a glowing orange stone.';
                    this.quest = "Xorox Gems";
                    this.wants = ["xorox crystal","xorox crystal","xorox crystal","xorox crystal","xorox crystal","xorox crystal"];
                    this.d = "Magloroth is dressed in a dark grey robe with glowing orange runes and patterns on it.  He has a ring on his finger with a glowing orange stone."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello young stranger, says Magloroth, "I have but a small request to ask you.  Please get for me six xorox crystals and I will reward you greatly.  A lot of people don\'t believe in magic, but they should."');
                    };
                    this.midQuest = '"Please return once you have all six xorox crystals."';
                    this.rewardFunc = function() {
                        player.inv.push("leviathan accelerator");
                        player.xp += 600;
                        say('"Thank you my friend," says Magloroth.  He links all the six crystals together in a pattern, holds the linked structure in his hands, and compresses it between his palms.  The floor under him opens up and a rift is torn in the sky.  Fire comes down from the sky while magma rushes out of the earth over him.  After a minute or so of intense heat, he comes out of the magma and fire, completely unharmed and tatoos glowing. "Here, take my ring," he says. "Search the six corners of the earth."');
                        say(c_s("You got a Leviathan accelerator and +600xp!", "rgb(0,200,0)"))
                        say("Equip the accelerator to start using it.");
                        npcs.push(new NPC(64, 6, "endrithor the warlock"))
                    }
                    }break;
                case "endrithor the warlock":{
                    this.qd = "Get six steel xorox scales for Endrithor"
                    this.d2 = 'Endrithor is one of the warlocks, but has a hood over his face so that you cannot see.  You can see that his robe and body have the warlock tatoos and runes on them and that his hand has a very dark accelerator on it.';
                    this.quest = "Steel Armor";
                    this.wants = ["steel xorox scale","steel xorox scale","steel xorox scale","steel xorox scale","steel xorox scale","steel xorox scale"];
                    this.d = "Endrithor is dressed in a black robe with glowing white runes and patterns on it.  He has a ring on his finger with a seemingly infinitely black stone."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello young stranger, says Endrithor, "I have but a small request to ask you.  Please get for me six steel xorox scales and I will reward you greatly.  A lot of people don\'t believe in magic, but they should.  You\'ve come this far into the alien base already.  Continue your mission to save the world."');
                    };
                    this.midQuest = '"Please return once you have all six steel xorox plates."';
                    this.rewardFunc = function() {
                        player.inv.push("deflection accelerator");
                        player.xp += 600;
                        say('"Thank you my friend," says Endrithor.  He stabs each xorox plate into the floor in a hexagonal pattern, draws some more marks in the floor, and activates it in a warlock formation.  The ground opens up under him and the darkness below covers him completely.  Lightning flashes around the dark area he is in.  From the darkness comes a bright white light.  His tatoos are glowing. "Here, take my ring," he says. "Search the six corners of the earth."');
                        say(c_s("You got a Deflection accelerator and +600xp!", "rgb(0,200,0)"))
                        say("Equip the accelerator to start using it.");
                        npcs.push(new NPC(81, 16, "leanora the warlock"))
                    }
                    }break;
                case "leanora the warlock":{
                    this.qd = "Get six grenades for Leanora"
                    this.d2 = 'Leanora looks as though she is the most celestial of all the warlocks.  Her eyes glow purple and her skin is covered in a purple glow.';
                    this.quest = "Warlock Explosives";
                    this.wants = ["grenade","grenade","grenade","grenade","grenade","grenade"];
                    this.d = "Leanora is dressed in a purple robe with bright purple glowing runes on it.  Instead of having the warlock tatoos all over her body, her right hand, which has six fingers, has them–one on each finger.  From her skin is emitted a purpleish glow."
                    this.greetFunc = function() {
                        player.quests.push(this.quest);
                        player.qd.push(this.qd)
                        say('"Hello young stranger, says Leanora, "I have but a small request to ask you.  Please get for me six grenades and I will reward you greatly.  A lot of people don\'t believe in magic, but they should."');
                    };
                    this.midQuest = '"Please return once you have all six grenades."';
                    this.rewardFunc = function() {
                        player.inv.push("resortation accelerator");
                        player.xp += 600;
                        say('"Thank you my friend," says Leanora.  She carefully removes each safety pin from the grenades.  Next, the grenades are placed around in a hexagonal shape (again).  She then reveals her six-fingered hand and places it in the middle of the six grenades.  Ice spikes break out of the ground and destroy her body.  It then dissapears.  "Here, take my ring," says Leanora\'s voice from through the air.  "I have deconstructed my body because you will need me again.  Go now an conquer the great evil the invades the earth.  I am the last of the warlocks you needed to find.  Go to the Portal and activate it."' );
                        say(c_s("You got a Restoration accelerator and +600xp!", "rgb(0,200,0)"))
                        say("Equip the accelerator to start using it.");
                    }
                    }break;
            }
        }
        NPC.prototype.run = function() {
            var c = $("#com").value.split('').splice(1, 10000).join('');
            var c_br = c.split(' ');
            var count = 0;
            for (var i = 0; i < player.inv.length; i++) {
                if (player.inv[i] === (this.wants[count])) {
                    count++;
                }
            }
            if (this.x === player.x && this.y === player.y) {
                if (search(words.look, c_br[0]) && matchEl([this.type], c_br[c_br.length - 1])) {
                    say(this.d);
                }
                if (search(words.communicate, c_br[0]) && matchEl([this.type], c_br[c_br.length - 1])) {
                    if (!this.satisfied) {
                        if (search(player.quests, this.quest)) {
                            if (count >= this.wants.length) {
                                this.satisfied = true;
                                var count = 0;
                                rem(player.quests, this.quest)
                                rem(player.qd, this.qd)
                                for (var j = 0; j < this.wants.length; j++) {
                                    for (var i = 0; i < player.inv.length; i++) {
                                        if (player.inv[i] === (this.wants[count])) {
                                            count++;
                                            rem(player.inv, this.wants[count]);
                                        }
                                    }
                                }
                                this.rewardFunc();
                            } else {
                                say(this.midQuest);
                            }
                        } else {
                            this.greetFunc();
                            say(c_s("You got a new quest, \"" + this.quest + "\".  Type 'quests' anytime to view your quests.<br>", "rgb(255,200,0)"));
                        }
        
                    } else {
                        var phrases = ["smiles at you", "nods at you", "thanks you for your help", "motions for you to go away", "looks at you then turns away"];
                        say(this.type + " " + getEl(phrases) + ".")
                    }
                }
            }
        
        
        
        
        
        
        };
        
        objects = [
            new Obj(43, 3, "alien turret"),
            new Obj(43, 5, "alien turret"),
            new Obj(43, 7, "alien turret"),
            new Obj(43, 9, "alien turret"),
            new Obj(43, 11, "alien turret"),
            new Obj(43, 13, "alien turret"),
            new Obj(43, 15, "alien turret"),
        
            new Obj(31, 3, "emf cannon"),
            new Obj(31, 5, "emf cannon"),
            new Obj(31, 7, "emf cannon"),
            new Obj(31, 9, "emf cannon"),
            new Obj(31, 11, "emf cannon"),
            new Obj(31, 13, "emf cannon"),
            new Obj(31, 15, "emf cannon"),
            
            new Obj(71, 2, "portal"),
        ]
        npcs = [
            new NPC(1,9,"don the battle-hardened survivor"),
            new NPC(1, 5,"james"),
            new NPC(13, 8, "sandra"),
            new NPC(36, 7, "ignatius the quasar trooper"),
            new NPC(14, 32, "maglor the sorcerer")
        ]
        
        /****************************************
         * MISCALLENEOUS FUNCTIONS
         ****************************************/
        
        function setRooms() {
            for (var i = 0; i < globalMap.length; i++) {
                for (var j = 0; j < globalMap[i].length; j++) {
                    rooms.push(new Room(globalMap[i][j], j, i));
                }
            }
            for (var r = 0; r < rooms.length; r++) {
                rooms[r].run();
                rooms[r].spawnC();
            }
        }
        
        function locStats() {
            for (var r = 0; r < rooms.length; r++) {
                var R = rooms[r];
                R.run();
                if (R.x === player.x && R.y === player.y) {
                    say(R.d);
                    if (R.items.length > 0) {
                        var itemStr = R.items;
                        var regex1 = /(a|e|i|o|u)/i;
                        var result = "";
                        if (itemStr.length > 1) {
                            for (var w = 0; w < itemStr.length; w++) {
                                if ((itemStr[w].split('')[0]).match(regex1)) {
        
                                    if (w > 0 && w < itemStr.length - 1) {
                                        result += ", an " + itemStr[w];
                                    } else if (w === itemStr.length - 1) {
                                        result += ", and an " + itemStr[w];
                                    } else {
                                        result += " an " + itemStr[w];
                                    }
        
                                } else {
        
                                    if (w > 0 && w < itemStr.length - 1) {
                                        result += ", a " + itemStr[w];
                                    } else if (w === itemStr.length - 1) {
                                        result += ", and a " + itemStr[w];
                                    } else {
                                        result += " a " + itemStr[w];
                                    }
        
                                }
                            }
                        }
                        if (itemStr.length === 1) {
                            if (regex1.test(itemStr[0].split('')[0])) {
                                result = ("an " + itemStr);
                            } else {
                                result = "a " + itemStr;
                            }
                        }
                        if (itemStr.length !== 0) {
                            say(c_s("You can see " + result + ".", "rgb(0,200,150)"));
                        }
                    }
                }
            }
            for (var n = 0; n < npcs.length; n++) {
                if (npcs[n].x === player.x && npcs[n].y === player.y && !npcs[n].dead) {
                    say(npcs[n].d2);
                }
            }
            for (var d = 0; d < objects.length; d++) {
                var G = objects[d];
                if (G.x === player.x && G.y === player.y) {
                    var reg = /a|e|i|o|u/i
                    if (reg.test(G.type.split('')[0])) {
                        say("an " + G.type + " is here.");
                    } else {
                        say("a " + G.type + " is here.");
                    }
                }
            }
        
            var exitRes = [];
            if (player.y !== 0 && globalMap[player.y - 1][player.x] !== " ") {
                exitRes.push("North");
            }
            if (player.x !== globalMap[player.y].length && globalMap[player.y][player.x + 1] !== " ") {
                exitRes.push("East");
            }
            if (player.y !== globalMap.length && globalMap[player.y + 1][player.x] !== " ") {
                exitRes.push("South");
            }
            if (player.x !== 0 && globalMap[player.y][player.x - 1] !== " ") {
                exitRes.push("West");
            }
        
            say(c_s("Obvious Exits: " + exitRes.join(', '), "rgb(200,150,0)"));
        
            for (var i = 0; i < creatures.length; i++) {
                var cr = creatures[i];
                if (cr.x === player.x && cr.y === player.y) {
                    if (!cr.dead) {
                        if (cr.level < player.level || !cr.aggr) {
                            say(cr.d);
                        } else {
                            say(cr.ad);
                        }
                    } else {
                        var reg001 = /a|e|i|o|u/i;
                        if (reg001.test(cr.type.split('')[0])) {
                            say("The decaying corpse of an " + cr.type + " is here")
                        } else {
                            say("The decaying corpse of a " + cr.type + " is here")
                        }
                    }
                }
            }
            say('');
        }
        
        function playerDie() {
            for (var i = 0; i < creatures.length; i++) {
                if (creatures[i].int) {
                    clearInterval(creatures[i].int);
                }
            }
            $("#log").innerHTML = "";
            player.fighting = false;
            if (player.thirst == 2) {
                say("You died of thirst!")
            }
            if (player.hunger == 2) {
                say("You died of starvation!")
            }
            if (player.health == 2) {
                say("You died!")
            }
            say(`Unfortunately, you have died.  Died temporarily.  The modern technology nowadays allows for the reviving of humans.  Someone revived you for a reason.  You were meant to live.  Type "respawn" or "revive" to try again (you still keep your current progress).`);
        }
        
        /****************************************
         * Canvas Map
         ****************************************/
        
        var setPlayerPos = function() {
            ctx.fillStyle = "rgb(25,25,25)";
            ctx.fillRect(0, 0, 200, 200);
        
            ctx.save();
            ctx.translate(-player.x * 20 + 100, -player.y * 20 + 100);
            for (var i = 0; i < rooms.length; i++) {
                var R = rooms[i];
                ctx.strokeStyle = "rgba(0,0,0,0)";
                switch (R.t) {
                    case "f":
                        ctx.fillStyle = "rgb(150,100,200)";
                        ctx.strokeStyle = "rgb(75,100,255)";
                        break;
                    case "a":
                        ctx.fillStyle = `rgb(${random(25,75)},${random(50,100)},${random(75,125)},${random(0.1,0.9)})`;
                        ctx.strokeStyle = "rgb(75,100,225)";
                        break;
                    case "t":
                        ctx.fillStyle = "rgb(100,100,200)";
                        break;
                    case "A":
                        ctx.fillStyle = "rgb(100,100,150)";
                        break;
                    case "©":
                        ctx.fillStyle = "rgb(150,175,200)";
                        ctx.strokeStyle = "rgb(100,100,200)";
                        break;
                    case "i":
                        ctx.fillStyle = "rgb(27,27,27)";
                        break;
                    case "e":
                        ctx.fillStyle = "rgb(255,255,255)";
                        break;
                    case "T":
                    case ":":
                    case "@":
                        ctx.fillStyle = "rgb(100,100,100)";
                        break;
                    case "-":
                    case "|":
                        ctx.fillStyle = "rgb(150,150,150)";
                        break;
                    case "+":
                    case "#":
                        ctx.fillStyle = "rgb(125,125,125)";
                        break;
                    case "\"":
                    case "=":
                        ctx.fillStyle = "rgb(175,175,175)";
                        break;
                    case "g":
                        ctx.fillStyle = "rgb(100,150,100)";
                        break;
                    case "h":
                        ctx.fillStyle = "rgb(175,150,125)";
                        break;
                    case "b":
                        ctx.fillStyle = "rgb(175,150,100)";
                        break;
                    case "B":
                        ctx.fillStyle = "rgb(50,50,50)";
                        break;
                    case "H":
                        ctx.fillStyle = "rgb(200,175,150)";
                        break;
                    case "r":
                        ctx.fillStyle = "rgb(175,175,125)";
                        break;
                    case "G":
                        ctx.fillStyle = "rgb(100,80,80)";
                        break;
                    case "w":
                        ctx.fillStyle = "rgb(150,150,175)";
                        break;
                    case "W":
                        ctx.fillStyle = "rgb(50,75,255)";
                        break;
                    case " ":
                        ctx.fillStyle = "rgb(25,25,25)";
                        break;
                    case "d":
                        ctx.fillStyle = "rgb(175,100,0)";
                        break;
                    case "!":
                        ctx.fillStyle = "rgb(200,200,225)";
                        break;
                    case "$":
                        ctx.fillStyle = "rgb(50,150,0)";
                        break;
                    case "%":
                        ctx.fillStyle = "rgb(150,75,0)";
                        break;
                    case "^":
                        ctx.fillStyle = "rgb(100,125,100)";
                        break;
                }
                ctx.fillRect(R.x * 20, R.y * 20, 20, 20);
                ctx.strokeRect(R.x * 20, R.y * 20, 20, 20);
                ctx.stroke();
        
            }
            for (var j = 0; j < creatures.length; j++) {
                var Cr = creatures[j];
                if (!Cr.dead) {
                    ctx.beginPath();
                    ctx.arc(Cr.x * 20 + 10 + (Math.random() * 10 - 5), Cr.y * 20 + 10 + (Math.random() * 10 - 5), 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = "rgb(150,0,0)";
                    ctx.fill();
                }
            }
            for (var j = 0; j < objects.length; j++) {
                var Cr = objects[j];
                if (!Cr.dead) {
                    ctx.beginPath();
                    ctx.arc(Cr.x * 20 + 10, Cr.y * 20 + 10, 4, 0, Math.PI * 2);
                    ctx.fillStyle = "rgb(100,100,100)";
                    ctx.strokeStyle = "black";
                    ctx.stroke();
                    ctx.fill();
                }
            }
            for (var k = 0; k < npcs.length; k++) {
                var n = npcs[k];
                if (!n.dead) {
                    if (!n.satisfied) {
                        ctx.beginPath();
                        ctx.arc(n.x * 20 + 5, n.y * 20 + 5, 2.5, 0, Math.PI * 2);
                        ctx.fillStyle = "rgb(255,200,0)";
                        ctx.strokeStyle = "rgb(0,0,0)";
                        ctx.stroke();
                        ctx.fill();
                    }
                    if (n.satisfied) {
                        ctx.beginPath();
                        ctx.arc(n.x * 20 + 5, n.y * 20 + 5, 2.5, 0, Math.PI * 2);
                        ctx.fillStyle = "rgb(100,100,100)";
                        ctx.strokeStyle = "rgb(0,0,0)";
                        ctx.stroke();
                        ctx.fill();
                    }
                }
            }
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.arc(player.x * 20 + 10, player.y * 20 + 10, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "rgb(0,200,255)";
            ctx.stroke();
            ctx.fill();
            ctx.restore();
        };
    
        $("#log").innerHTML = "";
        say(`
        ≤…_____………___………_…………………___……___……___…_____……_____…__………__
        /……__…\\…/…_…\\…|…|……………/…_…\\…|……\\/……||_………_||_………_|\\…\\…/…/
        |…/……\\//…/_\\…\\|…|…………/…/_\\…\\|….…….…|……|…|…………|…|………\\…V…/…
        |…|…………|……_……||…|…………|……_……||…|\\/|…|……|…|…………|…|…………\\…/……
        |…\\__/\\|…|…|…||…|____|…|…|…||…|……|…|…_|…|_………|…|…………|…|……
        …\\____/\\_|…|_/\\_____/\\_|…|_/\\_|……|_/…\\___/………\\_/…………\\_/……≥
        `.replace(/\|/g, (a) => c_s(a, "rgb(0,200,255)")).replace(/\/…/g, c_s("/…", "rgb(100,100,100)")).replace(/\\/g, c_s("\\", "rgb(125,125,125)")).replace(/_/g, c_s("_", "rgb(100,150,200)")))
        say(`Aliens have invaded earth and are destroying as many life forms as they can.  Even the most powerful weapons made by humans cannot harm them.  You must survive and destroy their ship which lies in Saudi Arabia.
        The ship is so massive that it covers 25% of the country.  Break the core and break the aliens.
        
        You must fight your way to survive as well.  Battle aliens, sneaky robbers, fufill quests, and destroy your enemies.
        
        Type "help" anytime to learn how to play the game.
        ≤--------------------------------------------≥`)
        
        
        setRooms();
        locStats();
        parseColors();
        setPlayerPos();
        
        /****************************************
         * COMMAND HANDLING
         ****************************************/
        
        function commands() {
            var c = $("#com").value.split('').splice(1, 10000).join('');
            var c_br = c.split(' ');
            if(window.innerWidth < 700){
                if(c == "!scnsht"){
                        $("#log").innerHTML = "";
                        parseColors();
                        say(`
        ___________________________________________________________
        
        
        ≤…_____………___………_…………………___……___……___…_____……_____…__………__
        /……__…\\…/…_…\\…|…|……………/…_…\\…|……\\/……||_………_||_………_|\\…\\…/…/
        |…/……\\//…/_\\…\\|…|…………/…/_\\…\\|….…….…|……|…|…………|…|………\\…V…/…
        |…|…………|……_……||…|…………|……_……||…|\\/|…|……|…|…………|…|…………\\…/……
        |…\\__/\\|…|…|…||…|____|…|…|…||…|……|…|…_|…|_………|…|…………|…|……
        …\\____/\\_|…|_/\\_____/\\_|…|_/\\_|……|_/…\\___/………\\_/…………\\_/……≥
        
        ……………………………………__
        …………………………………/…/
         __…………………………|…|_______________________________
        /……\\_______/…………………………………………………………………………………………\\
        |………_______………()--()--()--()--()--()--()--()--->
        \\__/…………………\\……________________________________/
        ………………………………|…|
        …………………………………\\_\\
        
        
        ___________________________________________________________
        `.replace(/\|/g, (a) => c_s(a, "rgb(0,200,255)")).replace(/\/…/g, c_s("/…", "rgb(100,100,100)")).replace(/\\/g, c_s("\\", "rgb(125,125,125)")).replace(/_/g, c_s("_", "rgb(100,150,200)")));
                        parseColors();
                    }else{
                    var a = window.open("","");
                    a.document.open();
                    a.document.write(
                        "<DOCTYPE html>"+document.documentElement.outerHTML.replaceAll("KAInfiniteLoopProtect();","")
                    );
                }
            } else{
                try {
                    setPlayerPos();
                    res = false;
                    if (!player.isDead) {
            
            
            
            
            
            
            
                        //moving
                        {
                            if (search(words.flee, c)) {
                                if (player.fighting) {
                                    var exitRes = [];
                                    if (player.y !== 0 && globalMap[player.y - 1][player.x] !== " ")
                                        exitRes.push("North");
                                    if (player.x !== globalMap[player.y].length && globalMap[player.y][player.x + 1] !== " ")
                                        exitRes.push("East");
                                    if (player.y !== globalMap.length && globalMap[player.y + 1][player.x] !== " ")
                                        exitRes.push("South");
                                    if (player.x !== 0 && globalMap[player.y][player.x - 1] !== " ")
                                        exitRes.push("West");
            
                                    var rollChance = Math.random();
                                    if (rollChance < 0.5) {
                                        say("You fail to escape the fight!")
                                    } else {
                                        
                                        player.fighting = false;
                                        clearInterval(myInt);
                                        for (var i = 0; i < creatures.length; i++) {
                                            if (creatures[i].fighting) {
                                                clearInterval(creatures[i].int);
                                                creatures[i].fighting = false;
                                            }
                                        }
                                        var dir = getEl(exitRes);
                                        if (dir == "North") {
                                            player.y--;
                                        } else if (dir == "East") {
                                            player.x++;
                                        } else if (dir == "South") {
                                            player.y++;
                                        } else {
                                            player.x--;
                                        }
                                        say("You manage to escape the fight.  You flee " + dir);
                                        
                                    }
                                } else {
                                    say("You can't flee if you are not in a fight.")
                                }
                            }
                            //
                            if (search(words.north, c)) {
                                if (!player.fighting) {
                                    if (player.y !== 0) {
                                        if (globalMap[player.y - 1][player.x] !== " ") {
                                            player.y--;
                                            say("You go north");
                                            locStats();
                                        } else {
                                            say("You can't go north");
                                        }
                                    } else {
                                        say("You can't go north");
                                    }
                                } else {
                                    say("You are in the middle of a fight!")
                                }
                            }
                            if (search(words.south, c)) {
                                if (!player.fighting) {
                                    if (player.y !== globalMap.length) {
                                        if (globalMap[player.y + 1][player.x] !== " ") {
                                            player.y++;
                                            say("You go south");
                                            locStats();
                                        } else {
                                            say("You can't go south");
                                        }
                                    } else {
                                        say("You can't go south");
                                    }
                                } else {
                                    say("You are in the middle of a fight!")
                                }
                            }
                            if (search(words.east, c)) {
                                if (!player.fighting) {
                                    if (player.x !== globalMap[player.y].length - 1) {
                                        if (globalMap[player.y][player.x + 1] !== " ") {
                                            player.x++;
                                            say("You go east");
                                            locStats();
                                        } else {
                                            say("You can't go east");
                                        }
                                    } else {
                                        say("You can't go east");
                                    }
                                } else {
                                    say("You are in the middle of a fight!")
                                }
                            }
                            if (search(words.west, c)) {
                                if (!player.fighting) {
                                    if (player.x !== 0) {
                                        if (globalMap[player.y][player.x - 1] !== " ") {
                                            player.x--;
                                            say("You go west");
                                            locStats();
                                        } else {
                                            say("You can't go west");
                                        }
                                    } else {
                                        say("You can't go west");
                                    }
                                } else {
                                    say("You are in the middle of a fight!")
                                }
                            }
                        }
                        //examining stuff
                        {
                            if (search(words.look, c_br[0]) && !c_br[1]) {
                                locStats();
                            }
                            if (search(words.look, c_br[0]) && c_br[1]) {
                                var matchedEl = matchEl(player.inv, c.split(' ').splice(1, 10000).join(' '));
                                if (matchedEl) {
                                    var IM = Items[matchedEl];
                                    if (IM.type === "food" || IM.type === "drink") {
                                        say(`≤ᚭ---------------${matchedEl}---------------ᚮ≥\n` + Items[matchedEl].d + `
                                        - Replenishes ${Items[matchedEl].healthG} Health
                                        - Fills ${Items[matchedEl].hungerG} Hunger
                                        - Fills ${Items[matchedEl].thirstG} Thirst
                                        ≤ᚭ----------------------------------------ᚮ≥`);
                                    }
                                    if (IM.type === "one-use") {
                                        say(`≤ᚭ---------------${matchedEl}---------------ᚮ≥\n` + Items[matchedEl].desc + `
                                        - Replenishes ${Items[matchedEl].heal} Health
                                        - Deals ${Items[matchedEl].damage} Damage (to opponent)
                                        ≤ᚭ----------------------------------------ᚮ≥`);
                                    }
                                    if (IM.type === "eq") {
                                        say(`≤ᚭ---------------${matchedEl}---------------ᚮ
                                    
                                    ${Items[matchedEl].desc}
            
                                    Armor Points (Bonus Health): ${IM.apts}
                                    Damage Bonus: ${IM.dpts}
                                    Attack Speed Bonus: ${IM.asp}
                                    Bonus Critical Chance: ${IM.chance[0]*100}%
                                    Bonus Block Chance: ${IM.chance[1]*100}%
                                    Bonus Dodge Chance: ${IM.chance[2]*100}%
                                    Health Regeneration Bonus: ${IM.chance[3]}
                                    Slot: ${IM.slot}
                                    
                                    ᚭ----------------------------------------ᚮ≥`);
                                    }
                                    if (IM.type === "misc"||IM.type === "useable") {
                                        say(`≤ᚭ---------------${matchedEl}---------------ᚮ≥ <br> ${Items[matchedEl].desc}<br><br> ≤ᚭ----------------------------------------ᚮ≥`);
                                    }
                                }
                            }
                        }
                        //interacting (eat, take, drop, wear, etc)
                        {
            
            
                            if (player.fighting) {
                                if (search(words.use, c_br[0])) {
                                    if (c_br[1]) {
                                        var ml = matchEl(player.inv, c_br[1]);
                                        if(ml){
                                            if (Items[ml].type == "one-use") {
                                                for (var i = 0; i < creatures.length; i++) {
                                                    if (creatures[i].fighting && creatures[i].x === player.x && creatures[i].y === player.y && !creatures[i].dead && player.fighting) {
                                                        creatures[i].health -= Items[ml].damage;
                                                        player.health += Items[ml].heal;
                                                    }
                                                }
                                                say(Items[ml].use);
                                                setTimeout(function() {
                                                    rem(player.inv, ml);
                                                }, 100)
                
                                            }
                                        }else{
                                            say("You don't have that.")
                                        }
                                    } else {
                                        say("What do you want to use?")
                                    }
                                }
                            }
                            //equipping equippable equipment
                            if (search(words.wear, c_br[0])) {
                                var matchedEld = matchEl(player.inv, c.split(' ').splice(1, 10000).join(' '));
                                if (c_br[1]) {
                                    if (matchedEld) {
                                        if (Items[matchedEld].type === "eq") {
                                            if (player.wearLimit[Items[matchedEld].slot] > 0) {
                                                rem(player.inv, matchedEld)
                                                player.eq.push(matchedEld);
                                                player.wearLimit[Items[matchedEld].slot]--;
                                                player.health += Items[matchedEld].apts;
                                                say("Equipped.")
                                            } else {
                                                var remItem = "";
                                                for (var d = 0; d < player.eq.length; d++) {
                                                    if (Items[player.eq[d]].slot === Items[matchedEld].slot) {
                                                        remItem = player.eq[d];
                                                    }
                                                }
                                                say("You will have to remove a/an " + remItem + " before you equip that.");
                                            }
                                        } else {
                                            say("You can't equip that.")
                                        }
                                    } else {
                                        say("You don't have that")
                                    }
                                } else {
                                    say("What do you want to equip?")
                                }
                            }
                            //removing removable removableItems
                            if (search(words.remove, c_br[0])) {
                                if (search(words.all, c_br[1])) {
                                    for (var m = 0; m < player.eq.length; m++) {
                                        player.inv.push(player.eq[m]);
                                    }
                                    player.eq = [];
                                    player.wearLimit = {
                                        //one helmet
                                        "helmet": 1,
                                        //one suit of armor
                                        "armor": 1,
                                        //one shield
                                        "shield": 1,
                                        //one weapon
                                        "weapon": 1,
                                        //one pair of pants
                                        "pants": 1,
                                        //two boots
                                        "shoes": 1,
                                        //accelerators
                                        "accelerator": 5,
                                    };
                                    say("All Equipment Removed.");
                                    say("You aren't wearing anything.  Quick, hide before someone sees you!<br>")
                                } else {
                                    var matchedElc = matchEl(player.eq, c.split(' ').splice(1, 10000).join(' '));
                                    if (c_br[1]) {
                                        if (matchedElc) {
                                            player.bonusHealth -= Items[matchedElc].apts;
                                            player.wearLimit[Items[matchedElc].slot]++;
                                            rem(player.eq, matchedElc);
                                            player.inv.push(matchedElc);
                                            say("Removed.");
                                        } else {
                                            say("You aren't wearing that")
                                        }
                                    } else {
                                        say("What do you want to remove?")
                                    }
                                }
                            }
                        
                            //look at your inventory
                            if (search(words.inv, c)) {
                                if (player.inv.length > 0) {
                                    say("You are carrying (" + (player.inv.length) + "/20):")
                                    for (var z = 0; z < player.inv.length; z++) {
                                        say((z + 1) + ". " + player.inv[z]);
                                    }
                                    say("");
                                } else {
                                    say("You aren't carrying anything.<br>")
                                }
                            }
                            //look at your equipment
                            if (search(words.eq, c)) {
                                if (player.eq.length !== 0) {
                                    say("You are wearing: ");
                                    for (var f = 0; f < player.eq.length; f++) {
                                        say("[" + Items[player.eq[f]].slot + "] " + player.eq[f]);
                                    }
                                    say("")
                                } else {
                                    say("You are not wearing anything.  Quick!  Hide before someone sees you!")
                                }
                            }
                            //taking things
                            for (var v = 0; v < rooms.length; v++) {
                                var R = rooms[v];
                                if (player.x === R.x && player.y === R.y) {
                                    var matchedElg = matchEl(R.items, c.split(' ').splice(1, 10000).join(' '));
                                    if (search(words.take, c_br[0]) && c_br[1] && matchedElg) {
                                        if(player.inv.length < 20){
                                        rem(R.items, matchedElg);
                                        player.inv.push(matchedElg);
                                        say("Taken.<br>");
                                    } else{
                                        say("You can't carry any more.")
                                    }
                                    }
                                    if (search(words.take, c_br[0]) && c_br[1] && !matchedElg) {
                                        if (search(words.all, c_br[1])) {
                                            for (var a = 0; a < R.items.length; a++) {
                                                if(player.inv.length < 20){
                                                    player.inv.push(R.items[a]);
                                                } else{
                                                    say("You can't carry any more.")
                                                }
                                            }
                                            R.items = [];
                                            say("All Items Taken.")
                                        } else {
                                            say("That isn't here.<br>")
                                        }
                                    }
                                    if (search(words.take, c_br[0]) && !c_br[1]) {
                                        say("What do you want to take?<br>")
                                    }
                                }
                            }
                            //dropping things
                            for (var h = 0; h < rooms.length; h++) {
                                var Ro = rooms[h];
                                if (player.x === Ro.x && player.y === Ro.y) {
                                    var matchedElv = matchEl(player.inv, c.split(' ').splice(1, 10000).join(' '));
                                    if (search(words.drop, c_br[0]) && c_br[1] && matchedElv) {
                                        rem(player.inv, matchedElv);
                                        Ro.items.push(matchedElv);
                                        say("Dropped.<br>");
                                    }
                                    if (search(words.drop, c_br[0]) && c_br[1] && !matchedElv) {
                                        if (search(words.all, c_br[1])) {
                                            for (var b = 0; b < player.inv.length; b++) {
                                                Ro.items.push(player.inv[b]);
                                            }
                                            player.inv = [];
                                            say("All Items Dropped")
                                        } else {
                                            say("You don't have that.<br>")
                                        }
                                    }
                                    if (search(words.drop, c_br[0]) && !c_br[1]) {
                                        say("What do you want to drop?<br>")
                                    }
                                }
                            }
                            //eating things
                            if (search(words.eat, c_br[0]) && c_br[1]) {
                                var matchedElx = matchEl(player.inv, c.split(' ').splice(1, 10000).join(' '));
                                if (matchedElx) {
                                    if (Items[matchedElx].type === "food") {
                                        player.health += Items[matchedElx].healthG;
                                        player.hunger += Items[matchedElx].hungerG;
                                        player.thirst += Items[matchedElx].thirstG;
                                        rem(player.inv, matchedElx);
                                        say("Eaten.<br>");
                                    } else {
                                        say("You can't eat that.<br>")
                                    }
                                } else {
                                    say("You don't have that<br>")
                                }
                            }
            
                            if (search(words.drink, c_br[0]) && c_br[1]) {
                                var matchedEls = matchEl(player.inv, c.split(' ').splice(1, 10000).join(' '));
                                if (matchedEls) {
                                    if (Items[matchedEls].type === "drink") {
                                        player.health += Items[matchedEls].healthG;
                                        player.hunger += Items[matchedEls].hungerG;
                                        player.thirst += Items[matchedEls].thirstG;
                                        rem(player.inv, matchedEls);
                                        say("Drank.<br>");
                                    } else {
                                        say("You can't drink that.<br>")
                                    }
                                } else {
                                    say("You don't have that<br>")
                                }
                            }
                        }
                        //other commands (say, clear, help, etc)
                        {
                            if(search(words.scan, c_br[0])){
                                for(var i = 0; i < creatures.length; i++){
                                    var c = creatures[i];
                                    if(!c.dead){
                                        if(c.x === player.x&&c.y < player.y&&Math.abs(c.y-player.y) < 4){
                                            say("A "+c.type+" is "+Math.abs(c.y-player.y) + " spaces north of you.")
                                        }
                                        if(c.x === player.x&&c.y > player.y&&Math.abs(c.y-player.y) < 4){
                                            say("A "+c.type+" is "+Math.abs(c.y-player.y) + " spaces south of you.")
                                        }
                                        if(c.y === player.y&&c.x < player.x&&Math.abs(c.x-player.x) < 4){
                                            say("A "+c.type+" is "+Math.abs(c.x-player.x) + " spaces west of you.")
                                        }
                                        if(c.y === player.y&&c.x > player.x&&Math.abs(c.x-player.x) < 4){
                                            say("A "+c.type+" is "+Math.abs(c.x-player.x) + " spaces east of you.")
                                        }
                                    }
                                }
                                
                            }
                            if (search(words.quests, c_br[0])) {
                                if (player.quests.length !== 0) {
                                    say("Your Quests (" + player.quests.length + "):");
                                    for (var i = 0; i < player.quests.length; i++) {
                                        say(`- ${player.quests[i]} : ${player.qd[i]}`)
                                    }
                                } else {
                                    say("You don't have any quests.")
                                }
                            }
                            if (search(words.talk, c_br[0])) {
                                say("You say, \"" + c.split(' ').splice(1, 10000).join(' ') + "\" to yourself.<br>")
                            }
                            if (search(words.clear, c)) {
                                $("#log").innerHTML = "";
                                locStats();
                            }
                        }
            
                        for (var y = 0; y < creatures.length; y++) {
                            creatures[y].run();
                        }
                        for (var ob = 0; ob < objects.length; ob++) {
                            objects[ob].run();
                        }
                        for (var n = 0; n < npcs.length; n++) {
                            npcs[n].run();
                        }
                        setPlayerPos();
            
            
            
            
            
            
                    }
                    if (player.isDead) {
                        if (search(['respawn', 'revive'], c)) {
                            say("You feel a sudden sharp pain like lightning pierce your body.  Your eyes open and your lungs fill with air.  Your soul attaches itself to your body and you are back in the world, alive again.<br>")
                            player.x = spawnPoints[0];
                            player.y = spawnPoints[1];
                            player.isDead = false;
                            player.died = false;
                            player.health = player.maxHealth;
                            player.hunger = player.maxH;
                            player.thirst = player.maxT;
                            setPlayerPos();
                            locStats();
                        } else {
                            say('Type "respawn" to revive yourself');
            
                        }
                    }
            
                    if (!res) {
                        say(getEl(phrasesNotAllowed) + "<br>");
                    }
            
            
            
                    if (search(words.help, c_br[0])) {
                        if (!c_br[1]) {
                            say(`<div class="-sec">
                        <div>Help Options</div>
                        Welcome to the help options menu!  There are a series of guides that you can read.  Here is a list of tutorials that you can read:
                        
                        1. Moving
                        2. Examining things
                        3. Item Interaction
                        4. Fighting
                        5. Interacting with NPCs
            
                        Start one of the tutorials by typing "help [tutorial number]" e.g. "help 1"
                        </div>`);
                        }
                        if (c_br[1]) {
                            if (c_br[1] === "1") {
                                say(`<div class="-sec">
                            <div>Help Options > Moving</div>
                            Moving is the most basic thing in an interactive fiction game.
                            In Interactive Fiction games, you can move north, south, east, west, and sometimes up and down.  Here are a list of commands for moving:
                            ${c_s("Moving North","rgb(0,200,0)")}:
                            'go north', 'north', 'go n', 'n'
                            ${c_s("Moving South","rgb(0,200,0)")}:
                            'go south', 'south', 'go s', 's'
                            ${c_s("Moving East","rgb(0,200,0)")}:
                            'go east', 'east', 'go e', 'e'
                            ${c_s("Moving West","rgb(0,200,0)")}:
                            'go west', 'west', 'go w', 'w'
                            As you can see, there are shorthand words for moving.  The easiest way to move would be by just using the shortest commands.
                            If you need to see these commands again, just type 'help 1' at any time.
                            
                            </div>`)
                            }
                            if (c_br[1] === "2") {
                                say(`<div class="-sec">
                            <div>Help Options > Examining Things</div>
                            Examining things is probably the most important thing in a text adventure that you will have to use.
                            Type "look" to examine the location you are in.
                            Type "look [object/item]" to examine an object (like a bed) that is in the same location you are in or an item in your inventory.
                            Looking at an armor or weapon will show you it's stats.  Looking at a food or drink item will show how much health, hunger, and/or thirst it replenishes.  You can also examine NPCs and Enemies.  To scan your surroundings for enemies, type 'scan' to see what type of enemies are close by you.
                            </div>`)
                            }
                            if (c_br[1] === "3") {
                                say(`<div class="-sec">
                            <div>Help Options > Item Interaction</div>
                            Item interaction includes eating, drinking, equipping, taking, dropping, and more.  If you want to become more powerful, you have to keep looting items and upgrading yourself.
                            ${c_s("Taking Items","rgb(0,200,0)")}
                            Let's say you are in a location and there is an apple there.  All you have to do is type 'take apple' and it will be added into your inventory.  If you want to take any item, type 'take &lt;item&gt;'.
                            ${c_s("Dropping Items","rgb(0,200,0)")}
                            If you don't want something in your inventory (some items are classified as useless), type 'drop &lt;item&gt;'.  It will be removed from your inventory and placed in the location you are currently in.
                            ${c_s("Equipping Armor & Weapons","rgb(0,200,0)")}
                            If you have a weapon or a piece of armor in your inventory, type 'equip &lt;item&gt;'.  The item will then be removed from your inventory and placed on your body.
                            ${c_s("Removing Equipment","rgb(0,200,0)")}
                            Sometimes, you will be prompted to remove a piece of armor before you equip another type.  Simply type 'remove &lt;item&gt;' and the item will be taken from your equipment and placed in your inventory.
                            Don't forget that you can come back any time by typing 'help 3'.
                            </div>`)
                            }
                            if (c_br[1] === "4") {
                                say(`<div class="-sec">
                            <div>Help Options > Fighting</div>
                            Combat is probably the most fun part of playing an Interactive Fiction game.  It's pretty simple as well as all you do is wait and watch to see who dies.
                            ${c_s("Starting a Fight","rgb(0,200,0)")}
                            Starting a fight is very simple.  Some creatures are aggresive.  That means that they will attack you if you enter their territory and if your level is lower than theirs.  If a mob is passive, that means that they will not fight you.  You will have to type 'fight [creature]' if you want to fight them.
                            ${c_s("Why Fight?","rgb(0,200,0)")}
                            If you kill a creature, most of the time, they will drop items for you to take.  You can get anywhere from useless items to top-notch weapons.
                            ${c_s("Combat Tips","rgb(0,200,0)")}
                            Usually, eating food and drinking water heals you.  You can eat and drink when you are fighting.  Also, if you have an item like a Grenade, type "use grenade" to use up that item.  Keep an eye on your health bar as you fight.  If you don't think you can win the fight, type 'flee' to run away.  Sometimes you will manage to escape while other times, you will fail.  If you die, you will still keep your inventory, level, xp and all, but you will start at your spawn point again.
                            Don't forget that you can come back and view this again by typing 'help 4'
                            </div>`)
                            }
                            if (c_br[1] === "5") {
                                say(`<div class="-sec">
                            <div>Help Options > Interacting with NPCs</div>
                            NPCs (Non-Player Characters) can give you quests and send you on wild adventures.  Rewards can be armor, weapons, XP, money, or more.  Type 'talk &lt;character&gt;' to interact with them.  If they have a quest for you, they will give it to you.   Once the quest is fufilled, you will get your reward.
                            </div>`);
                            }
            
            
                        }
                    }
                    
                    if (c == "attacks") {
                        say(player.attarr);
                    }
                    console.log(player.x, player.y)
                    parseColors();
                } catch (err) {
                    say(err);
                    console.log(err);
                }
            }
        }
        
        /****************************************
         * KEYUP EVENT LISTENER
         ****************************************/
        
        $("#com").addEventListener("keyup", function(e) {
            if (!$("#com").value.includes(">") || $("#com").value[0] !== ">") {
                var s = $("#com").value.replaceAll(">", "");
                $("#com").value = ">" + s;
            }
            if (e.keyCode === 38) {
                $("#com").value = past;
            }
            if (e.keyCode === 13 && $("#com").value !== ">") {
        
                commands()
                past = ($("#com").value);
                $("#com").select();
        
        
            }
        })
        
        /****************************************
         * Player Stats
         ****************************************/
        
        //update player every tenth of a second
        setInterval(function() {
            var highestDamage = 0;
            var pws = player.attarr;
            for(var i = 0; i < pws.length; i++){
                if(attackPower[pws[i]] > highestDamage){
                    highestDamage = attackPower[pws[i]];
                }
            }
        
            player.maxHealth = 100 + player.bonusHealth;
            player.maxDamage = (5 + player.damageBonus) * (1.1 ** player.level);
            player.healthRegen = 2 + player.plusReg;
            player.blockChance = 0 + player.bBlock;
            player.critChance = 0.05 + player.bCrit;
            player.dodgeChance = 0 + player.bDodge;
            player.attackRate = 3000 - (player.bAttack * 10);
            player.attarr = ["punch", "kick"];
            var overallA = 0,
                overallD = 0,
                overallHR = 0,
                overallBlock = 0,
                overallCrit = 0,
                overallDodge = 0,
                overallSpeed = 0,
                attackArr = [];
            for (var i = 0; i < player.eq.length; i++) {
                overallA += Items[player.eq[i]].apts;
                overallD += Items[player.eq[i]].dpts;
                overallHR += Items[player.eq[i]].chance[3];
                overallCrit += Items[player.eq[i]].chance[0];
                overallBlock += Items[player.eq[i]].chance[2];
                overallDodge += Items[player.eq[i]].chance[1];
                overallSpeed += Items[player.eq[i]].asp;
                attackArr.push(Items[player.eq[i]].attacks);
            }
            for (var q = 0; q < attackArr.length; q++)
                for (var p = 0; p < attackArr[q].length; p++)
                    if (attackArr[q][p])
                        player.attarr.push(attackArr[q][p]);
            player.attacks = [...new Set(player.attarr)];
            if (overallCrit > 0.35) {
                overallCrit = 0.35;
            }
            if (overallBlock > 0.2) {
                overallBlock = 0.2;
            }
            if (overallDodge > 0.2) {
                overallDodge = 0.2;
            }
            if (player.attackRate < 500) {
                player.attackRate = 500;
            }
            
            player.bonusHealth = overallA;
            player.damageBonus = overallD;
            player.plusReg = overallHR;
            player.bBlock = overallBlock;
            player.bCrit = overallCrit;
            player.bDodge = overallDodge;
            player.bAttack = overallSpeed;
            player.minDamage = (player.maxDamage/2);
            $("#mainStats").innerHTML = `
            Health: ${Math.round(player.health)}/${player.maxHealth}<br>
            Hunger: ${Math.round(player.hunger)}/${player.maxH}<br>
            Thirst: ${Math.round(player.thirst)}/${player.maxT}<br>
            XP: ${player.xp}<br>
            Level: ${player.level}<br>
            Damage: ${Math.floor(player.minDamage)}-${Math.floor(player.maxDamage*highestDamage)}<br>
            Attack Rate: ${player.attackRate/1000}s<br>
            Dodge Chance: ${Math.floor(player.dodgeChance*100)}%<br>
            Block Chance: ${Math.floor(player.blockChance*100)}%<br>
            Critical Chance: ${Math.floor(player.critChance*100)}%<br>`;
            if (player.health < player.maxHealth) {
                player.health += player.healthRegen / 100;
            }
            if (player.health >= player.maxHealth) {
                player.health = player.maxHealth;
            }
            if (player.hunger >= player.maxH) {
                player.hunger = player.maxH;
            }
            if (player.thirst >= player.maxT) {
                player.thirst = player.maxT;
            }
            if (!player.isDead) {
                player.thirst -= 0.01;
                player.hunger -= 0.005;
            }
            if (player.thirst < 1) {
                player.died = true;
            }
            if (player.hunger < 1) {
                player.died = true;
            }
            if (player.health < 1) {
                player.died = true;
            }
            if (player.died) {
                if (player.health < 1) {
                    player.health = 2;
                }
                if (player.thirst < 1) {
                    player.thirst = 2;
                }
                if (player.hunger < 1) {
                    player.hunger = 2;
                }
                playerDie();
                player.died = false;
                player.isDead = true;
            }
            for (var b = 0; b < creatures.length; b++) {
                if (creatures[b].health < 0 || creatures[b].health === 0) {
                    creatures[b].dead = true;
                }
            }
            if (player.critChance >= 0.2) {
                player.critChance = 0.2;
            }
            if (player.critChance >= 0.2) {
                player.critChance = 0.2;
            }
            if (player.dodgeChance >= 0.15) {
                player.critChance = 0.15;
            }
            if (player.blockChance >= 0.15) {
                player.blockChance = 0.15;
            }
            if (player.xp >= (500+(100*player.level))) {
                var diffOut = player.xp - (500+(100*player.level));
                player.level++;
                player.minDamage += 0.5
                say(c_s("You leveled up to level " + player.level, "rgb(0,200,0)"));
                player.xp = diffOut;
            }
            //save the player
            localStorage.setItem("playerstats", JSON.stringify(player));
            //clear part of the log so that the game still keeps a high FPS rate
            var logSplit = $("#log").innerHTML.split('<br>');
            if (logSplit.length > 35) {
                logSplit.shift();
                $("#log").innerHTML = logSplit.join('<br>');
            }
        
        
        }, 100);
    