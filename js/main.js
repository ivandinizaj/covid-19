(function(window, document) {
    'use strict'
    const supports = !!document.querySelector

    const defaults = {
        baseURLG: 'https://thevirustracker.com/free-api?global=stats',
        baseURL: 'https://thevirustracker.com/free-api?countryTotal=',

        baseURLBR: 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv',

        eleMain: document.getElementById('info'),
        eleOP: '#op',

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
        eleRBMAC: '#RBMAC',
        eleRBAAC: '#RBAAC',

        eleALB: '#ALB',
        eleALMB: '#ALMB',
        eleMMAL: '#MMAL',
        eleMAAL: '#MAAL',

        eleAPB: '#APB',
        eleAPMB: '#APMB',
        eleMMAP: '#MMAP',
        eleMAAP: '#MAAP',

        eleAMB: '#AMB',
        eleAMMB: '#AMMB',
        eleMMAM: '#MMAM',
        eleMAAM: '#MAAM',

        eleBAB: '#BAB',
        eleBAMB: '#BAMB',
        eleSMBA: '#SMBA',
        eleSABA: '#SABA',

        eleCEB: '#CEB',
        eleCEMB: '#CEMB',
        eleFMCE: '#FMCE',
        eleFACE: '#FACE',

        eleDFB: '#DFB',
        eleDFMB: '#DFMB',
        eleBMDF: '#BMDF',
        eleBADF: '#BADF',

        eleESB: '#ESB',
        eleESMB: '#ESMB',
        eleVMES: '#VMES',
        eleVAES: '#VAES',
        eleVVMES: '#VVMES',
        eleVVAES: '#VVAES',

        eleGOB: '#GOB',
        eleGOMB: '#GOMB',
        eleGMGO: '#GMGO',
        eleGAGO: '#GAGO',

        eleMAB: '#MAB',
        eleMAMB: '#MAMB',
        eleSLMMA: '#SLMMA',
        eleSLAMA: '#SLAMA',

        eleMTB: '#MTB',
        eleMTMB: '#MTMB',
        eleCMMT: '#CMMT',
        eleCAMT: '#CAMT',

        eleMSB: '#MSB',
        eleMSMB: '#MSMB',
        eleCGMMS: '#CGMMS',
        eleCGAMS: '#CGAMS',

        eleMGB: '#MGB',
        eleMGMB: '#MGMB',
        eleBHMMG: '#BHMMG',
        eleBHAMG: '#BHAMG',

        elePAB: '#PAB',
        elePAMB: '#PAMB',
        eleCMPR: '#CMPR',
        eleCAPR: '#CAPR',

        elePBB: '#PBB',
        elePBMB: '#PBMB',
        eleJPMPB: '#JPMPB',
        eleJPAPB: '#JPAPB',

        elePRB: '#PRB',
        elePRMB: '#PRMB',
        eleBMPA: '#BMPA',
        eleBAPA: '#BAPA',




        elePEB: '#PEB',
        elePEMB: '#PEMB',
        
        eleRMPE: '#RMPE',
        eleRAPE: '#RAPE',
        eleOMPE: '#OMPE',
        eleOAPE: '#OAPE',
        eleCMPE: '#CMPE',
        eleCAPE: '#CAPE',
        elePMPE: '#PMPE',
        elePAPE: '#PAPE',
        
        eleFMPE: '#FMPE',
        eleFAPE: '#FAPE',

        eleJMPE: '#JMPE',
        eleJAPE: '#JAPE',
        eleEMPE: '#EMPE',
        eleEAPE: '#EAPE',







        elePIB: '#PIB',
        elePIMB: '#PIMB',
        eleTMPI: '#TMPI',
        eleTAPI: '#TAPI',

        eleRNB: '#RNB',
        eleRNMB: '#RNMB',
        eleNMRN: '#NMRN',
        eleNARN: '#NARN',
        eleMMRN: '#MMRN',
        eleMARN: '#MARN',

        eleRSB: '#RSB',
        eleRSMB: '#RSMB',
        elePMRS: '#PMRS',
        elePARS: '#PARS',

        eleRJB: '#RJB',
        eleRJMB: '#RJMB',
        eleNMRJ: '#NMRJ',
        eleNARJ: '#NARJ',
        eleRJMRJ: '#RJMRJ',
        eleRJARJ: '#RJARJ',

        eleROB: '#ROB',
        eleROMB: '#ROMB',
        elePMRO: '#PMRO',
        elePARO: '#PARO',

        eleRRB: '#RRB',
        eleRRMB: '#RRMB',
        eleBMRR: '#BMRR',
        eleBARR: '#BARR',

        eleSCB: '#SCB',
        eleSCMB: '#SCMB',
        eleFMSC: '#FMSC',
        eleFASC: '#FASC',
        eleSMSC: '#SMSC',
        eleSASC: '#SASC',

        eleSEB: '#SEB',
        eleSEMB: '#SEMB',
        eleAMSE: '#AMSE',
        eleAASE: '#AASE',

        eleSPB: '#SPB',
        eleSPMB: '#SPMB',
        eleSPMSP: '#SPMSP',
        eleSPASP: '#SPASP',

        eleTOB: '#TOB',
        eleTOMB: '#TOMB',
        elePMTO: '#PMTO',
        elePATO: '#PATO',
    }

    const settings = {}

    const main = (event) => {

        if (event.type == 'load') {
            const mundo = conectDbg()
            const pais = conectDbp(defaults.baseURL + 'BR')
            const brasil = conectDbbr(defaults.baseURLBR)

            var k = 0
            var j = 0
            var ta = 0
            var tm = 0

            for (j = 0; j <= brasil.length - 1; j++) {

                if (brasil[j].split(',')[2] == 'Rio Branco/AC') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'AC') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleACB.innerHTML = fN(ta)
                    settings.eleACMB.innerHTML = fN(tm)

                    settings.eleRBMAC.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleRBAAC.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Maceió/AL') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'AL') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleALB.innerHTML = fN(ta)
                    settings.eleALMB.innerHTML = fN(tm)

                    settings.eleMMAL.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleMAAL.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Macapá/AP') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'AP') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleAPB.innerHTML = fN(ta)
                    settings.eleAPMB.innerHTML = fN(tm)

                    settings.eleMMAP.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleMAAP.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Manaus/AM') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'AM') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleAMB.innerHTML = fN(ta)
                    settings.eleAMMB.innerHTML = fN(tm)

                    settings.eleMMAM.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleMAAM.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Salvador/BA') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'BA') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleBAB.innerHTML = fN(ta)
                    settings.eleBAMB.innerHTML = fN(tm)

                    settings.eleSMBA.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleSABA.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Fortaleza/CE') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'CE') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleCEB.innerHTML = fN(ta)
                    settings.eleCEMB.innerHTML = fN(tm)

                    settings.eleFMCE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleFACE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Brasília/DF') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'DF') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleDFB.innerHTML = fN(ta)
                    settings.eleDFMB.innerHTML = fN(tm)

                    settings.eleBMDF.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleBADF.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Vitória/ES') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'ES') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleESB.innerHTML = fN(ta)
                    settings.eleESMB.innerHTML = fN(tm)

                    settings.eleVMES.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleVAES.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Vila Velha/ES') {
                    settings.eleVVMES.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleVVAES.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Goiânia/GO') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'GO') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleGOB.innerHTML = fN(ta)
                    settings.eleGOMB.innerHTML = fN(tm)

                    settings.eleGMGO.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleGAGO.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'São Luís/MA') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'MA') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleMAB.innerHTML = fN(ta)
                    settings.eleMAMB.innerHTML = fN(tm)

                    settings.eleSLMMA.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleSLAMA.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Cuiabá/MT') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'MT') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleMTB.innerHTML = fN(ta)
                    settings.eleMTMB.innerHTML = fN(tm)

                    settings.eleCMMT.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleCAMT.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Campo Grande/MS') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'MS') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleMSB.innerHTML = fN(ta)
                    settings.eleMSMB.innerHTML = fN(tm)

                    settings.eleCGMMS.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleCGAMS.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }




                if (brasil[j].split(',')[2] == 'Belo Horizonte/MG') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'MG') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleMGB.innerHTML = fN(ta)
                    settings.eleMGMB.innerHTML = fN(tm)

                    settings.eleBHMMG.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleBHAMG.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Curitiba/PR') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'PR') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.elePRB.innerHTML = fN(ta)
                    settings.elePRMB.innerHTML = fN(tm)

                    settings.eleCMPR.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleCAPR.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'João Pessoa/PB') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'PB') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.elePBB.innerHTML = fN(ta)
                    settings.elePBMB.innerHTML = fN(tm)

                    settings.eleJPMPB.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleJPAPB.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Belém/PA') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'PA') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.elePAB.innerHTML = fN(ta)
                    settings.elePAMB.innerHTML = fN(tm)

                    settings.eleBMPA.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleBAPA.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }


                if (brasil[j].split(',')[2] == 'Recife/PE') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'PE') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.elePEB.innerHTML = fN(ta)
                    settings.elePEMB.innerHTML = fN(tm)

                    settings.eleRMPE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleRAPE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Olinda/PE') {
                    settings.eleOMPE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleOAPE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Caruaru/PE') {
                    settings.eleCMPE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleCAPE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Petrolina/PE') {
                    settings.elePMPE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.elePAPE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Fernando de Noronha/PE') {
                    settings.eleFMPE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleFAPE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Jaboatão dos Guararapes/PE') {
                    settings.eleJMPE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleJAPE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'ESTRANGEIRO/PE') {
                    settings.eleEMPE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleEAPE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }



                if (brasil[j].split(',')[2] == 'Teresina/PI') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'PI') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.elePIB.innerHTML = fN(ta)
                    settings.elePIMB.innerHTML = fN(tm)

                    settings.eleTMPI.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleTAPI.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Natal/RN') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'RN') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleRNB.innerHTML = fN(ta)
                    settings.eleRNMB.innerHTML = fN(tm)

                    settings.eleNMRN.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleNARN.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Mossoró/RN') {
                    settings.eleMMRN.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleMARN.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Porto Alegre/RS') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'RS') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleRSB.innerHTML = fN(ta)
                    settings.eleRSMB.innerHTML = fN(tm)

                    settings.elePMRS.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.elePARS.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }


                if (brasil[j].split(',')[2] == 'Rio de Janeiro/RJ') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'RJ') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleRJB.innerHTML = fN(ta)
                    settings.eleRJMB.innerHTML = fN(tm)

                    settings.eleRJMRJ.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleRJARJ.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'Niterói/RJ') {
                    settings.eleNMRJ.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleNARJ.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Porto Velho/RO') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'RO') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleROB.innerHTML = fN(ta)
                    settings.eleROMB.innerHTML = fN(tm)

                    settings.elePMRO.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.elePARO.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Boa Vista/RR') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'RR') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleRRB.innerHTML = fN(ta)
                    settings.eleRRMB.innerHTML = fN(tm)

                    settings.eleBMRR.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleBARR.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Florianópolis/SC') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'SC') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleSCB.innerHTML = fN(ta)
                    settings.eleSCMB.innerHTML = fN(tm)

                    settings.eleFMSC.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleFASC.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }
                if (brasil[j].split(',')[2] == 'São José/SC') {
                    settings.eleSMSC.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleSASC.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Aracaju/SE') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'SE') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleSEB.innerHTML = fN(ta)
                    settings.eleSEMB.innerHTML = fN(tm)

                    settings.eleAMSE.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleAASE.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'São Paulo/SP') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'SP') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleSPB.innerHTML = fN(ta)
                    settings.eleSPMB.innerHTML = fN(tm)

                    settings.eleSPMSP.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.eleSPASP.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }

                if (brasil[j].split(',')[2] == 'Palmas/TO') {
                    k = 0
                    ta = 0
                    tm = 0
                    for (k = 0; k <= brasil.length - 1; k++) {
                        if (brasil[k].split(',')[1] == 'TO') {
                            ta += parseInt(brasil[k].split(',')[5])
                            tm += parseInt(brasil[k].split(',')[4])
                        }
                    }
                    settings.eleTOB.innerHTML = fN(ta)
                    settings.eleTOMB.innerHTML = fN(tm)

                    settings.elePMTO.innerHTML = fN(parseInt(brasil[j].split(',')[4]))
                    settings.elePATO.innerHTML = fN(parseInt(brasil[j].split(',')[5]))
                }


            }


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

    const conectDbbr = function(url) {
        var Geral = new XMLHttpRequest()
        Geral.open("GET", url, false)
        Geral.send()
        return Geral.responseText.split('\n')

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
        settings.eleRBMAC = defaults.eleMain.querySelector(defaults.eleRBMAC)
        settings.eleRBAAC = defaults.eleMain.querySelector(defaults.eleRBAAC)

        settings.eleALB = defaults.eleMain.querySelector(defaults.eleALB)
        settings.eleALMB = defaults.eleMain.querySelector(defaults.eleALMB)
        settings.eleMMAL = defaults.eleMain.querySelector(defaults.eleMMAL)
        settings.eleMAAL = defaults.eleMain.querySelector(defaults.eleMAAL)

        settings.eleAPB = defaults.eleMain.querySelector(defaults.eleAPB)
        settings.eleAPMB = defaults.eleMain.querySelector(defaults.eleAPMB)
        settings.eleMMAP = defaults.eleMain.querySelector(defaults.eleMMAP)
        settings.eleMAAP = defaults.eleMain.querySelector(defaults.eleMAAP)

        settings.eleAMB = defaults.eleMain.querySelector(defaults.eleAMB)
        settings.eleAMMB = defaults.eleMain.querySelector(defaults.eleAMMB)
        settings.eleMMAM = defaults.eleMain.querySelector(defaults.eleMMAM)
        settings.eleMAAM = defaults.eleMain.querySelector(defaults.eleMAAM)

        settings.eleBAB = defaults.eleMain.querySelector(defaults.eleBAB)
        settings.eleBAMB = defaults.eleMain.querySelector(defaults.eleBAMB)
        settings.eleSMBA = defaults.eleMain.querySelector(defaults.eleSMBA)
        settings.eleSABA = defaults.eleMain.querySelector(defaults.eleSABA)

        settings.eleCEB = defaults.eleMain.querySelector(defaults.eleCEB)
        settings.eleCEMB = defaults.eleMain.querySelector(defaults.eleCEMB)
        settings.eleFMCE = defaults.eleMain.querySelector(defaults.eleFMCE)
        settings.eleFACE = defaults.eleMain.querySelector(defaults.eleFACE)

        settings.eleDFB = defaults.eleMain.querySelector(defaults.eleDFB)
        settings.eleDFMB = defaults.eleMain.querySelector(defaults.eleDFMB)
        settings.eleBMDF = defaults.eleMain.querySelector(defaults.eleBMDF)
        settings.eleBADF = defaults.eleMain.querySelector(defaults.eleBADF)

        settings.eleESB = defaults.eleMain.querySelector(defaults.eleESB)
        settings.eleESMB = defaults.eleMain.querySelector(defaults.eleESMB)
        settings.eleVMES = defaults.eleMain.querySelector(defaults.eleVMES)
        settings.eleVAES = defaults.eleMain.querySelector(defaults.eleVAES)
        settings.eleVVMES = defaults.eleMain.querySelector(defaults.eleVVMES)
        settings.eleVVAES = defaults.eleMain.querySelector(defaults.eleVVAES)

        settings.eleGOB = defaults.eleMain.querySelector(defaults.eleGOB)
        settings.eleGOMB = defaults.eleMain.querySelector(defaults.eleGOMB)
        settings.eleGMGO = defaults.eleMain.querySelector(defaults.eleGMGO)
        settings.eleGAGO = defaults.eleMain.querySelector(defaults.eleGAGO)

        settings.eleMAB = defaults.eleMain.querySelector(defaults.eleMAB)
        settings.eleMAMB = defaults.eleMain.querySelector(defaults.eleMAMB)
        settings.eleSLMMA = defaults.eleMain.querySelector(defaults.eleSLMMA)
        settings.eleSLAMA = defaults.eleMain.querySelector(defaults.eleSLAMA)

        settings.eleMTB = defaults.eleMain.querySelector(defaults.eleMTB)
        settings.eleMTMB = defaults.eleMain.querySelector(defaults.eleMTMB)
        settings.eleCMMT = defaults.eleMain.querySelector(defaults.eleCMMT)
        settings.eleCAMT = defaults.eleMain.querySelector(defaults.eleCAMT)

        settings.eleMSB = defaults.eleMain.querySelector(defaults.eleMSB)
        settings.eleMSMB = defaults.eleMain.querySelector(defaults.eleMSMB)
        settings.eleCGMMS = defaults.eleMain.querySelector(defaults.eleCGMMS)
        settings.eleCGAMS = defaults.eleMain.querySelector(defaults.eleCGAMS)

        settings.eleMGB = defaults.eleMain.querySelector(defaults.eleMGB)
        settings.eleMGMB = defaults.eleMain.querySelector(defaults.eleMGMB)
        settings.eleBHMMG = defaults.eleMain.querySelector(defaults.eleBHMMG)
        settings.eleBHAMG = defaults.eleMain.querySelector(defaults.eleBHAMG)

        settings.elePRB = defaults.eleMain.querySelector(defaults.elePRB)
        settings.elePRMB = defaults.eleMain.querySelector(defaults.elePRMB)
        settings.eleCMPR = defaults.eleMain.querySelector(defaults.eleCMPR)
        settings.eleCAPR = defaults.eleMain.querySelector(defaults.eleCAPR)

        settings.elePBB = defaults.eleMain.querySelector(defaults.elePBB)
        settings.elePBMB = defaults.eleMain.querySelector(defaults.elePBMB)
        settings.eleJPMPB = defaults.eleMain.querySelector(defaults.eleJPMPB)
        settings.eleJPAPB = defaults.eleMain.querySelector(defaults.eleJPAPB)

        settings.elePAB = defaults.eleMain.querySelector(defaults.elePAB)
        settings.elePAMB = defaults.eleMain.querySelector(defaults.elePAMB)
        settings.eleBMPA = defaults.eleMain.querySelector(defaults.eleBMPA)
        settings.eleBAPA = defaults.eleMain.querySelector(defaults.eleBAPA)



        settings.elePEB = defaults.eleMain.querySelector(defaults.elePEB)
        settings.elePEMB = defaults.eleMain.querySelector(defaults.elePEMB)
        settings.eleRMPE = defaults.eleMain.querySelector(defaults.eleRMPE)
        settings.eleRAPE = defaults.eleMain.querySelector(defaults.eleRAPE)
        settings.eleOMPE = defaults.eleMain.querySelector(defaults.eleOMPE)
        settings.eleOAPE = defaults.eleMain.querySelector(defaults.eleOAPE)
        settings.eleCMPE = defaults.eleMain.querySelector(defaults.eleCMPE)
        settings.eleCAPE = defaults.eleMain.querySelector(defaults.eleCAPE)
        settings.elePMPE = defaults.eleMain.querySelector(defaults.elePMPE)
        settings.elePAPE = defaults.eleMain.querySelector(defaults.elePAPE)
        
        settings.eleFMPE = defaults.eleMain.querySelector(defaults.eleFMPE)
        settings.eleFAPE = defaults.eleMain.querySelector(defaults.eleFAPE)

        settings.eleJMPE = defaults.eleMain.querySelector(defaults.eleJMPE)
        settings.eleJAPE = defaults.eleMain.querySelector(defaults.eleJAPE)
        settings.eleEMPE = defaults.eleMain.querySelector(defaults.eleEMPE)
        settings.eleEAPE = defaults.eleMain.querySelector(defaults.eleEAPE)




        settings.elePIB = defaults.eleMain.querySelector(defaults.elePIB)
        settings.elePIMB = defaults.eleMain.querySelector(defaults.elePIMB)
        settings.eleTMPI = defaults.eleMain.querySelector(defaults.eleTMPI)
        settings.eleTAPI = defaults.eleMain.querySelector(defaults.eleTAPI)

        settings.eleRNB = defaults.eleMain.querySelector(defaults.eleRNB)
        settings.eleRNMB = defaults.eleMain.querySelector(defaults.eleRNMB)
        settings.eleNMRN = defaults.eleMain.querySelector(defaults.eleNMRN)
        settings.eleNARN = defaults.eleMain.querySelector(defaults.eleNARN)
        settings.eleMMRN = defaults.eleMain.querySelector(defaults.eleMMRN)
        settings.eleMARN = defaults.eleMain.querySelector(defaults.eleMARN)

        settings.eleRSB = defaults.eleMain.querySelector(defaults.eleRSB)
        settings.eleRSMB = defaults.eleMain.querySelector(defaults.eleRSMB)
        settings.elePMRS = defaults.eleMain.querySelector(defaults.elePMRS)
        settings.elePARS = defaults.eleMain.querySelector(defaults.elePARS)

        settings.eleRJB = defaults.eleMain.querySelector(defaults.eleRJB)
        settings.eleRJMB = defaults.eleMain.querySelector(defaults.eleRJMB)
        settings.eleNMRJ = defaults.eleMain.querySelector(defaults.eleNMRJ)
        settings.eleNARJ = defaults.eleMain.querySelector(defaults.eleNARJ)
        settings.eleRJMRJ = defaults.eleMain.querySelector(defaults.eleRJMRJ)
        settings.eleRJARJ = defaults.eleMain.querySelector(defaults.eleRJARJ)

        settings.eleROB = defaults.eleMain.querySelector(defaults.eleROB)
        settings.eleROMB = defaults.eleMain.querySelector(defaults.eleROMB)
        settings.elePMRO = defaults.eleMain.querySelector(defaults.elePMRO)
        settings.elePARO = defaults.eleMain.querySelector(defaults.elePARO)

        settings.eleRRB = defaults.eleMain.querySelector(defaults.eleRRB)
        settings.eleRRMB = defaults.eleMain.querySelector(defaults.eleRRMB)
        settings.eleBMRR = defaults.eleMain.querySelector(defaults.eleBMRR)
        settings.eleBARR = defaults.eleMain.querySelector(defaults.eleBARR)

        settings.eleSCB = defaults.eleMain.querySelector(defaults.eleSCB)
        settings.eleSCMB = defaults.eleMain.querySelector(defaults.eleSCMB)
        settings.eleFMSC = defaults.eleMain.querySelector(defaults.eleFMSC)
        settings.eleFASC = defaults.eleMain.querySelector(defaults.eleFASC)
        settings.eleSMSC = defaults.eleMain.querySelector(defaults.eleSMSC)
        settings.eleSASC = defaults.eleMain.querySelector(defaults.eleSASC)

        settings.eleSEB = defaults.eleMain.querySelector(defaults.eleSEB)
        settings.eleSEMB = defaults.eleMain.querySelector(defaults.eleSEMB)
        settings.eleAMSE = defaults.eleMain.querySelector(defaults.eleAMSE)
        settings.eleAASE = defaults.eleMain.querySelector(defaults.eleAASE)

        settings.eleSPB = defaults.eleMain.querySelector(defaults.eleSPB)
        settings.eleSPMB = defaults.eleMain.querySelector(defaults.eleSPMB)
        settings.eleSPMSP = defaults.eleMain.querySelector(defaults.eleSPMSP)
        settings.eleSPASP = defaults.eleMain.querySelector(defaults.eleSPASP)

        settings.eleTOB = defaults.eleMain.querySelector(defaults.eleTOB)
        settings.eleTOMB = defaults.eleMain.querySelector(defaults.eleTOMB)
        settings.elePMTO = defaults.eleMain.querySelector(defaults.elePMTO)
        settings.elePATO = defaults.eleMain.querySelector(defaults.elePATO)
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