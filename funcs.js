
// function cusForm(formObject) {
//     jobInfoObject(formObject)
//     window.location.href = "home.html"
//     document.getElementById("hero").innerHTML = cusInfo.briggsRep;
// }

// function jobInfoObject(formObject) {
//     const cusInfo = {
//         briggsRep: formObject.rep
//     }
//     console.log(cusInfo.briggsRep)
// }


function processForm(form) {
    alert("hello")
    const cusInfoPF = jobInfoObject(form);
    const serviceInfoPF = serviceInfoObject(form);
    const roofInfoPF = roofInfoObject(form);
    const roofType1PF = roofType1Object(form);
    const roofType2PF = roofType2Object(form);
    const roofType3PF = roofType3Object(form);
    const extrasPF = extrasObject(form);
    const notesPF = notesObject(form)
    pricingObject(cusInfoPF, serviceInfoPF,roofInfoPF, roofType1PF, roofType2PF, roofType3PF, extrasPF, notesPF);
    // var TestVar = form.rep.value;
    // alert ("You typed: " + TestVar);
}

function pricingObject(cusInfoPF, serviceInfoPF,roofInfoPF, roofType1PF, roofType2PF, roofType3PF, extrasPF, notesPF) {
    const contractor = cusInfo.performingcontractor.value;
    const servicArea = serviceInfoPF.servicearea.value;
    const workType = serviceInfoPF.worktype.value; 
    const totalArea = roofInfoPF.totalRoofSquareFootage.value;
    const layer1TearOff = roofInfoPF.layer1TearOffSquareFootage.value;
    const additionalTearOff = roofInfoPF.above1StorySquareFootage.value;
    const installedShingles1 = roofType1PF.hipNridge11.value;
    const installedHipNRidge1 = roofType1PF.hipNridge12.value;
    const installedStarter1 = roofType1PF.hipNridge13.value;
    const pitch141 = roofType1PF.roofArea1412.value;
    const pitch171 = roofType1PF.roofArea1712.value;
    const pitch1101 = roofType1PF.roofArea11012.value;
    const installedShingles2 = roofType1PF.hipNridge21.value;
    const installedHipNRidge2 = roofType1PF.hipNridge22.value;
    const installedStarter2 = roofType1PF.hipNridge23.value;
    const pitch142 = roofType1PF.roofArea2412.value;
    const pitch172 = roofType1PF.roofArea2712.value;
    const pitch1102 = roofType1PF.roofArea21012.value;
    const installedShingles3 = roofType1PF.hipNridge31.value;
    const installedHipNRidge3 = roofType1PF.hipNridge32.value;
    const installedStarter3 = roofType1PF.hipNridge33.value;
    const pitch143 = roofType1PF.roofArea3412.value;
    const pitch173 = roofType1PF.roofArea3712.value;
    const pitch1103 = roofType1PF.roofArea31012.value;
    const osbReplacement = extrasPF.deckingReplaced.value;
    const secondlayerDryIn = extrasPF.secondaryDryIn.value;
    const iceAndWater100 = extrasPF.iceAndWaterShiled.value;
    const solarHide = extrasPF.solarHideDryIn.value;
    const removalSnow = extrasPF.snowRemoval.value;
    const installedFascia = extrasPF.fasciaInstalled.value;
    const installedGutter = extrasPF.gutterInstalled.value;
    const installedAlpineEave = extrasPF.alpineEaveInstalled.value;
    const installedSawCutReglet = extrasPF.sawCutRegletInstalled.value;
    const notesOne = notesPF.note1.value;
    const notesTwo = notesPF.note2.value;
    const notesThree = notesPF.note3.value;

    ez = {
        tearoff: 0.40,
        tearofflayer: 0.20,
        installAll: 0.50,
        installOnly: -0.10,
        addDryIn: 0.10,
        iceNWater100: 0.15,
        solarHideInstall: 0.15,
        snowRemovalBelow15SQ: 0.5,
        snowRemoval16To30SQ: 2.00,
        snowRemoval31To60SQ: 4.00,
        snowRemoval61To100SQ: 6.00,
        snowRemoval101SQNUp: 8.00,
        fasciaInstall: 10.00,
        gutterInstall: 10.00,
        alpineEaveInstall: 2.50,
        sawCutRegletInstall: 5.00,
        cricketSmall: 100.00,
        cricketMedium: 125.00,
        cricketLarge: 175.00,
        cricketExLarge: 225.00, 
        dryInOnly: 0.15, 
        dIPitch7: 0.20,
        dIPitch10: 0.25,
        dIAddStories: 0.05,
        addStories: 0.20,
        architecturalShingles: 0.50,
        tuffRib: 0.70,
        specialtyShingles: 1.25,
        nailStrip: 1.55,
        mechLock: 1.80,
        supreme: 2.35,
        pitch7: 0.05,
        pitch10: 0.10,
        decking: 15.00,
        outOfArea: 0.20,
        outOfTown: 0.40,
    }

    standard = {
        tearoff: 0.40,
        tearofflayer: 0.20,
        installAll: 0.50,
        installOnly: -0.10,
        addDryIn: 0.10,
        iceNWater100: 0.15,
        solarHideInstall: 0.15,
        snowRemovalBelow15SQ: 0.5,
        snowRemoval16To30SQ: 2.00,
        snowRemoval31To60SQ: 4.00,
        snowRemoval61To100SQ: 6.00,
        snowRemoval101SQNUp: 8.00,
        fasciaInstall: 10.00,
        gutterInstall: 10.00,
        alpineEaveInstall: 2.50,
        sawCutRegletInstall: 5.00,
        cricketSmall: 100.00,
        cricketMedium: 125.00,
        cricketLarge: 175.00,
        cricketExLarge: 225.00, 
        dryInOnly: 0.15, 
        dIPitch7: 0.20,
        dIPitch10: 0.25,
        dIAddStories: 0.05,
        addStories: 0.20,
        architecturalShingles: 0.45,
        tuffRib: 0.65,
        specialtyShingles: 1.20,
        nailStrip: 1.50,
        mechLock: 1.75,
        supreme: 2.30,
        pitch7: 0.05,
        pitch10: 0.10,
        decking: 15.00,
        outOfArea: 0.20,
        outOfTown: 0.40,
    }
    
}


