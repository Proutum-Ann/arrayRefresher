const toons = ['Dandicus Dancifer', 'Pebble Dancifer Jr.', 'Astro Novalite', 'Shelly Fossilian', 'Sprout Seedly', 'Vee Version 1', 'Dyle Timesly', 'Shrimpo', 'Poppy', 'Boxten', 'Brighteny', 'Glisten', 'Razzle & Dazzle', 'Scraps', 'Goob', 'Bassie Bloomington', 'Bobette Carolynne', 'Tisha', 'Brusha', 'Blot', 'Looey', 'Yatta', 'Coal', 'Ginger', 'Rudie', 'Cocoa', 'Flyte', 'Flutter', 'Eggson', 'Finn', 'Connie', 'Soulvester', 'Ribecca', 'Cosmo', 'Gigi', 'Rodger', 'Teagan', 'Toodles']

toons.sort();

const toonList = document.getElementById("output")

toons.forEach(function(t) {
        const toonLine = document.createElement("li")
        toonLine.style.listStyleType = 'none'

        const toonIndex = toons.indexOf(t) + 1

        toonLine.innerText = toonIndex + '. ' + t

        toonList.appendChild(toonLine)
    })