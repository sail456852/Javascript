$(.className).click() // to select all node matching the className
var images = $$('img') // select all <img> nodes
for(each in images){
    console.log(images[each].src)
}

// xPath
$x("//p") // select all <p> nodes
$x("//p[a]") // select all <p> nodes which contain <a>
