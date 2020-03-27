(function(window, document) {
    'use strict'
    const supports = !!document.querySelector

    const defaults = {
        baseURLG: 'https://thevirustracker.com/free-api?global=stats',
        baseURLE: 'https://thevirustracker.com/free-api?countryTotal=BR',
        eleMain: document.getElementById('info'),

        eleInfcG: '#infcG',
        eleCurG: '#curG',
        eleKillG: '#killG',

        eleTcB: '#tcB',
        eleCsB: '#csB',
        eleCnB: '#cnB',
        eleKB: '#kB',
        eleKnB: '#knB',
        eleCB: '#cB',
    }

    const settings = {}

    const main = (event) => {
        var geral = conectDb()
        var br = conectDbE()


        settings.eleInfcG.innerHTML = fN(geral.results[0].total_cases)
        settings.eleKillG.innerHTML = fN(geral.results[0].total_deaths)
        settings.eleCurG.innerHTML = fN(geral.results[0].total_recovered)




        settings.eleTcB.innerHTML = fN(br.countrydata[0].total_cases)
        settings.eleCsB.innerHTML = fN(br.countrydata[0].total_serious_cases)
        settings.eleCnB.innerHTML = fN(br.countrydata[0].total_new_cases_today)
        settings.eleKB.innerHTML = fN(br.countrydata[0].total_deaths)
        settings.eleKnB.innerHTML = fN(br.countrydata[0].total_new_deaths_today)
        settings.eleCB.innerHTML = fN(br.countrydata[0].total_recovered)



        viewG(geral.results[0].total_cases, geral.results[0].total_deaths, geral.results[0].total_recovered)
        viewB(br.countrydata[0].total_cases, br.countrydata[0].total_deaths, br.countrydata[0].total_recovered)


        console.log(geral)
        console.log(br)
    }

    const fN = function(value) {
        var n = value.toString()
        var r = ''
        var x = 0

        for (var i = n.length; i > 0; i--) {
            r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '')
            x = x == 2 ? 0 : x + 1
        }

        return r.split('').reverse().join('')
    }

    const conectDb = function() {
        var Dados = new XMLHttpRequest()
        Dados.open("GET", settings.urlG, false)
        Dados.send()
        return JSON.parse(Dados.responseText)
    }

    const conectDbE = function() {
        var Geral = new XMLHttpRequest()
        Geral.open("GET", settings.urlE, false)
        Geral.send()
        return JSON.parse(Geral.responseText)
    }

    const viewG = function(i, k, c) {
        var pieGb = document.getElementById("pieGb")
        var pieGlobal = new Chart(pieGb, {
            type: 'doughnut',
            data: {
                labels: ["Infectados", "Mortos", "Curados"],
                datasets: [{
                    data: [i, k, c],
                    backgroundColor: ['#e74a3b', '#858796', '#1cc88a'],
                    hoverBackgroundColor: ['#CE2A1B', '#63656F', '#139E6B'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        })
    }
    const viewB = function(i, k, c) {
        var pieBr = document.getElementById("pieBR")
        var pieBrasil = new Chart(pieBr, {
            type: 'doughnut',
            data: {
                labels: ["Infectados", "Mortos", "Curados"],
                datasets: [{
                    data: [i, k, c],
                    backgroundColor: ['#e74a3b', '#858796', '#1cc88a'],
                    hoverBackgroundColor: ['#CE2A1B', '#63656F', '#139E6B'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        })
    }

    const setUp = function() {
        settings.urlG = defaults.baseURLG
        settings.urlE = defaults.baseURLE

        settings.eleInfcG = defaults.eleMain.querySelector(defaults.eleInfcG)
        settings.eleCurG = defaults.eleMain.querySelector(defaults.eleCurG)
        settings.eleKillG = defaults.eleMain.querySelector(defaults.eleKillG)


        settings.eleTcB = defaults.eleMain.querySelector(defaults.eleTcB)
        settings.eleCsB = defaults.eleMain.querySelector(defaults.eleCsB)
        settings.eleCnB = defaults.eleMain.querySelector(defaults.eleCnB)
        settings.eleKB = defaults.eleMain.querySelector(defaults.eleKB)
        settings.eleKnB = defaults.eleMain.querySelector(defaults.eleKnB)
        settings.eleCB = defaults.eleMain.querySelector(defaults.eleCB)
    }

    const events = function() {
        window.addEventListener('load', main)
    }

    const init = function(options) {
        if (!supports) return
        setUp()
        events()
    }

    init()
}(window, document))