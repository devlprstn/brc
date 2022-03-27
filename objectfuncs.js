

function jobInfoObject(form) {
    cusInfo = {
        representative: form.rep,
        jobName: form.jobname,
        performingcontractor: form.performingcontractor,
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