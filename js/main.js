(function(window, document) {
    'use strict'
    const supports = !!document.querySelector

    const defaults = {
        baseURLG: 'https://thevirustracker.com/free-api?global=stats',
        baseURL: 'https://thevirustracker.com/free-api?countryTotal=',
        eleMain: document.getElementById('info'),
        eleOP: '#op',
        eleDate: '#date',

        eleInfcG: '#infcG',
        eleCurG: '#curG',
        eleKillG: '#killG',

        eleCtG: '#ctG',
        eleCaG: '#caG',
        eleCsG: '#csG',
        eleKG: '#kG',
        eleCG: '#cG',
        eleCnG: '#cnG',
        eleKnG: '#knG',
        eleNrG: '#nrG',

        eleACB: '#ACB',
        eleACMB: '#ACMB',
        eleALB: '#ALB',
        eleALMB: '#ALMB',
        eleAPB: '#APB',
        eleAPMB: '#APMB',
        eleAMB: '#AMB',
        eleAMMB: '#AMMB',
        eleBAB: '#BAB',
        eleBAMB: '#BAMB',
        eleCEB: '#CEB',
        eleCEMB: '#CEMB',
        eleDFB: '#DFB',
        eleDFMB: '#DFMB',
        eleESB: '#ESB',
        eleESMB: '#ESMB',
        eleGOB: '#GOB',
        eleGOMB: '#GOMB',
        eleMAB: '#MAB',
        eleMAMB: '#MAMB',
        eleMTB: '#MTB',
        eleMTMB: '#MTMB',
        eleMSB: '#MSB',
        eleMSMB: '#MSMB',
        eleMGB: '#MGB',
        eleMGMB: '#MGMB',
        elePAB: '#PAB',
        elePAMB: '#PAMB',
        elePBB: '#PBB',
        elePBMB: '#PBMB',
        elePRB: '#PRB',
        elePRMB: '#PRMB',
        elePEB: '#PEB',
        elePEMB: '#PEMB',
        elePIB: '#PIB',
        elePIMB: '#PIMB',
        eleRJB: '#RJB',
        eleRJMB: '#RJMB',
        eleRNB: '#RNB',
        eleRNMB: '#RNMB',
        eleRSB: '#RSB',
        eleRSMB: '#RSMB',
        eleROB: '#ROB',
        eleROMB: '#ROMB',
        eleRRB: '#RRB',
        eleRRMB: '#RRMB',
        eleSCB: '#SCB',
        eleSCMB: '#SCMB',
        eleSPB: '#SPB',
        eleSPMB: '#SPMB',
        eleSEB: '#SEB',
        eleSEMB: '#SEMB',
        eleTOB: '#TOB',
        eleTOMB: '#TOMB',
    }

    const settings = {}

    const main = (event) => {

        if (event.type == 'load') {
            const mundo = conectDbg()
            const pais = conectDbp(defaults.baseURL + 'BR')
            console.log(dados.features[27].properties.data)

            settings.eleDate.innerHTML = 'Atualizados às: ' + dados.features[27].properties.data

            settings.eleInfcG.innerHTML = fN(mundo.results[0].total_cases)
            settings.eleKillG.innerHTML = fN(mundo.results[0].total_deaths)
            settings.eleCurG.innerHTML = fN(mundo.results[0].total_recovered)

            viewG(mundo.results[0].total_active_cases, mundo.results[0].total_deaths, mundo.results[0].total_recovered)
            viewB(pais.countrydata[0].total_active_cases, pais.countrydata[0].total_deaths, pais.countrydata[0].total_recovered)

            settings.eleCtG.innerHTML = fN(pais.countrydata[0].total_cases)
            settings.eleCaG.innerHTML = fN(pais.countrydata[0].total_active_cases)
            settings.eleCsG.innerHTML = fN(pais.countrydata[0].total_serious_cases)
            settings.eleKG.innerHTML = fN(pais.countrydata[0].total_deaths)
            settings.eleCG.innerHTML = fN(pais.countrydata[0].total_recovered)
            settings.eleCnG.innerHTML = fN(pais.countrydata[0].total_new_cases_today)
            settings.eleKnG.innerHTML = fN(pais.countrydata[0].total_new_deaths_today)
            settings.eleNrG.innerHTML = fN(pais.countrydata[0].total_unresolved)

            settings.eleACB.innerHTML = fN(dados.features[1].properties.casosconfirmados)
            settings.eleACMB.innerHTML = fN(dados.features[1].properties.obitos)
            settings.eleALB.innerHTML = fN(dados.features[13].properties.casosconfirmados)
            settings.eleALMB.innerHTML = fN(dados.features[13].properties.obitos)
            settings.eleAPB.innerHTML = fN(dados.features[5].properties.casosconfirmados)
            settings.eleAPMB.innerHTML = fN(dados.features[5].properties.obitos)
            settings.eleAMB.innerHTML = fN(dados.features[2].properties.casosconfirmados)
            settings.eleAMMB.innerHTML = fN(dados.features[2].properties.obitos)
            settings.eleBAB.innerHTML = fN(dados.features[15].properties.casosconfirmados)
            settings.eleBAMB.innerHTML = fN(dados.features[15].properties.obitos)
            settings.eleCEB.innerHTML = fN(dados.features[9].properties.casosconfirmados)
            settings.eleCEMB.innerHTML = fN(dados.features[9].properties.obitos)
            settings.eleDFB.innerHTML = fN(dados.features[26].properties.casosconfirmados)
            settings.eleDFMB.innerHTML = fN(dados.features[26].properties.obitos)
            settings.eleESB.innerHTML = fN(dados.features[17].properties.casosconfirmados)
            settings.eleESMB.innerHTML = fN(dados.features[17].properties.obitos)
            settings.eleGOB.innerHTML = fN(dados.features[25].properties.casosconfirmados)
            settings.eleGOMB.innerHTML = fN(dados.features[25].properties.obitos)
            settings.eleMAB.innerHTML = fN(dados.features[7].properties.casosconfirmados)
            settings.eleMAMB.innerHTML = fN(dados.features[7].properties.obitos)
            settings.eleMTB.innerHTML = fN(dados.features[24].properties.casosconfirmados)
            settings.eleMTMB.innerHTML = fN(dados.features[24].properties.obitos)
            settings.eleMSB.innerHTML = fN(dados.features[23].properties.casosconfirmados)
            settings.eleMSMB.innerHTML = fN(dados.features[23].properties.obitos)
            settings.eleMGB.innerHTML = fN(dados.features[16].properties.casosconfirmados)
            settings.eleMGMB.innerHTML = fN(dados.features[16].properties.obitos)
            settings.elePAB.innerHTML = fN(dados.features[4].properties.casosconfirmados)
            settings.elePAMB.innerHTML = fN(dados.features[4].properties.obitos)
            settings.elePBB.innerHTML = fN(dados.features[11].properties.casosconfirmados)
            settings.elePBMB.innerHTML = fN(dados.features[11].properties.obitos)
            settings.elePRB.innerHTML = fN(dados.features[20].properties.casosconfirmados)
            settings.elePRMB.innerHTML = fN(dados.features[20].properties.obitos)
            settings.elePEB.innerHTML = fN(dados.features[12].properties.casosconfirmados)
            settings.elePEMB.innerHTML = fN(dados.features[12].properties.obitos)
            settings.elePIB.innerHTML = fN(dados.features[8].properties.casosconfirmados)
            settings.elePIMB.innerHTML = fN(dados.features[8].properties.obitos)
            settings.eleRJB.innerHTML = fN(dados.features[18].properties.casosconfirmados)
            settings.eleRJMB.innerHTML = fN(dados.features[18].properties.obitos)
            settings.eleRNB.innerHTML = fN(dados.features[10].properties.casosconfirmados)
            settings.eleRNMB.innerHTML = fN(dados.features[10].properties.obitos)
            settings.eleRSB.innerHTML = fN(dados.features[22].properties.casosconfirmados)
            settings.eleRSMB.innerHTML = fN(dados.features[22].properties.obitos)
            settings.eleROB.innerHTML = fN(dados.features[0].properties.casosconfirmados)
            settings.eleROMB.innerHTML = fN(dados.features[0].properties.obitos)
            settings.eleRRB.innerHTML = fN(dados.features[3].properties.casosconfirmados)
            settings.eleRRMB.innerHTML = fN(dados.features[3].properties.obitos)
            settings.eleSCB.innerHTML = fN(dados.features[21].properties.casosconfirmados)
            settings.eleSCMB.innerHTML = fN(dados.features[21].properties.obitos)
            settings.eleSPB.innerHTML = fN(dados.features[19].properties.casosconfirmados)
            settings.eleSPMB.innerHTML = fN(dados.features[19].properties.obitos)
            settings.eleSEB.innerHTML = fN(dados.features[14].properties.casosconfirmados)
            settings.eleSEMB.innerHTML = fN(dados.features[14].properties.obitos)
            settings.eleTOB.innerHTML = fN(dados.features[6].properties.casosconfirmados)
            settings.eleTOMB.innerHTML = fN(dados.features[6].properties.obitos)

        } else if (event.type == 'change') {
            if (event.target.value == 'mundo') {
                const mundo = conectDbg()

                settings.eleCtG.innerHTML = fN(mundo.results[0].total_cases)
                settings.eleCaG.innerHTML = fN(mundo.results[0].total_active_cases)
                settings.eleCsG.innerHTML = fN(mundo.results[0].total_serious_cases)
                settings.eleKG.innerHTML = fN(mundo.results[0].total_deaths)
                settings.eleCG.innerHTML = fN(mundo.results[0].total_recovered)
                settings.eleCnG.innerHTML = fN(mundo.results[0].total_new_cases_today)
                settings.eleKnG.innerHTML = fN(mundo.results[0].total_new_deaths_today)
                settings.eleNrG.innerHTML = fN(mundo.results[0].total_unresolved)

            } else {
                const pais = conectDbp(defaults.baseURL + event.target.value)

                settings.eleCtG.innerHTML = fN(pais.countrydata[0].total_cases)
                settings.eleCaG.innerHTML = fN(pais.countrydata[0].total_active_cases)
                settings.eleCsG.innerHTML = fN(pais.countrydata[0].total_serious_cases)
                settings.eleKG.innerHTML = fN(pais.countrydata[0].total_deaths)
                settings.eleCG.innerHTML = fN(pais.countrydata[0].total_recovered)
                settings.eleCnG.innerHTML = fN(pais.countrydata[0].total_new_cases_today)
                settings.eleKnG.innerHTML = fN(pais.countrydata[0].total_new_deaths_today)
                settings.eleNrG.innerHTML = fN(pais.countrydata[0].total_unresolved)
            }
        }
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

    const conectDbg = function() {
        var Dados = new XMLHttpRequest()
        Dados.open("POST", settings.urlG, false)
        Dados.send()
        return JSON.parse(Dados.responseText)
    }

    const conectDbp = function(url) {
        var Geral = new XMLHttpRequest()
        Geral.open("POST", url, false)
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

        settings.eleOP = defaults.eleMain.querySelector(defaults.eleOP)
        settings.eleDate = defaults.eleMain.querySelector(defaults.eleDate)

        settings.eleInfcG = defaults.eleMain.querySelector(defaults.eleInfcG)
        settings.eleCurG = defaults.eleMain.querySelector(defaults.eleCurG)
        settings.eleKillG = defaults.eleMain.querySelector(defaults.eleKillG)


        settings.eleCtG = defaults.eleMain.querySelector(defaults.eleCtG)
        settings.eleCaG = defaults.eleMain.querySelector(defaults.eleCaG)
        settings.eleCsG = defaults.eleMain.querySelector(defaults.eleCsG)
        settings.eleKG = defaults.eleMain.querySelector(defaults.eleKG)
        settings.eleCG = defaults.eleMain.querySelector(defaults.eleCG)
        settings.eleCnG = defaults.eleMain.querySelector(defaults.eleCnG)
        settings.eleKnG = defaults.eleMain.querySelector(defaults.eleKnG)
        settings.eleNrG = defaults.eleMain.querySelector(defaults.eleNrG)

        settings.eleACB = defaults.eleMain.querySelector(defaults.eleACB)
        settings.eleACMB = defaults.eleMain.querySelector(defaults.eleACMB)
        settings.eleALB = defaults.eleMain.querySelector(defaults.eleALB)
        settings.eleALMB = defaults.eleMain.querySelector(defaults.eleALMB)
        settings.eleAPB = defaults.eleMain.querySelector(defaults.eleAPB)
        settings.eleAPMB = defaults.eleMain.querySelector(defaults.eleAPMB)
        settings.eleAMB = defaults.eleMain.querySelector(defaults.eleAMB)
        settings.eleAMMB = defaults.eleMain.querySelector(defaults.eleAMMB)
        settings.eleBAB = defaults.eleMain.querySelector(defaults.eleBAB)
        settings.eleBAMB = defaults.eleMain.querySelector(defaults.eleBAMB)
        settings.eleCEB = defaults.eleMain.querySelector(defaults.eleCEB)
        settings.eleCEMB = defaults.eleMain.querySelector(defaults.eleCEMB)
        settings.eleDFB = defaults.eleMain.querySelector(defaults.eleDFB)
        settings.eleDFMB = defaults.eleMain.querySelector(defaults.eleDFMB)
        settings.eleESB = defaults.eleMain.querySelector(defaults.eleESB)
        settings.eleESMB = defaults.eleMain.querySelector(defaults.eleESMB)
        settings.eleGOB = defaults.eleMain.querySelector(defaults.eleGOB)
        settings.eleGOMB = defaults.eleMain.querySelector(defaults.eleGOMB)
        settings.eleMAB = defaults.eleMain.querySelector(defaults.eleMAB)
        settings.eleMAMB = defaults.eleMain.querySelector(defaults.eleMAMB)
        settings.eleMTB = defaults.eleMain.querySelector(defaults.eleMTB)
        settings.eleMTMB = defaults.eleMain.querySelector(defaults.eleMTMB)
        settings.eleMSB = defaults.eleMain.querySelector(defaults.eleMSB)
        settings.eleMSMB = defaults.eleMain.querySelector(defaults.eleMSMB)
        settings.eleMGB = defaults.eleMain.querySelector(defaults.eleMGB)
        settings.eleMGMB = defaults.eleMain.querySelector(defaults.eleMGMB)
        settings.elePAB = defaults.eleMain.querySelector(defaults.elePAB)
        settings.elePAMB = defaults.eleMain.querySelector(defaults.elePAMB)
        settings.elePBB = defaults.eleMain.querySelector(defaults.elePBB)
        settings.elePBMB = defaults.eleMain.querySelector(defaults.elePBMB)
        settings.elePRB = defaults.eleMain.querySelector(defaults.elePRB)
        settings.elePRMB = defaults.eleMain.querySelector(defaults.elePRMB)
        settings.elePEB = defaults.eleMain.querySelector(defaults.elePEB)
        settings.elePEMB = defaults.eleMain.querySelector(defaults.elePEMB)
        settings.elePIB = defaults.eleMain.querySelector(defaults.elePIB)
        settings.elePIMB = defaults.eleMain.querySelector(defaults.elePIMB)
        settings.eleRJB = defaults.eleMain.querySelector(defaults.eleRJB)
        settings.eleRJMB = defaults.eleMain.querySelector(defaults.eleRJMB)
        settings.eleRNB = defaults.eleMain.querySelector(defaults.eleRNB)
        settings.eleRNMB = defaults.eleMain.querySelector(defaults.eleRNMB)
        settings.eleRSB = defaults.eleMain.querySelector(defaults.eleRSB)
        settings.eleRSMB = defaults.eleMain.querySelector(defaults.eleRSMB)
        settings.eleROB = defaults.eleMain.querySelector(defaults.eleROB)
        settings.eleROMB = defaults.eleMain.querySelector(defaults.eleROMB)
        settings.eleRRB = defaults.eleMain.querySelector(defaults.eleRRB)
        settings.eleRRMB = defaults.eleMain.querySelector(defaults.eleRRMB)
        settings.eleSCB = defaults.eleMain.querySelector(defaults.eleSCB)
        settings.eleSCMB = defaults.eleMain.querySelector(defaults.eleSCMB)
        settings.eleSPB = defaults.eleMain.querySelector(defaults.eleSPB)
        settings.eleSPMB = defaults.eleMain.querySelector(defaults.eleSPMB)
        settings.eleSEB = defaults.eleMain.querySelector(defaults.eleSEB)
        settings.eleSEMB = defaults.eleMain.querySelector(defaults.eleSEMB)
        settings.eleTOB = defaults.eleMain.querySelector(defaults.eleTOB)
        settings.eleTOMB = defaults.eleMain.querySelector(defaults.eleTOMB)
    }

    const events = function() {
        window.addEventListener('load', main)
        settings.eleOP.addEventListener('change', main)
    }

    const init = function(options) {
        if (!supports) return
        setUp()
        events()
    }

    init()
}(window, document))