$(document).ready(() => {
    //prevent default images sizes
    const minImageSizes = {
            hearts1: {
                width: 168,
                height: 126
            },
            hearts2: {
                width: 162.2,
                height: 121.6
            },
            hearts3: {
                width: 175,
                height: 98.4
            },
            hearts4: {
                width: 179.6,
                height: 83
            },
            shrineheart: {
                width: 182.6,
                height: 182.6
            }
        },
        keys = Object.keys(minImageSizes)
    for (const key of keys) {
        $(`img.${key}`).css("width", eval(`minImageSizes.${key}.width`) + "px")
            .css("height", eval(`minImageSizes.${key}.height`) + "px")
    }

    //spoilers
    $("span.spoiler").click(e => {
        $(e.target).removeClass("spoiler")
    })

    //images
    const isImageBig = {
        hearts1: false,
        hearts2: false,
        hearts3: false,
        hearts4: false,
        shrineheart: false
    }
    $("img").click(e => {
        let width = Number($(e.target).css("width").split("px")[0]),
            height = Number($(e.target).css("height").split("px")[0]),
            fileName = e.target.className

        if (eval(`!isImageBig.${fileName}`)) {
            width *= 2
            height *= 2
        } else {
            width = eval(`minImageSizes.${fileName}.width`)
            height = eval(`minImageSizes.${fileName}.height`)
        }

        eval(`isImageBig.${fileName} = !isImageBig.${fileName}`)

        $(e.target).css("width", width + "px")
            .css("height", height + "px")
            .css("z-index", 1)
    })
})