// function pricingObject() {
//     serviceArea = 0;
//     if (burt.servicearea.value == "Local") {
//         return serviceArea = 0;
//     }else if (burt.servicearea.value)
// }

function testAdd(form) {
    const burt = jobInfoObject(form)
    return parseFloat(burt.totalRoofSquareFootage.value) + parseFloat(burt.layer1TearOffSquareFootage.value);
}

// object functions


function jobInfoObject(form) {
    cusInfo = {
        representative: form.rep,
        jobName: form.jobname,
        performingContractor: form.performingcontractor,
        jobAddress: form.jobaddress,
        dateCompleted: form.datecompleted
    }
    return cusInfo
}

function serviceInfoObject(form) {
    serviceInfo = {
        serviceArea: form.servicearea,
        workType: form.worktype
    }
    return serviceInfo

}

function roofInfoObject(form) {
    roofInfo = {
        totalRoofSquareFootage: form.trsf,
        layer1TearOffSquareFootage: form.l1to,
        additionalLayerSquareFootage: form.alto,
        above1StorySquareFootage: form.ta1s
    }
    return roofInfo
}

function roofType1Object(form) {
    roofType1 = {
        materialtype: form.matsel1,
        hipNridge11: form.hipNridge11,
        hipNridge12: form.hipNridge12,
        hipNridge13: form.hipNridge13,
        roofArea1412: form.r14,
        roofArea1712: form.r17,
        roofArea11012: form.r110
    }
    return roofType1
}

function roofType2Object(form) {
    roofType2 = {
        materialtype: form.matsel2,
        hipNridge21: form.hipNridge21,
        hipNridge22: form.hipNridge22,
        hipNridge23: form.hipNridge23,
        roofArea2412: form.r24,
        roofArea2712: form.r27,
        roofArea21012: form.r210
    }
    return roofType2
}

function roofType3Object(form) {
    roofType3 = {
        materialtype: form.matsel3,
        hipNridge31: form.hipNridge31,
        hipNridge32: form.hipNridge32,
        hipNridge33: form.hipNridge33,
        roofArea3412: form.r34,
        roofArea3712: form.r37,
        roofArea31012: form.r310
    }
    return roofType3
}

function extrasObject(form) {
    extras = {
        deckingReplaced: form.etdr,
        secondaryDryIn: form.esdr,
        iceAndWaterShiled: form.e100iw,
        solarHideDryIn: form.eshdi,
        snowRemoval: form.esr,
        fasciaInstalled: form.efi,
        gutterInstalled: form.egi,
        alpineEaveInstalled: form.eaei,
        sawCutRegletInstalled: form.escri
    }
    return extras
}

function notesObject(form) {
    notes = {
        notes1: form.note1,
        notes2: form.notes2,
        notes3: form.note3
    }
    return notes
}