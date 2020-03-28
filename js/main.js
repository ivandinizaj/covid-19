(function(window, document) {
    'use strict'
    const supports = !!document.querySelector

    const defaults = {
        baseURLG: 'https://thevirustracker.com/free-api?global=stats',
        baseURLBR: 'https://thevirustracker.com/free-api?countryTotal=BR',
        baseURLUS: 'https://thevirustracker.com/free-api?countryTotal=US',
        eleMain: document.getElementById('info'),

        eleInfcG: '#infcG',
        eleCurG: '#curG',
        eleKillG: '#killG',

        eleTcB: '#tcB',
        eleCaB: '#caB',
        eleCsB: '#csB',
        eleCnB: '#cnB',
        eleKB: '#kB',
        eleKnB: '#knB',
        eleCB: '#cB',
        eleNcB: '#ncB',


        eleTcUs: '#tcUs',
        eleCaUs: '#caUs',
        eleCsUs: '#csUs',
        eleCnUs: '#cnUs',
        eleKUs: '#kUs',
        eleKnUs: '#knUs',
        eleCUs: '#cUs',
        eleNcUs: '#ncUs',


        eleTcMund: '#tcMund',
        eleCaMund: '#caMund',
        eleCsMund: '#csMund',
        eleCnMund: '#cnMund',
        eleKMund: '#kMund',
        eleKnMund: '#knMund',
        eleCMund: '#cMund',
        eleNcMund: '#ncMund',
    }

    const settings = {}

    const main = (event) => {
        const geral = conectDb()
        const br = conectDbBR()
        const us = conectDbUS()


        settings.eleInfcG.innerHTML = fN(geral.results[0].total_cases)
        settings.eleKillG.innerHTML = fN(geral.results[0].total_deaths)
        settings.eleCurG.innerHTML = fN(geral.results[0].total_recovered)


        settings.eleTcB.innerHTML = fN(br.countrydata[0].total_cases)
        settings.eleCaB.innerHTML = fN(br.countrydata[0].total_active_cases)
        settings.eleCsB.innerHTML = fN(br.countrydata[0].total_serious_cases)
        settings.eleCnB.innerHTML = fN(br.countrydata[0].total_new_cases_today)
        settings.eleKB.innerHTML = fN(br.countrydata[0].total_deaths)
        settings.eleKnB.innerHTML = fN(br.countrydata[0].total_new_deaths_today)
        settings.eleCB.innerHTML = fN(br.countrydata[0].total_recovered)
        settings.eleNcB.innerHTML = fN(br.countrydata[0].total_unresolved)

        settings.eleTcUs.innerHTML = fN(us.countrydata[0].total_cases)
        settings.eleCaUs.innerHTML = fN(us.countrydata[0].total_active_cases)
        settings.eleCsUs.innerHTML = fN(us.countrydata[0].total_serious_cases)
        settings.eleCnUs.innerHTML = fN(us.countrydata[0].total_new_cases_today)
        settings.eleKUs.innerHTML = fN(us.countrydata[0].total_deaths)
        settings.eleKnUs.innerHTML = fN(us.countrydata[0].total_new_deaths_today)
        settings.eleCUs.innerHTML = fN(us.countrydata[0].total_recovered)
        settings.eleNcUs.innerHTML = fN(us.countrydata[0].total_unresolved)

        settings.eleTcMund.innerHTML = fN(geral.results[0].total_cases)
        settings.eleCaMund.innerHTML = fN(geral.results[0].total_active_cases)
        settings.eleCsMund.innerHTML = fN(geral.results[0].total_serious_cases)
        settings.eleCnMund.innerHTML = fN(geral.results[0].total_new_cases_today)
        settings.eleKMund.innerHTML = fN(geral.results[0].total_deaths)
        settings.eleKnMund.innerHTML = fN(geral.results[0].total_new_deaths_today)
        settings.eleCMund.innerHTML = fN(geral.results[0].total_recovered)
        settings.eleNcMund.innerHTML = fN(geral.results[0].total_unresolved)

        viewG(geral.results[0].total_active_cases, geral.results[0].total_deaths, geral.results[0].total_recovered)
        viewB(br.countrydata[0].total_active_cases, br.countrydata[0].total_deaths, br.countrydata[0].total_recovered)
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
        Dados.open("POST", settings.urlG, false)
        Dados.send()
        return JSON.parse(Dados.responseText)
    }

    const conectDbBR = function() {
        var Geral = new XMLHttpRequest()
        Geral.open("POST", settings.urlBR, false)
        Geral.send()
        return JSON.parse(Geral.responseText)
    }

    const conectDbUS = function() {
        var Geral = new XMLHttpRequest()
        Geral.open("POST", settings.urlUS, false)
        Geral.send()
        return JSON.parse(Geral.responseText)
    }

    const viewG = function(i, k, c) {
        var pieGb = document.getElementById("pieGb")
        var pieGlobal = new Chart(pieGb, {
            type: 'doughnut',
            data: {
                labels: ["Casos ativos", "Mortos", "Curados"],
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
                labels: ["Casos ativos", "Mortos", "Curados"],
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
        settings.urlBR = defaults.baseURLBR
        settings.urlUS = defaults.baseURLUS

        settings.eleInfcG = defaults.eleMain.querySelector(defaults.eleInfcG)
        settings.eleCurG = defaults.eleMain.querySelector(defaults.eleCurG)
        settings.eleKillG = defaults.eleMain.querySelector(defaults.eleKillG)


        settings.eleTcB = defaults.eleMain.querySelector(defaults.eleTcB)
        settings.eleCaB = defaults.eleMain.querySelector(defaults.eleCaB)
        settings.eleCsB = defaults.eleMain.querySelector(defaults.eleCsB)
        settings.eleCnB = defaults.eleMain.querySelector(defaults.eleCnB)
        settings.eleKB = defaults.eleMain.querySelector(defaults.eleKB)
        settings.eleKnB = defaults.eleMain.querySelector(defaults.eleKnB)
        settings.eleCB = defaults.eleMain.querySelector(defaults.eleCB)
        settings.eleNcB = defaults.eleMain.querySelector(defaults.eleNcB)


        settings.eleTcUs = defaults.eleMain.querySelector(defaults.eleTcUs)
        settings.eleCaUs = defaults.eleMain.querySelector(defaults.eleCaUs)
        settings.eleCsUs = defaults.eleMain.querySelector(defaults.eleCsUs)
        settings.eleCnUs = defaults.eleMain.querySelector(defaults.eleCnUs)
        settings.eleKUs = defaults.eleMain.querySelector(defaults.eleKUs)
        settings.eleKnUs = defaults.eleMain.querySelector(defaults.eleKnUs)
        settings.eleCUs = defaults.eleMain.querySelector(defaults.eleCUs)
        settings.eleNcUs = defaults.eleMain.querySelector(defaults.eleNcUs)


        settings.eleTcMund = defaults.eleMain.querySelector(defaults.eleTcMund)
        settings.eleCaMund = defaults.eleMain.querySelector(defaults.eleCaMund)
        settings.eleCsMund = defaults.eleMain.querySelector(defaults.eleCsMund)
        settings.eleCnMund = defaults.eleMain.querySelector(defaults.eleCnMund)
        settings.eleKMund = defaults.eleMain.querySelector(defaults.eleKMund)
        settings.eleKnMund = defaults.eleMain.querySelector(defaults.eleKnMund)
        settings.eleCMund = defaults.eleMain.querySelector(defaults.eleCMund)
        settings.eleNcMund = defaults.eleMain.querySelector(defaults.eleNcMund)
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